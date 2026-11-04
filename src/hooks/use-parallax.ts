"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { PARALLAX } from "@/constants/motion";

export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", PARALLAX.heroY]);
  const opacity = useTransform(scrollYProgress, [0, PARALLAX.heroFadeEnd], [1, 0]);

  return { ref, style: { y, opacity } };
}
