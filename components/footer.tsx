import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3A] text-slate-200 border-t border-slate-700">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">🏔️ Dream Adventure Nepal</h3>
            <p className="text-sm leading-6 text-slate-400">
              Authentic trekking experiences and cultural journeys through Nepal's sacred peaks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition hover:text-[#F97316]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Admin", href: "/admin" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition hover:text-[#F97316]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                📧
                <a href="mailto:info@dreamadventure.com" className="hover:text-[#F97316] transition">
                  info@dreamadventure.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                📱
                <a href="tel:+977123456789" className="hover:text-[#F97316] transition">
                  +977 1 2345 6789
                </a>
              </li>
              <li className="flex items-center gap-2">
                📍
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} Dream Adventure Nepal. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F97316] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#F97316] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#F97316] transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
