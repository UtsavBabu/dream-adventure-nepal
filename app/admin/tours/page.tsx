"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";

export default function ToursAdmin() {
  const { content, loaded, updateContent } = useAdminContent();
  const [newTour, setNewTour] = useState({
    name: "",
    duration: "",
    difficulty: "",
    price: "",
    maxAltitude: "",
    bestSeason: "",
    description: "",
  });

  if (!loaded) return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;

  const setPortfolio = (items: typeof content.portfolio) => updateContent({ ...content, portfolio: items });

  const addTour = () => {
    if (!newTour.name || !newTour.description) return;
    setPortfolio([
      ...content.portfolio,
      { id: `tour-${Date.now()}`, ...newTour },
    ]);
    setNewTour({ name: "", duration: "", difficulty: "", price: "", maxAltitude: "", bestSeason: "", description: "" });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Tours</h1>
      <p className="text-gray-400 mb-10">Add and update trekking packages and tour cards.</p>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Add New Tour</h2>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Name</span>
            <input
              value={newTour.name}
              onChange={(e) => setNewTour({ ...newTour, name: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Description</span>
            <textarea
              value={newTour.description}
              onChange={(e) => setNewTour({ ...newTour, description: e.target.value })}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <label className="block">
              <span className="text-sm text-slate-300">Duration</span>
              <input
                value={newTour.duration}
                onChange={(e) => setNewTour({ ...newTour, duration: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Difficulty</span>
              <input
                value={newTour.difficulty}
                onChange={(e) => setNewTour({ ...newTour, difficulty: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <label className="block">
              <span className="text-sm text-slate-300">Price</span>
              <input
                value={newTour.price}
                onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Best Season</span>
              <input
                value={newTour.bestSeason}
                onChange={(e) => setNewTour({ ...newTour, bestSeason: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
          </div>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Max Altitude</span>
            <input
              value={newTour.maxAltitude}
              onChange={(e) => setNewTour({ ...newTour, maxAltitude: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <button
            type="button"
            onClick={addTour}
            className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
          >
            Add Tour
          </button>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Current Tours</h2>
          <div className="space-y-4">
            {content.portfolio.map((tour) => (
              <div key={tour.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">{tour.name}</h3>
                    <p className="text-slate-400 text-sm">{tour.duration} • {tour.difficulty}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPortfolio(content.portfolio.filter((item) => item.id !== tour.id))}
                    className="rounded-full border border-red-500 px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
                <p className="mt-3 text-slate-300">{tour.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
