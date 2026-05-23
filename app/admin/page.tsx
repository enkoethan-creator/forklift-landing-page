"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SECTIONS = [
  { label: "Site Settings", href: "/admin/settings", desc: "Contact info, phone, email, address, SEO", icon: "⚙" },
  { label: "Hero Section", href: "/admin/hero", desc: "Headline, description, checklist, CTAs", icon: "★" },
  { label: "Services", href: "/admin/services", desc: "Add, edit or remove service cards", icon: "◈" },
  { label: "Testimonials", href: "/admin/testimonials", desc: "Manage client reviews", icon: "❝" },
  { label: "Industries", href: "/admin/industries", desc: "Industries you serve", icon: "🏭" },
  { label: "Brands", href: "/admin/brands", desc: "Supported forklift brands", icon: "◉" },
  { label: "Images", href: "/admin/images", desc: "Upload and manage photos", icon: "⬚" },
  { label: "Icons", href: "/admin/icons", desc: "Browse the icon library", icon: "◇" },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ services: 0, testimonials: 0, images: 0 });

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/content/services").then((r) => r.json()),
      fetch("/api/admin/content/testimonials").then((r) => r.json()),
      fetch("/api/admin/content/images").then((r) => r.json()),
    ]).then(([s, t, i]) => {
      setCounts({ services: s.length, testimonials: t.length, images: i.length });
    });
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your website content from here.</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Services", value: counts.services, href: "/admin/services" },
          { label: "Testimonials", value: counts.testimonials, href: "/admin/testimonials" },
          { label: "Images", value: counts.images, href: "/admin/images" },
        ].map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:border-[#FFD700] hover:shadow-md transition-all"
          >
            <div className="text-3xl font-extrabold text-[#0a2555]">{s.value}</div>
            <div className="text-sm text-gray-500 mt-1">{s.label}</div>
          </Link>
        ))}
      </div>

      {/* Section cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:border-[#FFD700] hover:shadow-md transition-all group"
          >
            <div className="text-2xl mb-3">{s.icon}</div>
            <div className="font-bold text-gray-800 text-sm group-hover:text-[#0a2555]">{s.label}</div>
            <div className="text-xs text-gray-400 mt-1 leading-relaxed">{s.desc}</div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-[#0a2555] rounded-xl p-5 text-sm text-blue-300">
        <span className="text-[#FFD700] font-semibold">Tip:</span> Changes save immediately. Open{" "}
        <Link href="/" target="_blank" className="text-white underline">
          your website
        </Link>{" "}
        in another tab to preview edits live.
      </div>
    </div>
  );
}
