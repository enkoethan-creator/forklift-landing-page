"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ImgMeta = { id: string; url: string; name: string; uploadedAt: string };

export default function ImagesPage() {
  const [images, setImages] = useState<ImgMeta[]>([]);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState("");
  const [copied, setCopied] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function load() {
    fetch("/api/admin/content/images").then((r) => r.json()).then(setImages);
  }

  useEffect(() => { load(); }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);

    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      await fetch("/api/admin/upload", { method: "POST", body: fd });
    }

    setUploading(false);
    setToast(`${files.length} image(s) uploaded!`);
    setTimeout(() => setToast(""), 3000);
    if (fileRef.current) fileRef.current.value = "";
    load();
  }

  async function deleteImage(img: ImgMeta) {
    const filename = img.url.split("/").pop()!;
    await fetch(`/api/admin/images/${filename}`, { method: "DELETE" });
    setToast("Image deleted.");
    setTimeout(() => setToast(""), 2000);
    load();
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(""), 2000);
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Images</h1>
          <p className="text-sm text-gray-500 mt-1">{images.length} images uploaded</p>
        </div>
        <button onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="px-5 py-2.5 bg-[#FFD700] hover:bg-[#E6C800] text-[#0a2555] font-bold rounded-lg text-sm disabled:opacity-50">
          {uploading ? "Uploading…" : "Upload Images"}
        </button>
        <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={handleUpload} />
      </div>

      {toast && (
        <div className="mb-4 px-4 py-2.5 rounded-lg text-sm font-medium bg-green-100 text-green-700 border border-green-200">
          {toast}
        </div>
      )}

      {/* Drop zone */}
      <div
        className="mb-6 border-2 border-dashed border-gray-300 hover:border-[#FFD700] rounded-xl p-8 text-center cursor-pointer transition-colors"
        onClick={() => fileRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={async (e) => {
          e.preventDefault();
          const files = e.dataTransfer.files;
          if (!files.length) return;
          setUploading(true);
          for (const file of Array.from(files)) {
            const fd = new FormData();
            fd.append("file", file);
            await fetch("/api/admin/upload", { method: "POST", body: fd });
          }
          setUploading(false);
          load();
        }}
      >
        <div className="text-4xl mb-2">⬚</div>
        <div className="text-sm text-gray-500">
          {uploading ? "Uploading…" : "Click or drag & drop images here"}
        </div>
        <div className="text-xs text-gray-400 mt-1">JPG, PNG, GIF, WebP, SVG — max 5MB each</div>
      </div>

      {/* Image grid */}
      {images.length === 0 ? (
        <div className="text-center py-16 text-gray-400 text-sm">No images yet. Upload some above.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((img) => (
            <div key={img.id} className="group relative bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="relative aspect-square bg-gray-100">
                <Image src={img.url} alt={img.name} fill className="object-cover" />
              </div>
              <div className="p-2.5">
                <div className="text-xs text-gray-600 truncate font-medium">{img.name}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">
                  {new Date(img.uploadedAt).toLocaleDateString("en-MY")}
                </div>
                <div className="flex gap-1.5 mt-2">
                  <button onClick={() => copyUrl(img.url)}
                    className="flex-1 text-[10px] px-2 py-1 bg-gray-100 hover:bg-[#FFD700]/20 text-gray-600 hover:text-[#B8960C] rounded-lg font-medium transition-colors">
                    {copied === img.url ? "Copied!" : "Copy URL"}
                  </button>
                  <button onClick={() => deleteImage(img)}
                    className="text-[10px] px-2 py-1 bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 rounded-lg transition-colors">
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
