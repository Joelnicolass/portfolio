"use client";

import { useMemo } from "react";
import { INTRO } from "@/constants/motion";

export function useIntroCurtain() {
  return useMemo(
    () =>
      Array.from({ length: INTRO.bars }, (_, index) => ({
        id: index,
        delay: index * INTRO.stagger,
        width: `${100 / INTRO.bars}%`,
      })),
    [],
  );
}
