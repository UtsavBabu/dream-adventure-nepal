export default function Home() {
  const featuredTours = [
    {
      title: "Everest Base Camp Trek",
      duration: "14 Days",
      difficulty: "Challenging",
      description:
        "A legendary Himalayan journey with breathtaking mountain views and Sherpa culture.",
    },
    {
      title: "Annapurna Base Camp Trek",
      duration: "10 Days",
      difficulty: "Moderate",
      description:
        "A scenic and rewarding trek through beautiful villages, forests, and mountain landscapes.",
    },
    {
      title: "Kathmandu Cultural Tour",
      duration: "3 Days",
      difficulty: "Easy",
      description:
        "Explore heritage sites, temples, local markets, and the rich culture of Nepal’s capital.",
    },
  ];

  const reasons = [
    {
      title: "Local Expertise",
      description:
        "Our team knows Nepal deeply and helps you experience the country with authenticity and confidence.",
    },
    {
      title: "Safe & Guided Journeys",
      description:
        "We focus on safety, planning, and trusted local support throughout your adventure.",
    },
    {
      title: "Customized Experiences",
      description:
        "From trekking to cultural tours, we can shape each journey around your interests and travel style.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-[#F97316]">
            Explore Nepal
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-[#0B1F3A] sm:text-6xl">
            Sacred Peaks. Authentic Trails.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover unforgettable trekking experiences, cultural journeys, and
            custom adventures across Nepal with Dream Adventure Nepal.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/portfolio"
              className="rounded-full bg-[#F97316] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#EA580C]"
            >
              Explore Tours
            </a>
            <a
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-[#0B1F3A] transition hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-[#0B1F3A]">Featured Tours</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Start with some of our most popular adventure and travel experiences.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredTours.map((tour) => (
            <div
              key={tour.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {tour.duration}
                </span>
                <span className="text-sm font-semibold text-[#F97316]">
                  {tour.difficulty}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#0B1F3A]">
                {tour.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {tour.description}
              </p>

              <a
                href="/contact"
                className="mt-6 inline-block text-sm font-semibold text-[#F97316] transition hover:translate-x-1"
              >
                Inquire Now →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Why Choose Dream Adventure Nepal
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            We combine local knowledge, careful planning, and a genuine love for
            Nepal to create meaningful journeys.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-orange-300 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#0B1F3A]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-[#0B1F3A] px-8 py-12 text-white">
          <h2 className="text-3xl font-bold">Ready for your next adventure?</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Whether you want a trekking expedition, cultural exploration, or a
            custom Nepal itinerary, we’re here to help you plan it.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="rounded-full bg-[#F97316] px-6 py-3 font-semibold text-white transition hover:bg-[#EA580C]"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}