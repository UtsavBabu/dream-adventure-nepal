"use client";

import { useEffect, useState } from "react";
import { loadSiteContent, SiteContent } from "@/lib/adminData";

export default function AboutContent() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    setContent(loadSiteContent());
  }, []);

  if (!content) return null;

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-[#F97316]">
              About Us
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#0B1F3A] sm:text-6xl">
              {content.about.headline}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">{content.about.description}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {content.about.cards.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <h2 className="text-2xl font-semibold text-[#0B1F3A]">{item.title}</h2>
              <p className="mt-4 text-slate-600 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F3A]">{content.about.promiseTitle}</h2>
              <p className="mt-6 max-w-xl text-slate-600 leading-8">{content.about.promiseText}</p>
              <ul className="mt-8 space-y-4 text-slate-600">
                {content.about.promiseBullets.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#F97316]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-[#0B1F3A] p-10 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">Our Promise</h3>
              <p className="mt-4 text-slate-200 leading-7">
                Every guest receives personal attention, expert support, and a journey designed to exceed expectations.
              </p>
              <div className="mt-8 space-y-4 rounded-3xl bg-[#11263F] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Trusted Local Guides</p>
                <p className="text-lg font-semibold text-white">
                  Experienced guides, strong local relationships, and a deep respect for culture and environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-[#0B1F3A] px-8 py-12 text-white">
          <h2 className="text-3xl font-bold">Ready to plan your Nepal adventure?</h2>
          <p className="mt-4 max-w-2xl text-slate-300 leading-7">
            Contact us today and we’ll help build a custom itinerary for trekking, cultural travel, or a multi-day Himalayan experience.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-[#F97316] px-6 py-3 font-semibold text-white transition hover:bg-[#EA580C]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
