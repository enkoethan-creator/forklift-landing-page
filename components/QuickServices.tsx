const tiles = [
  {
    title: "Forklift Rental",
    desc: "Flexible short & long-term rental with operator option",
    href: "#services",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="22" r="14" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 15v7l4 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 36l5-3M38 36l-5-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Forklift Sales",
    desc: "New & used forklifts — electric, diesel and LPG",
    href: "#services",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="28" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="22" y="20" width="18" height="21" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="7" y="13" width="5" height="17" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="5" y="11" width="9" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="42" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="34" cy="42" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Service & Repair",
    desc: "Certified technicians, 24hr breakdown response",
    href: "#services",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M36 11l-4 4-8-8 4-4a8 8 0 018 8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M32 15L16 31l-4 8 8-4 16-16-4-4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Spare Parts",
    desc: "Genuine & OEM parts, fast nationwide delivery",
    href: "#services",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="27" y="6" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="6" y="27" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="27" y="27" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function QuickServices() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-6 mb-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {tiles.map((t, i) => (
          <a
            key={t.title}
            href={t.href}
            className={`group flex flex-col items-center text-center p-5 sm:p-6 rounded-xl shadow-lg border transition-all hover:-translate-y-1 hover:shadow-xl ${
              i === 0
                ? "bg-[#FFD700] text-[#0a2555] border-[#E6C800]"
                : "bg-white text-[#0a2555] border-gray-100 hover:border-[#FFD700]/50"
            }`}
          >
            <div
              className={`mb-3 transition-colors ${
                i === 0
                  ? "text-[#0a2555]"
                  : "text-[#0a2555] group-hover:text-[#B8960C]"
              }`}
            >
              {t.icon}
            </div>
            <div className="font-bold text-sm sm:text-base leading-tight mb-1">
              {t.title}
            </div>
            <div
              className={`text-xs leading-snug hidden sm:block ${
                i === 0 ? "text-[#0a2555]/70" : "text-gray-500"
              }`}
            >
              {t.desc}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
