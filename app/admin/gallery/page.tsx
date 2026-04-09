"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";
import FileUploader from "@/components/admin/FileUploader";

export default function GalleryAdmin() {
  const { content, loaded, updateContent } = useAdminContent();
  const [newItem, setNewItem] = useState({ title: "", description: "", imageUrl: "" });

  if (!loaded) return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;

  const setGallery = (items: typeof content.gallery) => updateContent({ ...content, gallery: items });

  const addItem = () => {
    if (!newItem.title || !newItem.description || !newItem.imageUrl) {
      alert("Please fill all fields including image");
      return;
    }
    setGallery([
      ...content.gallery,
      {
        id: `gallery-${Date.now()}`,
        title: newItem.title,
        description: newItem.description,
        imageUrl: newItem.imageUrl,
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
          <h2 className="text-2xl font-semibold mb-6">Add Gallery Item</h2>
          <div className="space-y-6">
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Title</span>
              <input
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                placeholder="Gallery item title"
              />
            </label>

            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Description</span>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                rows={4}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                placeholder="Describe this gallery item"
              />
            </label>

            <div>
              <span className="text-sm text-slate-300 font-medium block mb-3">Upload Image</span>
              <FileUploader
                bucket="gallery-images"
                onUpload={(url) => setNewItem({ ...newItem, imageUrl: url })}
              />
            </div>

            {newItem.imageUrl && (
              <div>
                <p className="text-sm text-slate-300 mb-2">Preview:</p>
                <img
                  src={newItem.imageUrl}
                  alt="Preview"
                  className="rounded-lg max-h-48 w-full object-cover"
                />
              </div>
            )}

            <button
              type="button"
              onClick={addItem}
              disabled={!newItem.imageUrl}
              className="w-full rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Gallery Item
            </button>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-6">Gallery Items ({content.gallery.length})</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {content.gallery.length === 0 ? (
              <p className="text-slate-400 text-center py-8">No gallery items yet</p>
            ) : (
              content.gallery.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4 overflow-hidden">
                  <div className="flex gap-4">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white truncate">{item.title}</h3>
                      <p className="text-slate-400 text-sm line-clamp-2">{item.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGallery(content.gallery.filter((i) => i.id !== item.id))}
                      className="rounded-full border border-red-500 px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white flex-shrink-0"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
