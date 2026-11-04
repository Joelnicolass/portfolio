"use client";

import { motion, type MotionValue } from "motion/react";
import {
  useScrollRevealWords,
  useWordOpacity,
  type WordRange,
} from "@/hooks/use-scroll-reveal-words";
import { cn } from "@/lib/utils";

type WordProps = {
  word: string;
  progress: MotionValue<number>;
  range: WordRange;
};

const Word = ({ word, progress, range }: WordProps) => {
  const opacity = useWordOpacity(progress, range);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
};

type ScrollRevealTextProps = {
  text: string;
  className?: string;
};

export const ScrollRevealText = ({ text, className }: ScrollRevealTextProps) => {
  const { ref, progress, words } = useScrollRevealWords<HTMLParagraphElement>(text);

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)} aria-label={text}>
      {words.map(({ key, word, range }) => (
        <Word key={key} word={word} progress={progress} range={range} />
      ))}
    </p>
  );
};
