"use client";

import { useSkipLink } from "@/hooks/sections/use-skip-link";
import { SkipLink } from "@/components/ui/skip-link";

export const SkipToContent = () => {
  const link = useSkipLink();
  return <SkipLink href={link.href} label={link.label} />;
};
