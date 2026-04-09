"use client";

import { useEffect, useState } from "react";
import {
  ADMIN_CONTENT_KEY,
  SiteContent,
  defaultSiteContent,
  loadSiteContent,
  saveSiteContent,
} from "@/lib/adminData";

export function useAdminContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadedContent = loadSiteContent();
    setContent(loadedContent);
    setLoaded(true);
  }, []);

  const updateContent = (next: SiteContent) => {
    setContent(next);
    saveSiteContent(next);
  };

  const updatePartial = (patch: Partial<SiteContent>) => {
    const next = { ...content, ...patch };
    setContent(next);
    saveSiteContent(next);
  };

  return { content, loaded, updateContent, updatePartial };
}
