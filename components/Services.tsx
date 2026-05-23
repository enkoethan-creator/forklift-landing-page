import { readSection } from "@/lib/content";
import { getIcon } from "@/lib/icons";

type Service = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  icon: string;
  cta: string;
};

export default function Services() {
  const services = readSection<Service[]>("services");

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#B8960C] text-sm font-semibold uppercase tracking-widest">
            Our Solutions
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0a2555]">
            Complete Forklift Solutions
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Everything your operation needs — from the right machine to full after-sales
            support — under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col"
            >
              <div className="h-1 rounded-t-xl bg-gradient-to-r from-[#FFD700] to-[#0f3570]" />
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">{getIcon(s.icon)}</div>
                <h3 className="text-lg font-bold text-[#0a2555] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8960C] hover:text-[#0a2555] transition-colors group-hover:gap-2.5"
                >
                  {s.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
