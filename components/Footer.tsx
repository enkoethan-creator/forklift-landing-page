import { readSection } from "@/lib/content";

type SiteData = {
  companyName: string;
  legalName: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  email: string;
  address: string;
  hoursWeekday: string;
  hoursSaturday: string;
};

type Service = {
  id: string;
  title: string;
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const s = readSection<SiteData>("site");
  const services = readSection<Service[]>("services");

  return (
    <footer className="bg-[#071a3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#FFD700] rounded flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-5 h-5">
                  <rect x="2" y="22" width="18" height="12" rx="1" fill="#0a2555" />
                  <rect x="20" y="16" width="14" height="18" rx="1" fill="#0a2555" opacity="0.7" />
                  <rect x="6" y="10" width="4" height="14" rx="1" fill="white" />
                  <rect x="4" y="8" width="8" height="3" rx="1" fill="white" />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-white uppercase tracking-wide text-sm">
                  {s.companyName.split(" ")[0]}{" "}
                  <span className="text-[#FFD700]">{s.companyName.split(" ").slice(1).join(" ")}</span>
                </div>
                <div className="text-[10px] text-blue-400 uppercase tracking-widest">Sdn Bhd</div>
              </div>
            </div>
            <p className="text-sm text-blue-300 leading-relaxed mb-4">
              Malaysia&rsquo;s trusted forklift specialist — sales, rental, service and spare
              parts for manufacturing, logistics and construction industries.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#FFD700] mb-4">
              Quick Links
            </div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-blue-300 hover:text-[#FFD700] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#FFD700] mb-4">
              Our Services
            </div>
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc.id} className="text-sm text-blue-300">{svc.title}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#FFD700] mb-4">
              Contact Info
            </div>
            <div className="space-y-3 text-sm text-blue-300">
              <div>
                <div className="text-white font-medium text-xs mb-0.5">Address</div>
                {s.address}
              </div>
              <div>
                <div className="text-white font-medium text-xs mb-0.5">Phone</div>
                {s.phone1}
              </div>
              <div>
                <div className="text-white font-medium text-xs mb-0.5">WhatsApp</div>
                <a
                  href={`https://wa.me/${s.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  {s.phone2}
                </a>
              </div>
              <div>
                <div className="text-white font-medium text-xs mb-0.5">Email</div>
                <a
                  href={`mailto:${s.email}`}
                  className="hover:text-[#FFD700] transition-colors"
                >
                  {s.email}
                </a>
              </div>
              <div>
                <div className="text-white font-medium text-xs mb-0.5">Business Hours</div>
                {s.hoursWeekday}<br />
                {s.hoursSaturday}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-blue-400">
            &copy; {new Date().getFullYear()} {s.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-blue-500">Forklift Specialist — Klang, Selangor</p>
        </div>
      </div>
    </footer>
  );
}
