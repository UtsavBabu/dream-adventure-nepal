"use client";

import { useEffect, useState } from "react";
import { loadSiteContent, SiteContent } from "@/lib/adminData";

export default function ContactContent() {
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
            💬 Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Have questions? We'd love to hear from you. Get in touch with our team today!
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              title: "Email",
              info: content.contact.email,
              icon: "📧",
              link: `mailto:${content.contact.email}`,
            },
            {
              title: "Phone",
              info: content.contact.phone,
              icon: "📱",
              link: `tel:${content.contact.phone.replace(/\s+/g, "")}`,
            },
            {
              title: "Location",
              info: content.contact.location,
              icon: "📍",
              link: "#",
            },
          ].map((method) => (
            <a
              key={method.title}
              href={method.link}
              className="group rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200 transition duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 group-hover:text-[#F97316]">
                {method.title}
              </h3>
              <p className="text-slate-600">{method.info}</p>
            </a>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white p-8 md:p-12 shadow-lg ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-2">Send us a Message</h2>
            <p className="text-slate-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#0B1F3A] mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0B1F3A] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0B1F3A] mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    placeholder="+977..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0B1F3A] mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  placeholder="Tell us about your adventure plans..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#F97316] px-6 py-4 font-semibold text-white text-lg transition hover:bg-[#EA580C]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
