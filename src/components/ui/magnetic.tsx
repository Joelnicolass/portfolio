"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export const Magnetic = ({ children, strength, className }: MagneticProps) => {
  const { ref, style, onMouseMove, onMouseLeave } = useMagnetic<HTMLDivElement>(strength);

  return (
    <motion.div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );
};
