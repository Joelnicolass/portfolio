import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export const Section = ({ id, children, className }: SectionProps) => (
  <section id={id} className={cn("relative py-24 md:py-36", className)}>
    <Container>{children}</Container>
  </section>
);
