"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";

export default function CitiesAdmin() {
  const { content, loaded, updateContent } = useAdminContent();
  const [newCity, setNewCity] = useState({
    name: "",
    description: "",
    highlights: "",
    imageUrl: "",
  });

  if (!loaded) return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;

  const setCities = (items: typeof content.cities) => updateContent({ ...content, cities: items });

  const addCity = () => {
    if (!newCity.name || !newCity.description) return;
    setCities([
      ...content.cities,
      {
        id: `city-${Date.now()}`,
        name: newCity.name,
        description: newCity.description,
        highlights: newCity.highlights.split(",").map(h => h.trim()),
        imageUrl: newCity.imageUrl || undefined,
      },
    ]);
    setNewCity({ name: "", description: "", highlights: "", imageUrl: "" });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Cities</h1>
      <p className="text-gray-400 mb-10">Add and update popular cities in Nepal shown on the portfolio page.</p>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Add New City</h2>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Name</span>
            <input
              value={newCity.name}
              onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Description</span>
            <textarea
              value={newCity.description}
              onChange={(e) => setNewCity({ ...newCity, description: e.target.value })}
              rows={3}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Highlights (comma-separated)</span>
            <input
              value={newCity.highlights}
              onChange={(e) => setNewCity({ ...newCity, highlights: e.target.value })}
              placeholder="Highlight 1, Highlight 2, Highlight 3"
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Image URL</span>
            <input
              value={newCity.imageUrl}
              onChange={(e) => setNewCity({ ...newCity, imageUrl: e.target.value })}
              placeholder="https://..."
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <button
            type="button"
            onClick={addCity}
            className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
          >
            Add City
          </button>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Current Cities</h2>
          <div className="space-y-4">
            {content.cities.map((city) => (
              <div key={city.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">{city.name}</h3>
                    <p className="text-slate-400 text-sm">{city.description}</p>
                    <ul className="text-slate-500 text-xs mt-2">
                      {city.highlights.map((highlight, index) => (
                        <li key={index}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCities(content.cities.filter((item) => item.id !== city.id))}
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