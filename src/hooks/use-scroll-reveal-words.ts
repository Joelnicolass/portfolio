"use client";

import { useMemo, useRef } from "react";
import { useScroll, useTransform, type MotionValue } from "motion/react";
import { SCROLL_REVEAL } from "@/constants/motion";
import { splitWords } from "@/lib/utils";

export type WordRange = readonly [number, number];

export function useScrollRevealWords<T extends HTMLElement>(text: string) {
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [...SCROLL_REVEAL.offset] as ["start 0.85", "end 0.45"],
  });

  const words = useMemo(() => {
    const list = splitWords(text);
    return list.map((word, index) => ({
      key: `${index}-${word}`,
      word,
      range: [index / list.length, (index + 1) / list.length] as WordRange,
    }));
  }, [text]);

  return { ref, progress: scrollYProgress, words };
}

export function useWordOpacity(progress: MotionValue<number>, range: WordRange) {
  return useTransform(progress, [...range], [SCROLL_REVEAL.minOpacity, 1]);
}
