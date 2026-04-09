"use client";

import { useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";
import FileUploader from "@/components/admin/FileUploader";

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
    if (!newCity.name || !newCity.description || !newCity.imageUrl) {
      alert("Please fill all fields including city image");
      return;
    }
    setCities([
      ...content.cities,
      {
        id: `city-${Date.now()}`,
        name: newCity.name,
        description: newCity.description,
        highlights: newCity.highlights.split(",").map(h => h.trim()).filter(h => h),
        imageUrl: newCity.imageUrl,
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
          <h2 className="text-2xl font-semibold mb-6">Add New City</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Name</span>
              <input
                value={newCity.name}
                onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                placeholder="City name"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Description</span>
              <textarea
                value={newCity.description}
                onChange={(e) => setNewCity({ ...newCity, description: e.target.value })}
                rows={3}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
                placeholder="Describe this city"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300 font-medium">Highlights (comma-separated)</span>
              <input
                value={newCity.highlights}
                onChange={(e) => setNewCity({ ...newCity, highlights: e.target.value })}
                placeholder="Temple, Mountain View, Local Market"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
              <p className="text-xs text-slate-500 mt-1">Separate highlights with commas</p>
            </label>

            <div>
              <span className="text-sm text-slate-300 font-medium block mb-3">Upload City Image</span>
              <FileUploader
                bucket="city-images"
                onUpload={(url) => setNewCity({ ...newCity, imageUrl: url })}
              />
            </div>

            {newCity.imageUrl && (
              <div>
                <p className="text-sm text-slate-300 mb-2">Preview:</p>
                <img
                  src={newCity.imageUrl}
                  alt="City preview"
                  className="rounded-lg max-h-48 w-full object-cover"
                />
              </div>
            )}

            <button
              type="button"
              onClick={addCity}
              disabled={!newCity.imageUrl}
              className="w-full rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add City
            </button>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-6">Current Cities ({content.cities.length})</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {content.cities.length === 0 ? (
              <p className="text-slate-400 text-center py-8">No cities added yet</p>
            ) : (
              content.cities.map((city) => (
                <div key={city.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4 overflow-hidden">
                  <div className="flex gap-4">
                    {city.imageUrl && (
                      <img
                        src={city.imageUrl}
                        alt={city.name}
                        className="w-16 h-16 object-cover rounded flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white truncate">{city.name}</h3>
                      <p className="text-slate-400 text-sm line-clamp-1">{city.description}</p>
                      <div className="text-slate-500 text-xs mt-1 flex gap-1 flex-wrap">
                        {city.highlights.slice(0, 2).map((h, i) => (
                          <span key={i} className="bg-slate-800 px-2 py-1 rounded">
                            {h}
                          </span>
                        ))}
                        {city.highlights.length > 2 && (
                          <span className="bg-slate-800 px-2 py-1 rounded">
                            +{city.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCities(content.cities.filter((i) => i.id !== city.id))}
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