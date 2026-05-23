import { readSection } from "@/lib/content";

type HeroData = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaPrimary: string;
  ctaWhatsApp: string;
  ctaSecondary: string;
  checklist: string[];
};

type SiteData = {
  whatsapp: string;
  statYears: string;
  statUnits: string;
  statClients: string;
  coverage: string;
  certifications: string;
};

export default function Hero() {
  const h = readSection<HeroData>("hero");
  const s = readSection<SiteData>("site");

  return (
    <section
      id="home"
      className="relative bg-[#0a2555] overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Yellow left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FFD700]" />

      {/* Glow blob */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#FFD700]/5 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: headline + CTAs ── */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
            <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
            {h.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-5">
            {h.titleLine1}<br />
            <span className="text-[#FFD700]">{h.titleLine2}</span>
          </h1>

          <p className="text-base sm:text-lg text-blue-200 leading-relaxed mb-8 max-w-lg">
            {h.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded transition-colors text-sm"
            >
              {h.ctaPrimary}
            </a>
            <a
              href={`https://wa.me/${s.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {h.ctaWhatsApp}
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-white/25 hover:border-[#FFD700] text-white hover:text-[#FFD700] font-semibold rounded transition-colors text-sm"
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        {/* ── Right: professional stats / trust card ── */}
        <div className="hidden lg:block">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">

            {/* Top stat row */}
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
              {[
                { value: s.statYears, label: "Years in Business" },
                { value: s.statUnits, label: "Units Deployed" },
                { value: s.statClients, label: "Clients Served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-[#FFD700]">{stat.value}</div>
                  <div className="text-[11px] text-blue-300 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Service checklist */}
            <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
              {h.checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-blue-100">{item}</span>
                </div>
              ))}
            </div>

            {/* Coverage + certifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-[#FFD700] font-bold text-sm mb-1">Coverage</div>
                <div className="text-xs text-blue-300 leading-relaxed">{s.coverage}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-[#FFD700] font-bold text-sm mb-1">Certified</div>
                <div className="text-xs text-blue-300 leading-relaxed">{s.certifications}</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Wave */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48L1440 48L1440 16C1200 48 960 0 720 16C480 32 240 0 0 16L0 48Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
