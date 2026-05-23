import { readSection } from "@/lib/content";
import { getIcon } from "@/lib/icons";

type Industry = {
  id: string;
  label: string;
  icon: string;
};

export default function Industries() {
  const industries = readSection<Industry[]>("industries");

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#F58220] text-sm font-semibold uppercase tracking-widest">
            Industries We Serve
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0a2555]">
            Trusted Across All Sectors
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            From factories to farms — our forklift solutions are tailored to the specific
            demands of each industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F58220]/40 transition-all p-5 flex flex-col items-center text-center gap-3 group"
            >
              <div className="text-[#0f3570] group-hover:text-[#F58220] transition-colors">
                {getIcon(ind.icon)}
              </div>
              <span className="text-sm font-semibold text-[#0a2555]">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
