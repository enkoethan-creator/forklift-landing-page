import type { ReactNode } from "react";

export const ICON_MAP: Record<string, ReactNode> = {
  sales: (
    <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
      <rect x="5" y="33" width="22" height="16" rx="2" fill="#FFD700" />
      <rect x="27" y="23" width="20" height="26" rx="2" fill="#FFD700" opacity="0.6" />
      <rect x="9" y="13" width="6" height="22" rx="1.5" fill="#0f3570" />
      <rect x="7" y="10" width="10" height="5" rx="1.5" fill="#0f3570" />
      <circle cx="12" cy="50" r="4.5" fill="#0f3570" />
      <circle cx="40" cy="50" r="4.5" fill="#0f3570" />
      <rect x="7" y="22" width="14" height="10" rx="1.5" fill="#FFD700" opacity="0.9" />
    </svg>
  ),
  rental: (
    <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
      <circle cx="28" cy="26" r="17" stroke="#FFD700" strokeWidth="3" />
      <path d="M28 16v10l6 4" stroke="#0f3570" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 44l7-5M46 44l-7-5" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  service: (
    <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
      <path d="M42 13l-5 5-10-10 5-5a10 10 0 0110 10z" fill="#FFD700" />
      <path d="M37 18L18 37l-5 10 10-5L42 23l-5-5z" fill="#0f3570" />
      <circle cx="15" cy="41" r="4" fill="#FFD700" />
    </svg>
  ),
  parts: (
    <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
      <rect x="7" y="7" width="18" height="18" rx="2" fill="#FFD700" opacity="0.9" />
      <rect x="31" y="7" width="18" height="18" rx="2" fill="#0f3570" />
      <rect x="7" y="31" width="18" height="18" rx="2" fill="#0f3570" />
      <rect x="31" y="31" width="18" height="18" rx="2" fill="#FFD700" opacity="0.9" />
    </svg>
  ),
  training: (
    <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
      <circle cx="28" cy="16" r="9" fill="#FFD700" />
      <path d="M12 44c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#0f3570" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 30l5 5-2 9M20 36l-2 9 5-5" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  fleet: (
    <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10">
      <rect x="7" y="11" width="42" height="32" rx="3" stroke="#FFD700" strokeWidth="2.5" />
      <path d="M16 30l7-10 7 7 7-12" stroke="#0f3570" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="30" r="2.5" fill="#FFD700" />
      <circle cx="23" cy="20" r="2.5" fill="#FFD700" />
      <circle cx="30" cy="27" r="2.5" fill="#FFD700" />
      <circle cx="37" cy="15" r="2.5" fill="#FFD700" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <rect x="6" y="28" width="36" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="10" y="16" width="7" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="21" y="10" width="7" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="32" y="20" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  warehouse: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M6 20L24 8l18 12v22H6V20z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="18" y="28" width="12" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <rect x="8" y="30" width="32" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 30V14h4v16M28 30V20h4v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 14h32M20 14L24 6l4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M24 6v36M6 24h36M11.5 11.5l21 21M36.5 11.5l-21 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M6 10h36l-4 18H10L6 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 28l-2 10h32l-2-10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="18" cy="42" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="42" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  port: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M24 6v10M12 32l12 6 12-6V20H12v12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 38s4 4 18 4 18-4 18-4M18 20v-4h12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  food: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M14 8v10c0 5.5 4.5 10 10 10s10-4.5 10-10V8M24 28v12M16 40h16M14 14h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  agriculture: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M24 40V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 24c0 0-8-6-8-14 0 0 8 2 8 14zM24 30c0 0 8-6 8-14 0 0-8 2-8 14z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 40h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M8.6 8.6l4.2 4.2M35.2 35.2l4.2 4.2M8.6 39.4l4.2-4.2M35.2 12.8l4.2-4.2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M24 4L8 10v14c0 10 7.2 19.3 16 22 8.8-2.7 16-12 16-22V10L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M16 24l5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M6 30h26V14H6v16zM32 20h6l6 8v8h-6" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="14" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <rect x="6" y="8" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 28l8-12 8 8 8-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M10 8h8l4 10-5 3a24 24 0 0010 10l3-5 10 4v8c0 2-2 4-4 4C16 42 6 32 6 12c0-2 2-4 4-4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
      <path d="M24 4C16.3 4 10 10.3 10 18c0 12 14 26 14 26s14-14 14-26c0-7.7-6.3-14-14-14z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
};

export const ICON_LABELS: Record<string, string> = {
  sales: "Forklift Sales",
  rental: "Rental / Clock",
  service: "Service / Wrench",
  parts: "Spare Parts / Grid",
  training: "Training / Person",
  fleet: "Fleet / Chart",
  factory: "Factory",
  warehouse: "Warehouse",
  construction: "Construction",
  snowflake: "Cold Storage",
  retail: "Retail",
  port: "Port / Shipping",
  food: "Food & Beverage",
  agriculture: "Agriculture",
  gear: "Gear / Settings",
  shield: "Shield / Safety",
  truck: "Truck / Transport",
  chart: "Analytics / Chart",
  phone: "Phone / Contact",
  location: "Location / Map",
};

export function getIcon(name: string): ReactNode {
  return ICON_MAP[name] ?? ICON_MAP["gear"];
}
