"use client";

import { motion, type MotionValue } from "motion/react";

type ScrollProgressProps = {
  progress: MotionValue<number>;
};

export const ScrollProgress = ({ progress }: ScrollProgressProps) => (
  <motion.div
    aria-hidden
    style={{ scaleX: progress }}
    className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
  />
);
