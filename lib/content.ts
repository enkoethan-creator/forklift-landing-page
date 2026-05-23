import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

export function readSection<T>(section: string): T {
  const filePath = path.join(DATA_DIR, `${section}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

export function writeSection(section: string, data: unknown): void {
  const filePath = path.join(DATA_DIR, `${section}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}
