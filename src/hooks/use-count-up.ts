"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { useFormatter } from "next-intl";
import { DURATION, EASE, VIEWPORT } from "@/constants/motion";

export function useCountUp<T extends HTMLElement>(value: number) {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, VIEWPORT);
  const format = useFormatter();
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => format.number(Math.round(latest)));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: DURATION.countUp, ease: EASE.outExpo });
    return () => controls.stop();
  }, [count, isInView, value]);

  return { ref, display };
}
