"use client";

import { useCallback, useRef, type MouseEvent } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { MAGNETIC_STRENGTH, SPRING } from "@/constants/motion";

export function useMagnetic<T extends HTMLElement>(strength: number = MAGNETIC_STRENGTH.soft) {
  const ref = useRef<T>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING.magnetic);
  const y = useSpring(rawY, SPRING.magnetic);

  const onMouseMove = useCallback(
    (event: MouseEvent<T>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set((event.clientX - (rect.left + rect.width / 2)) * strength);
      rawY.set((event.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [rawX, rawY, strength],
  );

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { ref, style: { x, y }, onMouseMove, onMouseLeave };
}
