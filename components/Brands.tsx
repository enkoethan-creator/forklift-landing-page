import { readSection } from "@/lib/content";

export default function Brands() {
  const brands = readSection<string[]>("brands");

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#F58220] text-sm font-semibold uppercase tracking-widest">
            Brands We Support
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-[#0a2555]">
            Authorised Parts & Service for All Major Brands
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {brands.map((brand) => (
            <div
              key={brand}
              className="border border-gray-200 rounded-xl py-4 px-2 flex items-center justify-center hover:border-[#F58220]/50 hover:shadow-sm transition-all"
            >
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide text-center">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          We source genuine and OEM-equivalent parts for all the brands above and more.
          Contact us for brand-specific enquiries.
        </p>
      </div>
    </section>
  );
}
