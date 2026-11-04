"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { REDUCED_MOTION_QUERY, SMOOTH_SCROLL } from "@/constants/motion";

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const lenis = new Lenis({
      duration: SMOOTH_SCROLL.duration,
      autoRaf: true,
      anchors: { offset: SMOOTH_SCROLL.anchorOffset },
    });

    return () => lenis.destroy();
  }, []);
}
