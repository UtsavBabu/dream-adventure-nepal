"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";
import FileUploader from "@/components/admin/FileUploader";

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
    if (!newAttraction.name || !newAttraction.description || !newAttraction.imageUrl) {
      alert("Please fill all fields including attraction image");
      return;
    }
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
        imageUrl: newAttraction.imageUrl,
        itinerary: newAttraction.itinerary ? newAttraction.itinerary.split("\n").map(i => i.trim()).filter(i => i) : undefined,
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
          <h2 className="text-2xl font-semibold mb-6">Add New Attraction</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Name</span>
              <input
                value={newAttraction.name}
                onChange={(e) => setNewAttraction({ ...newAttraction, name: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                placeholder="Attraction name"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300 font-medium">Type</span>
                <input
                  value={newAttraction.type}
                  onChange={(e) => setNewAttraction({ ...newAttraction, type: e.target.value })}
                  placeholder="Hiking Tour, Temple, etc."
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300 font-medium">Location</span>
                <input
                  value={newAttraction.location}
                  onChange={(e) => setNewAttraction({ ...newAttraction, location: e.target.value })}
                  placeholder="City or region"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Description</span>
              <textarea
                value={newAttraction.description}
                onChange={(e) => setNewAttraction({ ...newAttraction, description: e.target.value })}
                rows={3}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                placeholder="Describe this attraction"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300 font-medium">Duration</span>
                <input
                  value={newAttraction.duration}
                  onChange={(e) => setNewAttraction({ ...newAttraction, duration: e.target.value })}
                  placeholder="e.g., 1 Day, 3 Hours"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300 font-medium">Price (USD)</span>
                <input
                  value={newAttraction.price}
                  onChange={(e) => setNewAttraction({ ...newAttraction, price: e.target.value })}
                  placeholder="e.g., $150, $50"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                />
              </label>
            </div>

            <div>
              <span className="text-sm text-slate-300 font-medium block mb-3">Upload Attraction Image</span>
              <FileUploader
                bucket="gallery-images"
                onUpload={(url) => setNewAttraction({ ...newAttraction, imageUrl: url })}
              />
            </div>

            {newAttraction.imageUrl && (
              <div>
                <p className="text-sm text-slate-300 mb-2">Preview:</p>
                <img
                  src={newAttraction.imageUrl}
                  alt="Attraction preview"
                  className="rounded-lg max-h-48 w-full object-cover"
                />
              </div>
            )}

            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Itinerary (optional, one per line)</span>
              <textarea
                value={newAttraction.itinerary}
                onChange={(e) => setNewAttraction({ ...newAttraction, itinerary: e.target.value })}
                rows={3}
                placeholder="Day 1: Morning hike&#10;Day 1: Evening rest&#10;Day 2: Return"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>

            <button
              type="button"
              onClick={addAttraction}
              disabled={!newAttraction.imageUrl}
              className="w-full rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Attraction
            </button>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-6">Current Attractions ({content.attractions.length})</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {content.attractions.length === 0 ? (
              <p className="text-slate-400 text-center py-8">No attractions added yet</p>
            ) : (
              content.attractions.map((attraction) => (
                <div key={attraction.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4 overflow-hidden">
                  <div className="flex gap-4">
                    {attraction.imageUrl && (
                      <img
                        src={attraction.imageUrl}
                        alt={attraction.name}
                        className="w-16 h-16 object-cover rounded flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white truncate">{attraction.name}</h3>
                      <p className="text-slate-400 text-xs">{attraction.type} • {attraction.location}</p>
                      <p className="text-slate-400 text-xs">{attraction.duration} • {attraction.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAttractions(content.attractions.filter((item) => item.id !== attraction.id))}
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