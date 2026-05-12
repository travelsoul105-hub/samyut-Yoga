"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Yoga Teacher Training",
    href: "/teacher-training",
    children: [
      { label: "200hrs Ashtanga Yoga TTC", href: "/teacher-training/ashtanga" },
      { label: "200hrs Hatha Yoga TTC", href: "/teacher-training/hatha" },
    ],
  },
  {
    label: "Courses & Workshops",
    href: "#",
    children: [
      { label: "Online Patanjali Yoga Sutra Course", href: "/courses/patanjali-yoga-sutra" },
      { label: "Beyond Asana Workshops", href: "/beyond-asana" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMobileDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#8B5E3C] ${
        isScrolled ? "shadow-xl border-b border-[#C9A84C]/30" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="rounded-full bg-ivory p-0.5 ring-2 ring-ivory/40 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Samyut Yoga"
                width={38}
                height={38}
                className="rounded-full object-cover"
              />
            </div>
            <span className="font-cormorant text-xl font-semibold hidden sm:block text-ivory">
              Samyut Yoga
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-inter font-medium transition-colors text-ivory/90 hover:text-gold">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-[#8B5E3C] border border-[#C9A84C]/20 rounded shadow-xl py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-ivory/80 hover:text-ivory hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-inter font-medium transition-colors text-ivory/90 hover:text-gold"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium transition-colors text-ivory/80 hover:text-gold"
            >
              Student Login
            </Link>
            <Link
              href="/register"
              className="bg-terracotta hover:bg-terracotta/90 text-white px-4 py-2 rounded text-sm font-medium transition-all duration-200"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-ivory"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#8B5E3C] border-t border-[#C9A84C]/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="flex items-center justify-between w-full text-ivory/90 px-3 py-2.5 text-sm font-medium"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-gold/20 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-ivory/70 hover:text-ivory px-3 py-2 text-sm transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-ivory/90 hover:text-ivory px-3 py-2.5 text-sm font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-gold/10 space-y-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-ivory/80 px-3 py-2.5 text-sm"
              >
                Student Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-terracotta text-white px-3 py-2.5 text-sm font-medium rounded"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

