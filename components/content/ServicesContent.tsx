"use client";

import { useEffect, useState } from "react";
import { loadSiteContent, SiteContent } from "@/lib/adminData";

export default function ServicesContent() {
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
            ⚡ Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">What We Offer</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Comprehensive adventure and travel services to make your Nepal experience unforgettable.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200 transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 group-hover:text-[#F97316]">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="text-[#F97316]">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-12 text-center">Why Choose Our Services?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Expert Knowledge", description: "Years of experience in Nepal's best destinations" },
              { title: "Safety First", description: "Comprehensive safety protocols and insurance coverage" },
              { title: "Value for Money", description: "Transparent pricing with no hidden charges" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-block rounded-full bg-[#F97316] w-16 h-16 flex items-center justify-center text-2xl mb-4">
                  {['🎓', '🛡️', '💎'][idx]}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
