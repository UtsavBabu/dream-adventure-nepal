const services = [
  {
    title: "Trekking Packages",
    description:
      "Guided trekking experiences through Nepal’s most beautiful mountain trails.",
  },
  {
    title: "Cultural Tours",
    description:
      "Immersive travel experiences focused on heritage, cities, temples, and local life.",
  },
  {
    title: "Customized Itineraries",
    description:
      "Flexible travel planning tailored to your schedule, budget, and interests.",
  },
  {
    title: "Private Guided Trips",
    description:
      "Exclusive journeys with personalized guidance and local support.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold text-[#0B1F3A]">Our Services</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          We offer trekking, touring, and travel planning services for travelers
          looking to experience Nepal with confidence and authenticity.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold text-[#0B1F3A]">
                {service.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}