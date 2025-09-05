"use client"
import { usePathname } from "next/navigation";

export function useTitleFromPath() {
  const pathname = usePathname();
  return pathname === "/" ? "aktiviteter" : pathname.slice(1);
}