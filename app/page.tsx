import Link from "next/link";

export default function Home() {
  const featuredTours = [
    {
      title: "Everest Base Camp Trek",
      duration: "14 Days",
      difficulty: "Challenging",
      price: "$1,299",
      description:
        "A legendary Himalayan journey with breathtaking mountain views and Sherpa culture.",
      icon: "🏔️",
    },
    {
      title: "Annapurna Base Camp Trek",
      duration: "10 Days",
      difficulty: "Moderate",
      price: "$899",
      description:
        "A scenic and rewarding trek through beautiful villages, forests, and mountain landscapes.",
      icon: "🌄",
    },
    {
      title: "Kathmandu Cultural Tour",
      duration: "3 Days",
      difficulty: "Easy",
      price: "$299",
      description:
        "Explore heritage sites, temples, local markets, and the rich culture of Nepal's capital.",
      icon: "🏛️",
    },
  ];

  const reasons = [
    {
      title: "Local Expertise",
      description:
        "Our team knows Nepal deeply and helps you experience the country with authenticity and confidence.",
      icon: "👥",
    },
    {
      title: "Safe & Guided Journeys",
      description:
        "We focus on safety, planning, and trusted local support throughout your adventure.",
      icon: "🛡️",
    },
    {
      title: "Customized Experiences",
      description:
        "From trekking to cultural tours, we can shape each journey around your interests and travel style.",
      icon: "✨",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#F97316] opacity-10 rounded-full blur-3xl"></div>
        <div className="mx-auto max-w-6xl px-6 py-32 relative">
          <span className="inline-block rounded-full bg-[#F97316] px-4 py-1 text-sm font-medium text-white mb-6 animate-pulse">
            ✈️ Explore Nepal
          </span>

          <h1 className="max-w-4xl text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Sacred Peaks. Authentic Trails. Unforgettable Moments.
          </h1>

          <p className="max-w-2xl text-xl leading-8 text-slate-200 mb-8">
            Discover unforgettable trekking experiences, cultural journeys, and custom adventures across Nepal with Dream Adventure Nepal. Your next adventure awaits!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-block rounded-full bg-[#F97316] px-8 py-4 font-semibold text-white text-lg transition duration-200 hover:scale-105 hover:bg-[#EA580C] hover:shadow-xl"
            >
              🗺️ Explore Tours
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition duration-200 hover:bg-white hover:text-[#0B1F3A]"
            >
              💬 Start Planning
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-4">Featured Tours</h2>
          <p className="text-lg text-slate-600">
            Handpicked adventures for unforgettable memories in the heart of the Himalayas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredTours.map((tour) => (
            <div
              key={tour.title}
              className="group rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-[#F97316]"
            >
              <div className="text-5xl mb-4">{tour.icon}</div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  ⏱️ {tour.duration}
                </span>
                <span className="text-sm font-semibold text-[#F97316]">
                  {tour.difficulty}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#F97316] transition">
                {tour.title}
              </h3>

              <p className="text-slate-600 mb-4 leading-6">
                {tour.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-2xl font-bold text-[#F97316]">{tour.price}</span>
                <Link
                  href="/contact"
                  className="inline-block text-sm font-semibold text-[#F97316] transition hover:translate-x-1"
                >
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-4">
              Why Choose Dream Adventure Nepal
            </h2>
            <p className="text-lg text-slate-600">
              We combine local knowledge, careful planning, and a genuine love for Nepal.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group rounded-2xl border-2 border-slate-200 bg-white p-8 transition duration-300 hover:border-[#F97316] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition duration-200">{reason.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#F97316]">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-6">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { number: "500+", label: "Happy Adventurers" },
              { number: "50+", label: "Guided Tours" },
              { number: "25", label: "Years Experience" },
              { number: "4.9★", label: "Customer Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-[#F97316] mb-2">{stat.number}</div>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] px-8 md:px-12 py-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#F97316] opacity-5 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl">
            Whether you want a trekking expedition, cultural exploration, or a custom Nepal itinerary, we're here to help you plan the journey of a lifetime.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#F97316] px-8 py-4 font-semibold text-white text-lg transition duration-200 hover:scale-105 hover:bg-[#EA580C]"
            >
              Plan Your Journey
            </Link>
            <Link
              href="/portfolio"
              className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition duration-200 hover:bg-white hover:text-[#0B1F3A]"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
