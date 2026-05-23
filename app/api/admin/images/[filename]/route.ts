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

export async function DELETE(_req: Request, { params }: { params: { filename: string } }) {
  if (!checkAuth()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { filename } = params;
  // Prevent path traversal
  if (filename.includes("..") || filename.includes("/")) {
    return NextResponse.json({ error: "Invalid filename" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "public", "uploads", filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  const images = readSection<{ id: string; url: string; name: string }[]>("images");
  const filtered = images.filter((img) => !img.url.endsWith(filename));
  writeSection("images", filtered);

  return NextResponse.json({ ok: true });
}
