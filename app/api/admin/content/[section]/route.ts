import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { readSection, writeSection } from "@/lib/content";

const ALLOWED = ["site", "hero", "services", "testimonials", "industries", "brands", "images"];

function checkAuth(): boolean {
  const token = cookies().get("admin_token")?.value;
  return !!token && verifyToken(token);
}

export async function GET(_req: Request, { params }: { params: { section: string } }) {
  const { section } = params;
  if (!ALLOWED.includes(section)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  try {
    const data = readSection(section);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Read failed" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { section: string } }) {
  if (!checkAuth()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { section } = params;
  if (!ALLOWED.includes(section)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  try {
    const data = await request.json();
    writeSection(section, data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Write failed" }, { status: 500 });
  }
}
