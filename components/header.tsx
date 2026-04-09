"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-[#0B1F3A] hover:text-[#F97316] transition">
          🏔️ Dream Adventure Nepal
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition duration-200 hover:text-[#F97316] hover:scale-110"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:block rounded-full bg-[#F97316] px-6 py-2.5 text-sm font-semibold text-white transition duration-200 hover:scale-105 hover:bg-[#EA580C] shadow-md"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0B1F3A] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[#F97316]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-[#F97316] px-6 py-2.5 text-sm font-semibold text-white text-center transition hover:bg-[#EA580C]"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}