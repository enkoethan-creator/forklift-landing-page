const steps = [
  {
    num: "01",
    title: "Make an Enquiry",
    desc: "Contact us via phone, WhatsApp or our online form. Tell us your requirements — fleet size, capacity, fuel type, and usage environment.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="6" y="8" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 18h20M14 24h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    dark: true,
  },
  {
    num: "02",
    title: "Free Consultation",
    desc: "Our specialists assess your site conditions and operational needs to recommend the right machine, brand, and service plan for you.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M10 40c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    dark: false,
  },
  {
    num: "03",
    title: "Preparation & Delivery",
    desc: "We inspect, test and prepare your unit to full operational standard before scheduling delivery to your site at a time that suits you.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M6 36h28l8-14H14L6 36z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="14" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="34" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
    dark: true,
  },
  {
    num: "04",
    title: "Ongoing Support",
    desc: "Scheduled maintenance, breakdown support, and spare parts keep your fleet running. We're with you long after delivery.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    ),
    dark: false,
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#B8960C] text-sm font-semibold uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0a2555]">
            Simple 4-Step Process
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            From first contact to full fleet support — we keep things straightforward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#FFD700] via-[#0f3570] to-[#FFD700] opacity-20" />

          {steps.map((s) => (
            <div key={s.num} className="relative flex flex-col items-center text-center">
              <div
                className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg ${
                  s.dark ? "bg-[#0a2555] text-[#FFD700]" : "bg-[#FFD700] text-[#0a2555]"
                }`}
              >
                {s.icon}
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white text-[10px] font-bold text-[#0a2555] flex items-center justify-center shadow border border-gray-100">
                  {s.num}
                </span>
              </div>
              <h3 className="font-bold text-[#0a2555] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded-lg transition-colors text-sm"
          >
            Start Your Enquiry Today
          </a>
        </div>
      </div>
    </section>
  );
}
