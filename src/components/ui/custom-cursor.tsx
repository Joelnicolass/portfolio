"use client";

import { motion } from "motion/react";
import { DURATION, EASE } from "@/constants/motion";
import { useCustomCursor } from "@/hooks/use-custom-cursor";

export const CustomCursor = () => {
  const { isEnabled, isVisible, isHovering, dot, ring } = useCustomCursor();

  if (!isEnabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90] mix-blend-difference">
      <motion.span
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
        style={{
          x: ring.x,
          y: ring.y,
          width: ring.size,
          height: ring.size,
        }}
        animate={{
          scale: ring.scale,
          opacity: isVisible ? 1 : 0,
          backgroundColor: ring.fill,
        }}
        transition={{ duration: DURATION.fast, ease: EASE.outExpo }}
      />
      <motion.span
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{
          x: dot.x,
          y: dot.y,
          width: dot.size,
          height: dot.size,
        }}
        animate={{ opacity: isVisible && !isHovering ? 1 : 0 }}
        transition={{ duration: DURATION.fast }}
      />
    </div>
  );
};
