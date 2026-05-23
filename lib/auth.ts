import { createHmac } from "crypto";

const SECRET = (process.env.ADMIN_SECRET || "expanxion-cms-2026").trim();
const PASSWORD = (process.env.ADMIN_PASSWORD || "admin123").trim();

export function verifyPassword(password: string): boolean {
  return password === PASSWORD;
}

export function createToken(): string {
  return createHmac("sha256", SECRET).update(PASSWORD).digest("hex");
}

export function verifyToken(token: string): boolean {
  return token === createToken();
}
