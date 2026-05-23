import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { readSection, writeSection } from "@/lib/content";
import fs from "fs";
import path from "path";

function checkAuth(): boolean {
  const token = cookies().get("admin_token")?.value;
  return !!token && verifyToken(token);
}

export async function POST(request: Request) {
  if (!checkAuth()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large (max 5MB)" }, { status: 400 });
  }

  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const bytes = await file.arrayBuffer();
  fs.writeFileSync(path.join(uploadDir, filename), Buffer.from(bytes));

  const url = `/uploads/${filename}`;
  const images = readSection<{ id: string; url: string; name: string; uploadedAt: string }[]>("images");
  images.unshift({ id: Date.now().toString(), url, name: file.name, uploadedAt: new Date().toISOString() });
  writeSection("images", images);

  return NextResponse.json({ url, filename });
}
