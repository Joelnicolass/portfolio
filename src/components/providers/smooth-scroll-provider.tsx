"use client";

import type { ReactNode } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  useSmoothScroll();
  return children;
};
