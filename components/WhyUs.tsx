const reasons = [
  {
    icon: "🏭",
    title: "Industry-Specific Expertise",
    desc: "Deep knowledge of manufacturing, logistics and construction environments — we recommend solutions that fit your actual workflow, not just a catalogue.",
  },
  {
    icon: "⚡",
    title: "24-Hour Breakdown Support",
    desc: "When your forklift goes down, so does your operation. Our rapid response team arrives within 24 hours and carries common parts on every van.",
  },
  {
    icon: "🔧",
    title: "DOSH-Certified Technicians",
    desc: "Every technician holds DOSH-recognised certifications and undergoes regular factory training with brand principals to stay current.",
  },
  {
    icon: "📋",
    title: "Transparent, Itemised Pricing",
    desc: "No hidden fees. Every quote and service report is itemised so you can plan maintenance budgets with full confidence.",
  },
  {
    icon: "🇲🇾",
    title: "Nationwide Service Coverage",
    desc: "We serve clients across Peninsular Malaysia — from the Klang Valley to Johor, Penang and East Coast industrial zones.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    desc: "Dedicated account managers, proactive servicing reminders and fleet reviews keep your operation optimised year after year.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#B8960C] text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0a2555]">
            The Forklift Partner You Can Rely On
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            With over 15 years in the industry and hundreds of units deployed across
            Malaysia, Expanxion Industries has earned the trust of manufacturers,
            3PLs and contractors who demand uptime, safety and value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#FFD700]/50 hover:shadow-sm transition-all"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-white rounded-lg shadow-sm flex items-center justify-center text-xl border border-gray-100">
                {r.icon}
              </div>
              <div>
                <div className="font-bold text-[#0a2555] mb-1">{r.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 bg-[#0a2555] rounded-2xl px-8 py-8 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { value: "15+", label: "Years in Business" },
            { value: "500+", label: "Forklift Units Deployed" },
            { value: "200+", label: "Happy Clients" },
          ].map((s) => (
            <div key={s.label} className="border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 pb-4 sm:pb-0">
              <div className="text-4xl font-extrabold text-[#FFD700]">{s.value}</div>
              <div className="text-sm text-blue-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
