"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { DURATION, EASE, VIEWPORT } from "@/constants/motion";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export const FadeIn = ({ children, delay = 0, className }: FadeInProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT}
    transition={{ duration: DURATION.slow, ease: EASE.outExpo, delay }}
  >
    {children}
  </motion.div>
);
