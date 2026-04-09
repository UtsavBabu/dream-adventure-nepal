import Link from "next/link";

export default function PortfolioPage() {
  const tours = [
    {
      id: 1,
      name: "Everest Base Camp Trek",
      duration: "14 Days",
      difficulty: "Challenging",
      price: "$1,299",
      maxAltitude: "5,364m",
      bestSeason: "Sep-Oct, Mar-May",
      description: "The world's most iconic trek to the base of Mount Everest",
      icon: "🏔️",
    },
    {
      id: 2,
      name: "Annapurna Base Camp Trek",
      duration: "10 Days",
      difficulty: "Moderate",
      price: "$899",
      maxAltitude: "4,130m",
      bestSeason: "Oct-Nov, Mar-Apr",
      description: "A stunning circuit with diverse landscapes and mountain views",
      icon: "🌄",
    },
    {
      id: 3,
      name: "Kathmandu Valley Cultural Tour",
      duration: "3 Days",
      difficulty: "Easy",
      price: "$299",
      maxAltitude: "1,400m",
      bestSeason: "Year-round",
      description: "Explore temples, monasteries, and the rich heritage of Nepal's capital",
      icon: "🏛️",
    },
    {
      id: 4,
      name: "Langtang Valley Trek",
      duration: "8 Days",
      difficulty: "Moderate",
      price: "$799",
      maxAltitude: "3,570m",
      bestSeason: "Sep-Nov, Mar-May",
      description: "Close to Kathmandu with stunning Himalayan views and Tamang culture",
      icon: "🏔️",
    },
    {
      id: 5,
      name: "Manali to Leh Adventure",
      duration: "12 Days",
      difficulty: "Challenging",
      price: "$1,199",
      maxAltitude: "5,328m",
      bestSeason: "Jul-Aug",
      description: "Thrilling high-altitude pass crossing with spectacular mountain scenery",
      icon: "🚗",
    },
    {
      id: 6,
      name: "Pokhara Relaxation Package",
      duration: "5 Days",
      difficulty: "Easy",
      price: "$599",
      maxAltitude: "900m",
      bestSeason: "Year-round",
      description: "Lakeside relaxation, paragliding, and local experiences",
      icon: "🏖️",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white">
      {/* Hero Section */}
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

      {/* Tours Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group rounded-2xl bg-white shadow-md ring-1 ring-slate-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a52] px-6 py-8 text-white">
                <div className="text-5xl mb-2">{tour.icon}</div>
                <h3 className="text-2xl font-bold">{tour.name}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-4">{tour.description}</p>

                {/* Details Grid */}
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

                {/* Price and CTA */}
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

      {/* CTA */}
      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Can't Find Your Ideal Trek?</h2>
            <p className="text-slate-200 mb-8 max-w-2xl">
              We offer custom itineraries tailored to your preferences, fitness level, and interests.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-[#EA580C]"
            >
              Create Custom Itinerary
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
