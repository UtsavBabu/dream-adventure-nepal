"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthContext";

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
  const [logoSrc, setLogoSrc] = useState<string>("/logo.svg");
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedLogo = window.localStorage.getItem("dream-adventure-nepal-logo");
    if (storedLogo) {
      setLogoSrc(storedLogo);
      return;
    }

    const storedContent = window.localStorage.getItem("dream-adventure-nepal-content");
    if (storedContent) {
      try {
        const parsed = JSON.parse(storedContent);
        if (parsed?.logoBase64) {
          setLogoSrc(parsed.logoBase64);
        }
      } catch {
        // ignore invalid JSON
      }
    }
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4 hover:text-[#F97316] transition">
          <img src={logoSrc} alt="Dream Adventure Nepal logo" className="h-10 w-10 rounded-full object-cover border border-slate-200 bg-white" />
          <span className="text-2xl font-bold text-[#0B1F3A]">Dream Adventure Nepal</span>
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

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isAdmin ? (
            <>
              <Link
                href="/admin"
                className="text-sm font-medium text-slate-700 transition hover:text-[#F97316]"
              >
                Admin
              </Link>
              <button
                onClick={handleSignOut}
                className="text-sm font-medium text-slate-700 transition hover:text-[#F97316]"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-[#F97316] px-6 py-2.5 text-sm font-semibold text-white transition duration-200 hover:scale-105 hover:bg-[#EA580C] shadow-md"
            >
              Admin Login
            </Link>
          )}
        </div>

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
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
              {isAdmin ? (
                <>
                  <Link
                    href="/admin"
                    className="text-sm font-medium text-slate-700 transition hover:text-[#F97316]"
                    onClick={() => setMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-sm font-medium text-slate-700 transition hover:text-[#F97316] text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="rounded-full bg-[#F97316] px-6 py-2.5 text-sm font-semibold text-white text-center transition hover:bg-[#EA580C]"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin Login
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}