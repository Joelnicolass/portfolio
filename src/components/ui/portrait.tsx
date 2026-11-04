"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { DURATION, EASE } from "@/constants/motion";
import { cn } from "@/lib/utils";

type PortraitProps = {
  src: string;
  alt: string;
  delay: number;
  className?: string;
};

export const Portrait = ({ src, alt, delay, className }: PortraitProps) => (
  <motion.figure
    className={cn("relative overflow-hidden bg-foreground", className)}
    initial={{ clipPath: "inset(50% 50% 50% 50%)", scale: 1.15 }}
    animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
    transition={{ duration: DURATION.reveal, ease: EASE.inOutQuart, delay }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="(min-width: 768px) 34vw, 60vw"
      className="object-cover"
    />
  </motion.figure>
);
