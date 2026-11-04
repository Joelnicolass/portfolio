"use client";

import { useCallback, useState } from "react";

export function useCarousel(length: number) {
  const [state, setState] = useState({ index: 0, direction: 1 });

  const go = useCallback(
    (direction: 1 | -1) =>
      setState(({ index }) => ({ index: (index + direction + length) % length, direction })),
    [length],
  );

  const next = useCallback(() => go(1), [go]);
  const previous = useCallback(() => go(-1), [go]);

  return { ...state, next, previous };
}
