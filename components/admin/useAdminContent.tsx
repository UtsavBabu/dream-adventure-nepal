"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  SiteContent,
  defaultSiteContent,
} from "@/lib/adminData";

export function useAdminContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    if (!supabase) {
      // Fallback to localStorage if Supabase not configured
      setContent(defaultSiteContent);
      setLoaded(true);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('content_type, content_data')
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Error loading content:', error);
        setContent(defaultSiteContent);
      } else {
        // Merge database content with defaults
        const dbContent: Partial<SiteContent> = {};
        data.forEach((row: any) => {
          (dbContent as any)[row.content_type] = row.content_data;
        });

        const mergedContent = { ...defaultSiteContent, ...dbContent };
        setContent(mergedContent);
      }
    } catch (err) {
      console.error('Error loading content:', err);
      setContent(defaultSiteContent);
    }

    setLoaded(true);
  };

  const updateContent = async (next: SiteContent) => {
    setContent(next);

    if (!supabase) return;

    try {
      // Update each content type in the database
      const updates = Object.entries(next).map(([key, value]) => ({
        content_type: key,
        content_data: value,
      }));

      for (const update of updates) {
        const { error } = await supabase
          .from('site_content')
          .upsert(update, {
            onConflict: 'content_type',
            ignoreDuplicates: false
          });

        if (error) {
          console.error('Error updating content:', error);
        }
      }
    } catch (err) {
      console.error('Error updating content:', err);
    }
  };

  const updatePartial = async (patch: Partial<SiteContent>) => {
    const next = { ...content, ...patch };
    await updateContent(next);
  };

  return { content, loaded, updateContent, updatePartial };
}
