"use client";

import { useScroll, useSpring } from "motion/react";
import { SPRING } from "@/constants/motion";

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, SPRING.progress);
}
