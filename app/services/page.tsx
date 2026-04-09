import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Guided Trekking Expeditions",
      description: "Professional guides for all difficulty levels from easy walks to challenging mountain peaks.",
      icon: "🏔️",
      features: ["Expert guides", "Small groups", "All seasons"],
    },
    {
      title: "Cultural Tours",
      description: "Immerse yourself in Nepali culture with our curated heritage and community experiences.",
      icon: "🏛️",
      features: ["Local guides", "Authentic experiences", "Cultural events"],
    },
    {
      title: "Adventure Sports",
      description: "Experience adrenaline-pumping activities like rock climbing, paragliding, and rafting.",
      icon: "🪂",
      features: ["Safety first", "Equipment provided", "Professional instructors"],
    },
    {
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your interests, schedule, and budget.",
      icon: "📋",
      features: ["Personal consultation", "Flexible plans", "Budget options"],
    },
    {
      title: "Photography Tours",
      description: "Capture stunning Himalayan landscapes with our specialized photography-focused treks.",
      icon: "📸",
      features: ["Photography tips", "Best locations", "Small groups"],
    },
    {
      title: "Group Packages",
      description: "Affordable packages for groups, corporates, and organizations with special rates.",
      icon: "👥",
      features: ["Group discounts", "Flexible dates", "Team building"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] text-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block rounded-full bg-[#F97316] px-4 py-1 text-sm font-medium text-white mb-4">
            ⚡ Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">What We Offer</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Comprehensive adventure and travel services to make your Nepal experience unforgettable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200 transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 group-hover:text-[#F97316]">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="text-[#F97316]">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why These Services */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Why Choose Our Services?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Expert Knowledge", description: "Years of experience in Nepal's best destinations" },
              { title: "Safety First", description: "Comprehensive safety protocols and insurance coverage" },
              { title: "Value for Money", description: "Transparent pricing with no hidden charges" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-block rounded-full bg-[#F97316] w-16 h-16 flex items-center justify-center text-2xl mb-4">
                  {[
                    "🎓",
                    "🛡️",
                    "💎",
                  ][idx]}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#1a3a52] p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Book a Service?</h2>
            <p className="text-slate-200 mb-8 max-w-2xl">
              Contact us today and let's plan the perfect adventure for you.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-[#EA580C]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
