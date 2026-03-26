"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const { error } = await supabase.from("contacts").insert([
      {
        name: form.name,
        email: form.email,
        destination: form.destination,
        message: form.message,
      },
    ]);

    if (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    setSuccess("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      destination: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-[#F97316]">
            Contact Dream Adventure Nepal
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Plan Your Journey With Us
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Tell us where you want to go, what kind of experience you are
            looking for, and we’ll help you plan the right Nepal adventure.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl bg-[#0B1F3A] p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-4 leading-7 text-slate-300">
              We help travelers plan trekking, cultural, and custom travel
              experiences across Nepal with local support and careful planning.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Location
                </p>
                <p className="mt-2 text-base text-white">Kathmandu, Nepal</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Email
                </p>
                <p className="mt-2 text-base text-white">
                  info@dreamadventurenepal.com
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Phone
                </p>
                <p className="mt-2 text-base text-white">+977 9800000000</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#0B1F3A]">
                Send an Inquiry
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill in your details and we’ll get back to you as soon as
                possible.
              </p>
            </div>

            <div className="grid gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="destination"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Destination of Interest
                </label>
                <input
                  id="destination"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Everest, Annapurna, Kathmandu Tour..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel dates, group size, and what kind of adventure you want."
                  rows={6}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl bg-[#F97316] px-6 py-3 font-semibold text-white transition hover:bg-[#EA580C] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-sm font-medium text-green-700">{success}</p>
              )}

              {error && (
                <p className="text-sm font-medium text-red-600">{error}</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}