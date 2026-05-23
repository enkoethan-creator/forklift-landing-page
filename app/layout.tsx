import type { Metadata } from "next";
import "./globals.css";
import { readSection } from "@/lib/content";

type SiteData = { seoTitle: string; seoDescription: string };

export function generateMetadata(): Metadata {
  const site = readSection<SiteData>("site");
  return { title: site.seoTitle, description: site.seoDescription };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800">{children}</body>
    </html>
  );
}
