"use client";

import { motion } from "motion/react";
import { DURATION, EASE } from "@/constants/motion";
import { useSplitChars } from "@/hooks/use-split-chars";
import { cn } from "@/lib/utils";

type RevealCharsProps = {
  text: string;
  delay?: number;
  className?: string;
};

export const RevealChars = ({ text, delay = 0, className }: RevealCharsProps) => {
  const chars = useSplitChars(text, delay);

  return (
    <span className={cn("-mt-[0.12em] block overflow-hidden pt-[0.16em] pb-[0.06em]", className)} aria-label={text}>
      {chars.map(({ key, char, delay: charDelay }) => (
        <motion.span
          key={key}
          aria-hidden
          className="inline-block whitespace-pre will-change-transform"
          initial={{ y: "110%", rotate: 6 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{ duration: DURATION.reveal, ease: EASE.outExpo, delay: charDelay }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
