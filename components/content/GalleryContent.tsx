"use client";

import { useEffect, useState } from "react";
import { loadSiteContent, SiteContent } from "@/lib/adminData";

export default function GalleryContent() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    setContent(loadSiteContent());
  }, []);

  if (!content) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white">
      <section className="bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] text-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block rounded-full bg-[#F97316] px-4 py-1 text-sm font-medium text-white mb-4">
            🖼️ Gallery
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Moments from the Himalayas, culture, and unforgettable journeys captured across Nepal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.gallery.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white shadow-md ring-1 ring-slate-200 transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a52] h-48 flex items-center justify-center text-6xl">
                  📸
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1F3A] group-hover:text-[#F97316] transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Experience These Moments Yourself</h2>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              Ready to create your own unforgettable memories in Nepal?
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-[#EA580C]"
            >
              Start Your Adventure
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
