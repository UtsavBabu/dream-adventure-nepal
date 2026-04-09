"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { loadSiteContent, SiteContent, defaultSiteContent } from "@/lib/adminData";

export default function HomeContent() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    setContent(loadSiteContent());
  }, []);

  if (!content) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] text-slate-900">
      <section className="bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#F97316] opacity-10 rounded-full blur-3xl"></div>
        <div className="mx-auto max-w-6xl px-6 py-32 relative">
          <span className="inline-block rounded-full bg-[#F97316] px-4 py-1 text-sm font-medium text-white mb-6 animate-pulse">
            ✈️ Explore Nepal
          </span>

          <h1 className="max-w-4xl text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {content.home.heroTitle}
          </h1>

          <p className="max-w-2xl text-xl leading-8 text-slate-200 mb-8">
            {content.home.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={content.home.heroCtaHref}
              className="inline-block rounded-full bg-[#F97316] px-8 py-4 font-semibold text-white text-lg transition duration-200 hover:scale-105 hover:bg-[#EA580C] hover:shadow-xl"
            >
              {content.home.heroCtaText}
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition duration-200 hover:bg-white hover:text-[#0B1F3A]"
            >
              💬 Start Planning
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-4">
            {content.home.featureTitle}
          </h2>
          <p className="text-lg text-slate-600">{content.home.featureSubtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {content.portfolio.slice(0, 3).map((tour) => (
            <div
              key={tour.id}
              className="group rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-[#F97316]"
            >
              <div className="text-5xl mb-4">🏔️</div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  ⏱️ {tour.duration}
                </span>
                <span className="text-sm font-semibold text-[#F97316]">
                  {tour.difficulty}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#F97316] transition">
                {tour.name}
              </h3>
              <p className="text-slate-600 mb-4 leading-6">{tour.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-2xl font-bold text-[#F97316]">{tour.price}</span>
                <Link
                  href="/contact"
                  className="inline-block text-sm font-semibold text-[#F97316] transition hover:translate-x-1"
                >
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
