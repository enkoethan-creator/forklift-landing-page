"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a2555] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Forklift4S — Expanxion Industries Sdn Bhd"
              width={160}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-blue-200 hover:text-[#FFD700] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 bg-[#FFD700] text-[#0a2555] text-sm font-bold rounded hover:bg-[#E6C800] transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-blue-200 hover:text-[#FFD700]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#071a3d] px-4 pb-4 pt-3 space-y-1">
          {/* Logo in mobile menu too */}
          <div className="pb-2 mb-2 border-b border-white/10">
            <Image
              src="/logo.png"
              alt="Forklift4S"
              width={120}
              height={27}
              className="h-7 w-auto object-contain"
            />
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-blue-200 hover:text-[#FFD700]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2 bg-[#FFD700] text-[#0a2555] text-sm font-bold rounded text-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
