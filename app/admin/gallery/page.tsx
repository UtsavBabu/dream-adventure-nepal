"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";

export default function GalleryAdmin() {
  const { content, loaded, updateContent } = useAdminContent();
  const [newItem, setNewItem] = useState({ title: "", description: "", imageUrl: "" });

  if (!loaded) return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;

  const setGallery = (items: typeof content.gallery) => updateContent({ ...content, gallery: items });

  const addItem = () => {
    if (!newItem.title || !newItem.description) return;
    setGallery([
      ...content.gallery,
      {
        id: `gallery-${Date.now()}`,
        title: newItem.title,
        description: newItem.description,
        imageUrl: newItem.imageUrl || undefined,
      },
    ]);
    setNewItem({ title: "", description: "", imageUrl: "" });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Gallery</h1>
      <p className="text-gray-400 mb-10">Add and remove images or gallery items shown on the gallery page.</p>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Add Gallery Item</h2>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Title</span>
            <input
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Description</span>
            <textarea
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Image URL</span>
            <input
              value={newItem.imageUrl}
              onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
              placeholder="https://..."
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <button
            type="button"
            onClick={addItem}
            className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
          >
            Add Gallery Item
          </button>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Gallery Items</h2>
          <div className="space-y-4">
            {content.gallery.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setGallery(content.gallery.filter((i) => i.id !== item.id))}
                    className="rounded-full border border-red-500 px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
