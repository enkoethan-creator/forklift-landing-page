"use client";

import { useEffect, useState } from "react";

type Hero = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaPrimary: string;
  ctaWhatsApp: string;
  ctaSecondary: string;
  checklist: string[];
};

export default function HeroPage() {
  const [data, setData] = useState<Hero | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/admin/content/hero").then((r) => r.json()).then(setData);
  }, []);

  async function save() {
    setSaving(true);
    const res = await fetch("/api/admin/content/hero", {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    });
    setSaving(false);
    setToast(res.ok ? "Saved!" : "Save failed.");
    setTimeout(() => setToast(""), 3000);
  }

  function updateChecklist(i: number, val: string) {
    if (!data) return;
    const list = [...data.checklist];
    list[i] = val;
    setData({ ...data, checklist: list });
  }

  function addChecklistItem() {
    if (!data) return;
    setData({ ...data, checklist: [...data.checklist, "New item"] });
  }

  function removeChecklistItem(i: number) {
    if (!data) return;
    setData({ ...data, checklist: data.checklist.filter((_, idx) => idx !== i) });
  }

  if (!data) return <div className="p-8 text-gray-500">Loading…</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Hero Section</h1>
          <p className="text-sm text-gray-500 mt-1">Headline, description, checklist and CTA buttons</p>
        </div>
        <button onClick={save} disabled={saving}
          className="px-5 py-2.5 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded-lg text-sm disabled:opacity-50">
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </div>

      {toast && (
        <div className={`mb-4 px-4 py-2.5 rounded-lg text-sm font-medium ${toast === "Saved!" ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"}`}>
          {toast}
        </div>
      )}

      <div className="space-y-6">
        {/* Headline */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xs font-bold text-[#0a2555] uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Headline</h2>
          <div className="space-y-3">
            {[
              { key: "badge", label: "Badge Text (small label above headline)" },
              { key: "titleLine1", label: "Title Line 1" },
              { key: "titleLine2", label: "Title Line 2 (shown in yellow)" },
              { key: "description", label: "Description", multi: true },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-semibold text-gray-600 mb-1">{f.label}</label>
                {f.multi ? (
                  <textarea rows={3} value={(data as never)[f.key] ?? ""}
                    onChange={(e) => setData({ ...data, [f.key]: e.target.value } as Hero)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 resize-none" />
                ) : (
                  <input type="text" value={(data as never)[f.key] ?? ""}
                    onChange={(e) => setData({ ...data, [f.key]: e.target.value } as Hero)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xs font-bold text-[#0a2555] uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">CTA Buttons</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { key: "ctaPrimary", label: "Primary Button (yellow)" },
              { key: "ctaWhatsApp", label: "WhatsApp Button (green)" },
              { key: "ctaSecondary", label: "Secondary Button (outline)" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-semibold text-gray-600 mb-1">{f.label}</label>
                <input type="text" value={(data as never)[f.key] ?? ""}
                  onChange={(e) => setData({ ...data, [f.key]: e.target.value } as Hero)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40" />
              </div>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xs font-bold text-[#0a2555] uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
            Feature Checklist (right panel of hero)
          </h2>
          <div className="space-y-2">
            {data.checklist.map((item, i) => (
              <div key={i} className="flex gap-2">
                <input type="text" value={item} onChange={(e) => updateChecklist(i, e.target.value)}
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40" />
                <button onClick={() => removeChecklistItem(i)}
                  className="px-3 py-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm">✕</button>
              </div>
            ))}
            <button onClick={addChecklistItem}
              className="mt-1 px-4 py-2 border-2 border-dashed border-gray-300 hover:border-[#FFD700] text-gray-400 hover:text-[#B8960C] rounded-lg text-sm w-full transition-colors">
              + Add Item
            </button>
          </div>
        </div>
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
