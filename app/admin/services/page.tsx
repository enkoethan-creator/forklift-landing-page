"use client";

import { useEffect, useState } from "react";
import { ICON_LABELS } from "@/lib/icons";

type Service = { id: string; title: string; desc: string; tags: string[]; icon: string; cta: string };

function ServiceCard({ s, onChange, onDelete }: {
  s: Service; onChange: (s: Service) => void; onDelete: () => void;
}) {
  const [open, setOpen] = useState(false);

  function updateTag(i: number, val: string) {
    const tags = [...s.tags]; tags[i] = val;
    onChange({ ...s, tags });
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-3">
          <span className="text-lg">{ICON_LABELS[s.icon]?.split(" ")[0] ?? "◈"}</span>
          <div>
            <div className="font-bold text-gray-800 text-sm">{s.title || "Untitled Service"}</div>
            <div className="text-xs text-gray-400">Icon: {s.icon}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="px-2.5 py-1 text-xs text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg">Delete</button>
          <span className="text-gray-400 text-sm">{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 px-5 pb-5 pt-4 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Title</label>
              <input type="text" value={s.title} onChange={(e) => onChange({ ...s, title: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">CTA Button Text</label>
              <input type="text" value={s.cta} onChange={(e) => onChange({ ...s, cta: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Description</label>
            <textarea rows={3} value={s.desc} onChange={(e) => onChange({ ...s, desc: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 resize-none" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">Icon</label>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {Object.entries(ICON_LABELS).map(([key, label]) => (
                <button key={key} onClick={() => onChange({ ...s, icon: key })}
                  className={`p-2 rounded-lg border text-xs text-center transition-all ${s.icon === key ? "bg-[#FFD700] border-[#E6C800] text-[#0a2555] font-bold" : "border-gray-200 text-gray-500 hover:border-[#FFD700]/50"}`}>
                  {label.split(" ")[0]}<br />
                  <span className="text-[10px] opacity-70">{key}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-1">
                  <input type="text" value={tag} onChange={(e) => updateTag(i, e.target.value)}
                    className="border border-gray-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#FFD700]/40 w-28" />
                  <button onClick={() => onChange({ ...s, tags: s.tags.filter((_, idx) => idx !== i) })}
                    className="text-red-400 hover:text-red-600 text-xs">✕</button>
                </div>
              ))}
              <button onClick={() => onChange({ ...s, tags: [...s.tags, "New Tag"] })}
                className="px-2.5 py-1 border border-dashed border-gray-300 hover:border-[#FFD700] text-gray-400 hover:text-[#B8960C] rounded-lg text-xs">
                + Tag
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/admin/content/services").then((r) => r.json()).then(setServices);
  }, []);

  async function save() {
    setSaving(true);
    const res = await fetch("/api/admin/content/services", {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(services),
    });
    setSaving(false);
    setToast(res.ok ? "Saved!" : "Save failed.");
    setTimeout(() => setToast(""), 3000);
  }

  function addService() {
    setServices([...services, { id: Date.now().toString(), title: "New Service", desc: "Description here.", tags: ["Tag"], icon: "gear", cta: "Learn More" }]);
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Services</h1>
          <p className="text-sm text-gray-500 mt-1">{services.length} service cards</p>
        </div>
        <div className="flex gap-2">
          <button onClick={addService}
            className="px-4 py-2.5 border border-[#0a2555] text-[#0a2555] hover:bg-[#0a2555] hover:text-white font-semibold rounded-lg text-sm transition-colors">
            + Add Service
          </button>
          <button onClick={save} disabled={saving}
            className="px-5 py-2.5 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded-lg text-sm disabled:opacity-50">
            {saving ? "Saving…" : "Save All"}
          </button>
        </div>
      </div>

      {toast && (
        <div className={`mb-4 px-4 py-2.5 rounded-lg text-sm font-medium ${toast === "Saved!" ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"}`}>
          {toast}
        </div>
      )}

      <div className="space-y-3">
        {services.map((s, i) => (
          <ServiceCard key={s.id} s={s}
            onChange={(updated) => setServices(services.map((sv, idx) => idx === i ? updated : sv))}
            onDelete={() => setServices(services.filter((_, idx) => idx !== i))}
          />
        ))}
      </div>

      {services.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button onClick={save} disabled={saving}
            className="px-6 py-3 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded-lg text-sm disabled:opacity-50">
            {saving ? "Saving…" : "Save All"}
          </button>
        </div>
      )}
    </div>
  );
}
