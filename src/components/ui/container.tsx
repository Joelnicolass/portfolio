import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-[1600px] px-5 md:px-10", className)}>{children}</div>
);
