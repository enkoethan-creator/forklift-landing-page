"use client";

import { useEffect, useState } from "react";

export default function BrandsPage() {
  const [brands, setBrands] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/admin/content/brands").then((r) => r.json()).then(setBrands);
  }, []);

  async function save() {
    setSaving(true);
    const res = await fetch("/api/admin/content/brands", {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(brands.filter(Boolean)),
    });
    setSaving(false);
    setToast(res.ok ? "Saved!" : "Save failed.");
    setTimeout(() => setToast(""), 3000);
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Brands</h1>
          <p className="text-sm text-gray-500 mt-1">Forklift brands you support</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setBrands([...brands, ""])}
            className="px-4 py-2.5 border border-[#0a2555] text-[#0a2555] hover:bg-[#0a2555] hover:text-white font-semibold rounded-lg text-sm transition-colors">
            + Add Brand
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
        {brands.map((brand, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-3">
            <span className="text-gray-300 text-sm w-5">{i + 1}.</span>
            <input type="text" value={brand} placeholder="Brand name"
              onChange={(e) => setBrands(brands.map((b, idx) => idx === i ? e.target.value : b))}
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40" />
            <button onClick={() => setBrands(brands.filter((_, idx) => idx !== i))}
              className="text-red-400 hover:text-red-600 text-sm px-2">✕</button>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-blue-50 rounded-xl p-4 text-xs text-blue-600 border border-blue-100">
        Brands are displayed in the &quot;Our Brands&quot; section of the website. Add the exact brand name (e.g. Toyota, Crown, Linde).
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
