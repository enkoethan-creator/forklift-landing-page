"use client";

import { useEffect, useState } from "react";
import { ICON_LABELS } from "@/lib/icons";

type Industry = { id: string; label: string; icon: string };

export default function IndustriesPage() {
  const [items, setItems] = useState<Industry[]>([]);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/admin/content/industries").then((r) => r.json()).then(setItems);
  }, []);

  async function save() {
    setSaving(true);
    const res = await fetch("/api/admin/content/industries", {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(items),
    });
    setSaving(false);
    setToast(res.ok ? "Saved!" : "Save failed.");
    setTimeout(() => setToast(""), 3000);
  }

  function update(i: number, patch: Partial<Industry>) {
    setItems(items.map((item, idx) => idx === i ? { ...item, ...patch } : item));
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Industries</h1>
          <p className="text-sm text-gray-500 mt-1">{items.length} industries</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setItems([...items, { id: Date.now().toString(), label: "New Industry", icon: "factory" }])}
            className="px-4 py-2.5 border border-[#0a2555] text-[#0a2555] hover:bg-[#0a2555] hover:text-white font-semibold rounded-lg text-sm transition-colors">
            + Add
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

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-100">
        {items.map((item, i) => (
          <div key={item.id} className="flex items-center gap-3 px-5 py-3">
            <span className="text-gray-300 text-sm w-5">{i + 1}.</span>
            <input type="text" value={item.label}
              onChange={(e) => update(i, { label: e.target.value })}
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40" />
            <select value={item.icon} onChange={(e) => update(i, { icon: e.target.value })}
              className="border border-gray-200 rounded-lg px-2 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 bg-white">
              {Object.entries(ICON_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{key} — {label}</option>
              ))}
            </select>
            <button onClick={() => setItems(items.filter((_, idx) => idx !== i))}
              className="text-red-400 hover:text-red-600 text-sm px-2">✕</button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={save} disabled={saving}
          className="px-6 py-3 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded-lg text-sm disabled:opacity-50">
          {saving ? "Saving…" : "Save All"}
        </button>
      </div>
    </div>
  );
}
