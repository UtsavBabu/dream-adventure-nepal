"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { loadSiteContent, SiteContent } from "@/lib/adminData";

export default function PortfolioContent() {
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
            🗺️ Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">All Adventures</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Explore our complete collection of guided treks, tours, and adventure experiences in Nepal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Popular Cities in Nepal</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.cities.map((city) => (
            <div
              key={city.id}
              className="group rounded-2xl bg-white shadow-md ring-1 ring-slate-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {city.imageUrl ? (
                <img
                  src={city.imageUrl}
                  alt={city.name}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a52] h-48 flex items-center justify-center text-6xl text-white">
                  🏙️
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{city.name}</h3>
                <p className="text-slate-600 mb-4">{city.description}</p>
                <ul className="text-sm text-slate-500 mb-4">
                  {city.highlights.map((highlight, index) => (
                    <li key={index}>• {highlight}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 bg-slate-50">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Top Attractions in Nepal</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="group rounded-2xl bg-white shadow-md ring-1 ring-slate-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {attraction.imageUrl ? (
                <img
                  src={attraction.imageUrl}
                  alt={attraction.name}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a52] h-48 flex items-center justify-center text-6xl text-white">
                  🏞️
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{attraction.name}</h3>
                <p className="text-slate-600 mb-2">
                  <span className="font-semibold">{attraction.type}</span> • {attraction.location}
                </p>
                <p className="text-slate-600 mb-4">{attraction.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Duration</p>
                    <p className="text-sm font-bold text-[#0B1F3A]">⏱️ {attraction.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Price</p>
                    <p className="text-sm font-bold text-[#F97316]">{attraction.price}</p>
                  </div>
                </div>
                {attraction.itinerary && (
                  <details className="mb-4">
                    <summary className="cursor-pointer text-sm font-semibold text-[#0B1F3A] mb-2">
                      View Itinerary
                    </summary>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {attraction.itinerary.map((day, index) => (
                        <li key={index}>• {day}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Trekking Packages</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.portfolio.map((tour) => (
            <div
              key={tour.id}
              className="group rounded-2xl bg-white shadow-md ring-1 ring-slate-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a52] px-6 py-8 text-white">
                <div className="text-5xl mb-2">🏔️</div>
                <h3 className="text-2xl font-bold">{tour.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{tour.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-slate-200">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Duration</p>
                    <p className="text-sm font-bold text-[#0B1F3A]">⏱️ {tour.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Difficulty</p>
                    <p className="text-sm font-bold text-[#F97316]">{tour.difficulty}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Altitude</p>
                    <p className="text-sm font-bold text-[#0B1F3A]">⛰️ {tour.maxAltitude}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Best Season</p>
                    <p className="text-sm font-bold text-[#0B1F3A]">📅 {tour.bestSeason}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Starting From</p>
                    <p className="text-3xl font-bold text-[#F97316]">{tour.price}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="rounded-full bg-[#F97316] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#EA580C] whitespace-nowrap"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
