"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";

export default function AttractionsAdmin() {
  const { content, loaded, updateContent } = useAdminContent();
  const [newAttraction, setNewAttraction] = useState({
    name: "",
    type: "",
    location: "",
    description: "",
    duration: "",
    price: "",
    imageUrl: "",
    itinerary: "",
  });

  if (!loaded) return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;

  const setAttractions = (items: typeof content.attractions) => updateContent({ ...content, attractions: items });

  const addAttraction = () => {
    if (!newAttraction.name || !newAttraction.description) return;
    setAttractions([
      ...content.attractions,
      {
        id: `attraction-${Date.now()}`,
        name: newAttraction.name,
        type: newAttraction.type,
        location: newAttraction.location,
        description: newAttraction.description,
        duration: newAttraction.duration,
        price: newAttraction.price,
        imageUrl: newAttraction.imageUrl || undefined,
        itinerary: newAttraction.itinerary ? newAttraction.itinerary.split("\n").map(i => i.trim()) : undefined,
      },
    ]);
    setNewAttraction({
      name: "",
      type: "",
      location: "",
      description: "",
      duration: "",
      price: "",
      imageUrl: "",
      itinerary: "",
    });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Attractions</h1>
      <p className="text-gray-400 mb-10">Add and update top attractions and tours in Nepal shown on the portfolio page.</p>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Add New Attraction</h2>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Name</span>
            <input
              value={newAttraction.name}
              onChange={(e) => setNewAttraction({ ...newAttraction, name: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <label className="block">
              <span className="text-sm text-slate-300">Type</span>
              <input
                value={newAttraction.type}
                onChange={(e) => setNewAttraction({ ...newAttraction, type: e.target.value })}
                placeholder="e.g., Hiking Tour"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Location</span>
              <input
                value={newAttraction.location}
                onChange={(e) => setNewAttraction({ ...newAttraction, location: e.target.value })}
                placeholder="e.g., Nagarkot"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
          </div>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Description</span>
            <textarea
              value={newAttraction.description}
              onChange={(e) => setNewAttraction({ ...newAttraction, description: e.target.value })}
              rows={3}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <label className="block">
              <span className="text-sm text-slate-300">Duration</span>
              <input
                value={newAttraction.duration}
                onChange={(e) => setNewAttraction({ ...newAttraction, duration: e.target.value })}
                placeholder="e.g., 1 Day"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Price</span>
              <input
                value={newAttraction.price}
                onChange={(e) => setNewAttraction({ ...newAttraction, price: e.target.value })}
                placeholder="e.g., $150"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
          </div>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Image URL</span>
            <input
              value={newAttraction.imageUrl}
              onChange={(e) => setNewAttraction({ ...newAttraction, imageUrl: e.target.value })}
              placeholder="https://..."
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Itinerary (one per line, optional)</span>
            <textarea
              value={newAttraction.itinerary}
              onChange={(e) => setNewAttraction({ ...newAttraction, itinerary: e.target.value })}
              rows={4}
              placeholder="Day 1: Description&#10;Day 2: Description"
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <button
            type="button"
            onClick={addAttraction}
            className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
          >
            Add Attraction
          </button>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Current Attractions</h2>
          <div className="space-y-4">
            {content.attractions.map((attraction) => (
              <div key={attraction.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">{attraction.name}</h3>
                    <p className="text-slate-400 text-sm">{attraction.type} • {attraction.location}</p>
                    <p className="text-slate-300 text-sm mt-1">{attraction.description}</p>
                    <p className="text-slate-500 text-xs mt-2">{attraction.duration} • {attraction.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAttractions(content.attractions.filter((item) => item.id !== attraction.id))}
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