"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Dashboard", href: "/admin", icon: "⊞" },
  { label: "Site Settings", href: "/admin/settings", icon: "⚙" },
  { label: "Hero Section", href: "/admin/hero", icon: "★" },
  { label: "Services", href: "/admin/services", icon: "◈" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "❝" },
  { label: "Industries", href: "/admin/industries", icon: "🏭" },
  { label: "Brands", href: "/admin/brands", icon: "◉" },
  { label: "Images", href: "/admin/images", icon: "⬚" },
  { label: "Icons", href: "/admin/icons", icon: "◇" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") return <>{children}</>;

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 bg-[#0f1c36] flex flex-col">
        <div className="px-4 py-5 border-b border-white/10">
          <Image src="/logo.png" alt="Logo" width={120} height={27} className="h-7 w-auto" />
          <div className="text-[10px] text-blue-400 mt-1 uppercase tracking-widest">CMS Admin</div>
        </div>

        <nav className="flex-1 py-4 px-2 space-y-0.5">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                  active
                    ? "bg-[#FFD700] text-[#0a2555] font-bold"
                    : "text-blue-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 text-xs text-blue-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <span>↗</span> View Website
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-blue-400 hover:text-red-400 rounded-lg hover:bg-white/10 transition-colors"
          >
            <span>⎋</span> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
