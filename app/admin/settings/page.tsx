"use client";

import { useEffect, useState } from "react";

type Site = Record<string, string>;

const FIELDS = [
  { group: "Company", fields: [
    { key: "companyName", label: "Company Name" },
    { key: "legalName", label: "Legal Name (Sdn Bhd)" },
    { key: "tagline", label: "Tagline" },
  ]},
  { group: "Contact", fields: [
    { key: "phone1", label: "Phone 1" },
    { key: "phone2", label: "Phone 2" },
    { key: "whatsapp", label: "WhatsApp Number (digits only, e.g. 60105885881)" },
    { key: "email", label: "Email Address" },
    { key: "address", label: "Full Address" },
    { key: "facebook", label: "Facebook URL" },
  ]},
  { group: "Business Hours", fields: [
    { key: "hoursWeekday", label: "Weekday Hours" },
    { key: "hoursSaturday", label: "Saturday Hours" },
    { key: "hoursSunday", label: "Sunday / Holiday" },
  ]},
  { group: "Stats (Hero & Why Us)", fields: [
    { key: "statYears", label: "Years in Business" },
    { key: "statUnits", label: "Units Deployed" },
    { key: "statClients", label: "Clients Served" },
  ]},
  { group: "Coverage & Certifications", fields: [
    { key: "coverage", label: "Coverage (shown in hero)" },
    { key: "certifications", label: "Certifications (shown in hero)" },
  ]},
  { group: "Registrations", fields: [
    { key: "ssmReg", label: "SSM Reg. No." },
    { key: "cidbReg", label: "CIDB Reg. No." },
  ]},
  { group: "SEO", fields: [
    { key: "seoTitle", label: "Page Title" },
    { key: "seoDescription", label: "Meta Description" },
  ]},
];

export default function SettingsPage() {
  const [data, setData] = useState<Site>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/admin/content/site").then((r) => r.json()).then((d) => { setData(d); setLoading(false); });
  }, []);

  async function save() {
    setSaving(true);
    const res = await fetch("/api/admin/content/site", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    setToast(res.ok ? "Saved successfully!" : "Save failed.");
    setTimeout(() => setToast(""), 3000);
  }

  if (loading) return <div className="p-8 text-gray-500">Loading…</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Site Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Contact info, hours, stats, SEO</p>
        </div>
        <button onClick={save} disabled={saving}
          className="px-5 py-2.5 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded-lg text-sm disabled:opacity-50 transition-colors">
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </div>

      {toast && (
        <div className={`mb-4 px-4 py-2.5 rounded-lg text-sm font-medium ${toast.includes("success") ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"}`}>
          {toast}
        </div>
      )}

      <div className="space-y-8">
        {FIELDS.map((group) => (
          <div key={group.group} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-sm font-bold text-[#0a2555] uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
              {group.group}
            </h2>
            <div className="space-y-4">
              {group.fields.map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">{f.label}</label>
                  <input
                    type="text"
                    value={data[f.key] ?? ""}
                    onChange={(e) => setData({ ...data, [f.key]: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 focus:border-[#B8960C]"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={save} disabled={saving}
          className="px-6 py-3 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded-lg text-sm disabled:opacity-50">
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
