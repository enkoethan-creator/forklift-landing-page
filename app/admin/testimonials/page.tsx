"use client";

import { useEffect, useState } from "react";

type Review = { id: string; name: string; role: string; company: string; industry: string; review: string; rating: number };

function ReviewCard({ r, onChange, onDelete }: { r: Review; onChange: (r: Review) => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 cursor-pointer" onClick={() => setOpen(!open)}>
        <div>
          <div className="font-bold text-gray-800 text-sm">{r.name || "Unnamed"}</div>
          <div className="text-xs text-gray-400">{r.role} · {r.company}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{r.industry}</span>
          <button onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="px-2.5 py-1 text-xs text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg">Delete</button>
          <span className="text-gray-400 text-sm">{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 px-5 pb-5 pt-4 space-y-4">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { key: "name", label: "Full Name" },
              { key: "role", label: "Job Title" },
              { key: "company", label: "Company Name" },
              { key: "industry", label: "Industry (e.g. Manufacturing)" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-semibold text-gray-600 mb-1">{f.label}</label>
                <input type="text" value={(r as never)[f.key] ?? ""}
                  onChange={(e) => onChange({ ...r, [f.key]: e.target.value } as Review)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40" />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Review Text</label>
            <textarea rows={4} value={r.review}
              onChange={(e) => onChange({ ...r, review: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40 resize-none" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} onClick={() => onChange({ ...r, rating: n })}
                  className={`w-8 h-8 rounded-lg text-lg ${n <= r.rating ? "text-[#FFD700]" : "text-gray-300"}`}>
                  ★
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TestimonialsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/admin/content/testimonials").then((r) => r.json()).then(setReviews);
  }, []);

  async function save() {
    setSaving(true);
    const res = await fetch("/api/admin/content/testimonials", {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(reviews),
    });
    setSaving(false);
    setToast(res.ok ? "Saved!" : "Save failed.");
    setTimeout(() => setToast(""), 3000);
  }

  function addReview() {
    setReviews([...reviews, { id: Date.now().toString(), name: "", role: "", company: "", industry: "Manufacturing", review: "", rating: 5 }]);
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Testimonials</h1>
          <p className="text-sm text-gray-500 mt-1">{reviews.length} reviews</p>
        </div>
        <div className="flex gap-2">
          <button onClick={addReview}
            className="px-4 py-2.5 border border-[#0a2555] text-[#0a2555] hover:bg-[#0a2555] hover:text-white font-semibold rounded-lg text-sm transition-colors">
            + Add Review
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
        {reviews.map((r, i) => (
          <ReviewCard key={r.id} r={r}
            onChange={(updated) => setReviews(reviews.map((rv, idx) => idx === i ? updated : rv))}
            onDelete={() => setReviews(reviews.filter((_, idx) => idx !== i))}
          />
        ))}
      </div>

      {reviews.length > 0 && (
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
