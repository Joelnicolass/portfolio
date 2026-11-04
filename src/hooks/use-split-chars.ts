"use client";

import { useMemo } from "react";
import { STAGGER } from "@/constants/motion";
import { splitChars } from "@/lib/utils";

export function useSplitChars(text: string, baseDelay = 0) {
  return useMemo(
    () =>
      splitChars(text).map((char, index) => ({
        key: `${index}-${char}`,
        char,
        delay: baseDelay + index * STAGGER.chars,
      })),
    [text, baseDelay],
  );
}
