import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export const Eyebrow = ({ children, className }: EyebrowProps) => (
  <span
    className={cn(
      "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase md:text-xs",
      className,
    )}
  >
    {children}
  </span>
);
