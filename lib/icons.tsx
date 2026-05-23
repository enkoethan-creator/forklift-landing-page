import type { ReactNode } from "react";
import {
  Forklift,
  CalendarClock,
  Wrench,
  Package,
  GraduationCap,
  LayoutDashboard,
  Factory,
  Warehouse,
  HardHat,
  Snowflake,
  ShoppingCart,
  Ship,
  UtensilsCrossed,
  Sprout,
  Settings2,
  ShieldCheck,
  Truck,
  BarChart2,
  Phone,
  MapPin,
} from "lucide-react";

const iconClass = "w-10 h-10";
const color1 = "#0f3570";
const color2 = "#FFD700";

function IconBox({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <div
      style={{
        background: accent ? color2 : color1,
        borderRadius: 14,
        padding: 10,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

export const ICON_MAP: Record<string, ReactNode> = {
  sales: (
    <IconBox>
      <Forklift className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  rental: (
    <IconBox accent>
      <CalendarClock className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  service: (
    <IconBox>
      <Wrench className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  parts: (
    <IconBox accent>
      <Package className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  training: (
    <IconBox>
      <GraduationCap className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  fleet: (
    <IconBox accent>
      <LayoutDashboard className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  factory: (
    <IconBox>
      <Factory className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  warehouse: (
    <IconBox accent>
      <Warehouse className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  construction: (
    <IconBox>
      <HardHat className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  snowflake: (
    <IconBox accent>
      <Snowflake className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  retail: (
    <IconBox>
      <ShoppingCart className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  port: (
    <IconBox accent>
      <Ship className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  food: (
    <IconBox>
      <UtensilsCrossed className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  agriculture: (
    <IconBox accent>
      <Sprout className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  gear: (
    <IconBox>
      <Settings2 className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  shield: (
    <IconBox accent>
      <ShieldCheck className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  truck: (
    <IconBox>
      <Truck className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  chart: (
    <IconBox accent>
      <BarChart2 className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
  ),
  phone: (
    <IconBox>
      <Phone className={iconClass} color={color2} strokeWidth={1.5} />
    </IconBox>
  ),
  location: (
    <IconBox accent>
      <MapPin className={iconClass} color={color1} strokeWidth={1.5} />
    </IconBox>
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
