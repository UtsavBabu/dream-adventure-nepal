export default function PortfolioPage() {
  const treks = [
    {
      title: "Everest Base Camp Trek",
      duration: "14-16 Days",
      difficulty: "Moderate",
      altitude: "5,545 m",
      highlight:
        "Sherpa culture, Kala Patthar sunrise, and close-up views of Everest.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Annapurna Circuit Trek",
      duration: "10-19 Days",
      difficulty: "Moderate",
      altitude: "5,416 m",
      highlight:
        "Diverse landscapes from jungle to arid highlands and Thorong La pass.",
      image:
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Manaslu Circuit Trek",
      duration: "14-16 Days",
      difficulty: "Hard",
      altitude: "5,106 m",
      highlight:
        "Remote trail, Larkya La pass, and pristine mountain villages.",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Langtang Valley Trek",
      duration: "7-10 Days",
      difficulty: "Easy to Moderate",
      altitude: "4,773 m",
      highlight:
        "Close to Kathmandu, cultural villages, lakes, and the Langtang range.",
      image:
        "https://images.unsplash.com/photo-1517821365200-126fda2f88e0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Upper Mustang Trek",
      duration: "12-14 Days",
      difficulty: "Moderate to Hard",
      altitude: "3,810 m",
      highlight:
        "Tibetan culture, desert canyons, and restricted-access kingdom trails.",
      image:
        "https://images.unsplash.com/photo-1523144187755-76f762b4e8d4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Gokyo Lakes Trek",
      duration: "12+ Days",
      difficulty: "Challenging",
      altitude: "5,357 m",
      highlight:
        "Turquoise glacial lakes, Gokyo Ri summit, and Everest region panoramas.",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Annapurna Base Camp Trek",
      duration: "5-13 Days",
      difficulty: "Moderate",
      altitude: "4,130 m",
      highlight:
        "Mountain amphitheater views of Annapurna South, Machapuchare, and the range.",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Ghorepani Poon Hill Trek",
      duration: "5 Days",
      difficulty: "Easy to Moderate",
      altitude: "3,210 m",
      highlight:
        "Sunrise over the Annapurna range and rhododendron forests.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Kanchenjunga Base Camp Trek",
      duration: "14-28 Days",
      difficulty: "Hard",
      altitude: "5,388 m",
      highlight:
        "Wild eastern Nepal, remote trails, and very few other trekkers.",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321e0d45de?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Dhaulagiri Circuit Trek",
      duration: "14+ Days",
      difficulty: "Very Challenging",
      altitude: "5,360 m",
      highlight:
        "High elevation camps, snow crossings, and a full circuit around Dhaulagiri.",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-[#F97316]">
            Portfolio
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#0B1F3A] sm:text-6xl">
            The Top 10 Trekking Destinations We Have Completed in Nepal
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            These treks represent our best Himalayan experiences, from Everest Base Camp to the remote wilds of Kanchenjunga and Dhaulagiri. Every route below includes real itinerary details, altitude highlights, and the kind of expert support we deliver.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {treks.map((trek) => (
            <article key={trek.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src={trek.image}
                  alt={trek.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-[#0B1F3A]">
                  {trek.title}
                </h2>
                <p className="mt-3 text-slate-600 leading-7">{trek.highlight}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
                    Duration
                    <p className="mt-2 text-lg font-semibold text-[#0B1F3A]">{trek.duration}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
                    Difficulty
                    <p className="mt-2 text-lg font-semibold text-[#0B1F3A]">{trek.difficulty}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
                    Max Altitude
                    <p className="mt-2 text-lg font-semibold text-[#0B1F3A]">{trek.altitude}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1F3A] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">Designed for every trekker</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                Whether you want a challenging high-pass expedition or a shorter cultural trek, our portfolio shows the depth of our Nepal trekking experience. We customize each trip for safety, pace, and local immersion.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-[#11263F] p-10">
              <div>
                <h3 className="text-xl font-semibold text-white">Expert route knowledge</h3>
                <p className="mt-3 text-slate-300">We know the best seasons, acclimatization plans, and permit requirements for every high-altitude itinerary.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Local support</h3>
                <p className="mt-3 text-slate-300">Our team works with trusted Nepali guides, porters, and lodges to keep your trek safe and comfortable.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Real trek records</h3>
                <p className="mt-3 text-slate-300">These treks are not theoretical — this portfolio represents routes we have completed and refined in Nepal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-[#F97316] px-8 py-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold">Ready to book your next Nepal trekking adventure?</h2>
          <p className="mt-4 max-w-2xl text-slate-100 leading-7">
            Contact us to plan a custom itinerary for Everest Base Camp, Annapurna Circuit, Gokyo Lakes, Upper Mustang, Kanchenjunga, Dhaulagiri Circuit, and more.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#0B1F3A] transition hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
