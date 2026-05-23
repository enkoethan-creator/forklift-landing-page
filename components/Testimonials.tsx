import { readSection } from "@/lib/content";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  review: string;
  rating: number;
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const reviews = readSection<Testimonial[]>("testimonials");

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#B8960C] text-sm font-semibold uppercase tracking-widest">
            Client Reviews
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0a2555]">
            Trusted by Leading Companies
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            See what our clients from manufacturing, logistics and construction say about
            working with Expanxion Industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col"
            >
              <svg className="w-8 h-8 text-[#FFD700]/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                &ldquo;{r.review}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-4 flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-[#0a2555] text-sm">{r.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{r.role}</div>
                  <div className="text-xs text-gray-500 font-medium">{r.company}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Stars count={r.rating} />
                  <span className="text-[10px] bg-[#eef2f9] text-[#1a4a8a] px-2 py-0.5 rounded-full font-medium">
                    {r.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
