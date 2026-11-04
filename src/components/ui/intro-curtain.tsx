"use client";

import { motion } from "motion/react";
import { EASE, INTRO } from "@/constants/motion";
import { useIntroCurtain } from "@/hooks/use-intro-curtain";

export const IntroCurtain = () => {
  const bars = useIntroCurtain();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[80] flex">
      {bars.map((bar) => (
        <motion.span
          key={bar.id}
          className="block h-full origin-top bg-foreground"
          style={{ width: bar.width }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: INTRO.duration, ease: EASE.inOutQuart, delay: bar.delay }}
        />
      ))}
    </div>
  );
};
