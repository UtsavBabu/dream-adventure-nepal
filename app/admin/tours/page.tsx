"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";
import FileUploader from "@/components/admin/FileUploader";

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
    imageUrl: "",
  });

  if (!loaded) return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;

  const setPortfolio = (items: typeof content.portfolio) => updateContent({ ...content, portfolio: items });

  const addTour = () => {
    if (!newTour.name || !newTour.description || !newTour.imageUrl) {
      alert("Please fill all fields including tour image");
      return;
    }
    setPortfolio([
      ...content.portfolio,
      { id: `tour-${Date.now()}`, ...newTour },
    ]);
    setNewTour({ name: "", duration: "", difficulty: "", price: "", maxAltitude: "", bestSeason: "", description: "", imageUrl: "" });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Tours</h1>
      <p className="text-gray-400 mb-10">Add and update trekking packages and tour cards.</p>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-6">Add New Tour</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Name</span>
              <input
                value={newTour.name}
                onChange={(e) => setNewTour({ ...newTour, name: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                placeholder="Tour package name"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Description</span>
              <textarea
                value={newTour.description}
                onChange={(e) => setNewTour({ ...newTour, description: e.target.value })}
                rows={3}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                placeholder="Describe this tour"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300 font-medium">Duration</span>
                <input
                  value={newTour.duration}
                  onChange={(e) => setNewTour({ ...newTour, duration: e.target.value })}
                  placeholder="e.g., 7 days"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300 font-medium">Difficulty</span>
                <select
                  value={newTour.difficulty}
                  onChange={(e) => setNewTour({ ...newTour, difficulty: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                >
                  <option>Select difficulty</option>
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Challenging</option>
                  <option>Expert</option>
                </select>
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300 font-medium">Price (USD)</span>
                <input
                  value={newTour.price}
                  onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
                  placeholder="e.g., 1,500"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300 font-medium">Best Season</span>
                <input
                  value={newTour.bestSeason}
                  onChange={(e) => setNewTour({ ...newTour, bestSeason: e.target.value })}
                  placeholder="e.g., September - November"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Max Altitude</span>
              <input
                value={newTour.maxAltitude}
                onChange={(e) => setNewTour({ ...newTour, maxAltitude: e.target.value })}
                placeholder="e.g., 4,130m"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>

            <div>
              <span className="text-sm text-slate-300 font-medium block mb-3">Upload Tour Image</span>
              <FileUploader
                bucket="tour-images"
                onUpload={(url) => setNewTour({ ...newTour, imageUrl: url })}
              />
            </div>

            {newTour.imageUrl && (
              <div>
                <p className="text-sm text-slate-300 mb-2">Preview:</p>
                <img
                  src={newTour.imageUrl}
                  alt="Tour preview"
                  className="rounded-lg max-h-48 w-full object-cover"
                />
              </div>
            )}

            <button
              type="button"
              onClick={addTour}
              disabled={!newTour.imageUrl}
              className="w-full rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Tour
            </button>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-6">Current Tours ({content.portfolio.length})</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {content.portfolio.length === 0 ? (
              <p className="text-slate-400 text-center py-8">No tours added yet</p>
            ) : (
              content.portfolio.map((tour) => (
                <div key={tour.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4 overflow-hidden">
                  <div className="flex gap-4">
                    {tour.imageUrl && (
                      <img
                        src={tour.imageUrl}
                        alt={tour.name}
                        className="w-16 h-16 object-cover rounded flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white truncate">{tour.name}</h3>
                      <p className="text-slate-400 text-xs">{tour.duration} • {tour.difficulty}</p>
                      <p className="text-slate-400 text-xs">${tour.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPortfolio(content.portfolio.filter((item) => item.id !== tour.id))}
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
