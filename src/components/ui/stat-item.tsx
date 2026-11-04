"use client";

import { motion } from "motion/react";
import { DURATION, EASE, VIEWPORT } from "@/constants/motion";
import { useCountUp } from "@/hooks/use-count-up";

type StatItemProps = {
  index: string;
  value: number;
  suffix: string;
  label: string;
  fill: number;
  delay: number;
};

export const StatItem = ({ index, value, suffix, label, fill, delay }: StatItemProps) => {
  const { ref, display } = useCountUp<HTMLSpanElement>(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.slow, ease: EASE.outExpo, delay }}
      className="group relative flex h-full min-h-64 flex-col justify-between gap-10 overflow-hidden p-6 md:p-8"
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-foreground transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
      />

      <span className="relative font-mono text-[11px] tracking-widest text-subtle transition-colors duration-500 group-hover:text-accent">
        {index}
      </span>

      <div className="relative flex flex-col gap-4">
        <p className="flex items-start font-display leading-[0.85] uppercase transition-colors duration-500 group-hover:text-background">
          <motion.span ref={ref} className="text-[clamp(4.5rem,9vw,8.5rem)] tabular-nums">
            {display}
          </motion.span>
          <span className="mt-[0.15em] text-[clamp(2rem,4vw,3.5rem)] text-accent">{suffix}</span>
        </p>

        <span aria-hidden className="relative block h-1 w-full overflow-hidden bg-line">
          <motion.span
            className="absolute inset-y-0 left-0 w-full origin-left bg-accent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: fill }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.countUp, ease: EASE.outExpo, delay: delay + DURATION.fast }}
          />
        </span>

        <p className="max-w-[26ch] text-sm leading-snug text-subtle transition-colors duration-500 group-hover:text-background/70">
          {label}
        </p>
      </div>
    </motion.div>
  );
};
