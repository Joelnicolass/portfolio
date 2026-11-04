"use client";

import { motion } from "motion/react";
import { DURATION, EASE } from "@/constants/motion";
import { cn } from "@/lib/utils";

type HeroRowProps = {
  text: string;
  repeat: number;
  animation: string;
  delay: number;
  className?: string;
};

const Track = ({ text, repeat, hidden }: { text: string; repeat: number; hidden?: boolean }) => (
  <span className="flex shrink-0" aria-hidden={hidden}>
    {Array.from({ length: repeat }, (_, index) => (
      <span key={index} className="pr-[0.25em]">
        {text}
      </span>
    ))}
  </span>
);

export const HeroRow = ({ text, repeat, animation, delay, className }: HeroRowProps) => (
  <motion.div
    aria-hidden
    className={cn("flex overflow-hidden whitespace-nowrap", className)}
    initial={{ clipPath: "inset(100% 0% 0% 0%)", y: "30%" }}
    animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0%" }}
    transition={{ duration: DURATION.slow, ease: EASE.outExpo, delay }}
  >
    <div className={cn("flex w-max", animation)}>
      <Track text={text} repeat={repeat} />
      <Track text={text} repeat={repeat} hidden />
    </div>
  </motion.div>
);
