export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold text-[#0B1F3A]">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Let’s plan your dream adventure in Nepal. Share your interests, dates,
          and ideas, and we’ll get back to you.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-[#0B1F3A]">Get in Touch</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p><strong>Location:</strong> Kathmandu, Nepal</p>
              <p><strong>Phone:</strong> +977 9800000000</p>
              <p><strong>Email:</strong> info@dreamadventurenepal.com</p>
            </div>
          </div>

          <form className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-[#0B1F3A]">Send an Inquiry</h2>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#F97316]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#F97316]"
              />
              <input
                type="text"
                placeholder="Destination of Interest"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#F97316]"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#F97316]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#F97316] px-6 py-3 font-semibold text-white transition hover:bg-[#EA580C]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}