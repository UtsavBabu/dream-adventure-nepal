"use client";

import { useEffect, useState } from "react";
import { loadSiteContent, SiteContent } from "@/lib/adminData";

export default function BlogContent() {
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
            📝 Blog
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Adventure Stories & Tips</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Insights, guides, and stories from our trekking adventures in Nepal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.blog.map((blog) => (
            <article
              key={blog.id}
              className="group rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200 transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">📝</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-[#F97316]">
                  {blog.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#F97316] transition">
                {blog.title}
              </h3>
              <p className="text-slate-600 mb-4">{blog.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <time className="text-sm text-slate-500">{blog.date}</time>
                <a href="#" className="text-sm font-semibold text-[#F97316] hover:translate-x-1 transition">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Adventure Story</h2>
            <p className="text-slate-200 mb-6 max-w-2xl">
              Subscribe to get the latest travel tips, trek guides, and adventure stories delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full px-6 py-3 text-[#0B1F3A] focus:outline-none"
              />
              <button className="rounded-full bg-[#F97316] px-8 py-3 font-semibold text-white transition hover:bg-[#EA580C]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
