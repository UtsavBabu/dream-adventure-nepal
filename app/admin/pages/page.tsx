"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";
import LogoUploader from "@/components/admin/LogoUploader";

export default function PagesAdmin() {
  const { content, loaded, updateContent, updatePartial } = useAdminContent();
  const [newCard, setNewCard] = useState({ title: "", text: "" });

  if (!loaded) {
    return <div className="min-h-screen bg-slate-900 text-white p-8">Loading admin content...</div>;
  }

  const setHome = (next: typeof content.home) => updatePartial({ home: next });
  const setAbout = (next: typeof content.about) => updatePartial({ about: next });
  const setContact = (next: typeof content.contact) => updatePartial({ contact: next });

  const addCard = () => {
    if (!newCard.title || !newCard.text) return;
    setAbout({ ...content.about, cards: [...content.about.cards, newCard] });
    setNewCard({ title: "", text: "" });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Pages</h1>
      <p className="text-gray-400 mb-10">
        Edit homepage, about page, contact details, and upload your logo from here.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Home Page</h2>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Hero Title</span>
            <input
              value={content.home.heroTitle}
              onChange={(e) => setHome({ ...content.home, heroTitle: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm text-slate-300">Hero Subtitle</span>
            <textarea
              value={content.home.heroSubtitle}
              onChange={(e) => setHome({ ...content.home, heroSubtitle: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              rows={4}
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm text-slate-300">CTA Text</span>
              <input
                value={content.home.heroCtaText}
                onChange={(e) => setHome({ ...content.home, heroCtaText: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">CTA Link</span>
              <input
                value={content.home.heroCtaHref}
                onChange={(e) => setHome({ ...content.home, heroCtaHref: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">About Page</h2>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Headline</span>
            <input
              value={content.about.headline}
              onChange={(e) => setAbout({ ...content.about, headline: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Description</span>
            <textarea
              value={content.about.description}
              onChange={(e) => setAbout({ ...content.about, description: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              rows={4}
            />
          </label>

          <div className="space-y-4">
            {content.about.cards.map((card, index) => (
              <div key={index} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <label className="block mb-3">
                  <span className="text-sm text-slate-300">Card Title</span>
                  <input
                    value={card.title}
                    onChange={(e) => {
                      const cards = [...content.about.cards];
                      cards[index] = { ...cards[index], title: e.target.value };
                      setAbout({ ...content.about, cards });
                    }}
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                  />
                </label>
                <label className="block mb-3">
                  <span className="text-sm text-slate-300">Card Text</span>
                  <textarea
                    value={card.text}
                    onChange={(e) => {
                      const cards = [...content.about.cards];
                      cards[index] = { ...cards[index], text: e.target.value };
                      setAbout({ ...content.about, cards });
                    }}
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                    rows={3}
                  />
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const cards = content.about.cards.filter((_, idx) => idx !== index);
                    setAbout({ ...content.about, cards });
                  }}
                  className="rounded-full border border-[#F97316] px-4 py-2 text-sm font-semibold text-[#F97316] transition hover:bg-[#F97316] hover:text-white"
                >
                  Remove card
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-4">
            <h3 className="text-sm font-semibold text-white mb-3">Add new about card</h3>
            <input
              value={newCard.title}
              onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
              placeholder="Title"
              className="mb-3 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
            <textarea
              value={newCard.text}
              onChange={(e) => setNewCard({ ...newCard, text: e.target.value })}
              placeholder="Text"
              rows={3}
              className="mb-3 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
            <button
              type="button"
              onClick={addCard}
              className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
            >
              Add Card
            </button>
          </div>
        </section>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Email</span>
            <input
              value={content.contact.email}
              onChange={(e) => setContact({ ...content.contact, email: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Phone</span>
            <input
              value={content.contact.phone}
              onChange={(e) => setContact({ ...content.contact, phone: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Location</span>
            <input
              value={content.contact.location}
              onChange={(e) => setContact({ ...content.contact, location: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
        </section>

        <LogoUploader content={content} updateContent={updateContent} />
      </div>
    </main>
  );
}
