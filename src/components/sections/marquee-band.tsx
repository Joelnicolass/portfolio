"use client";

import { useMarquee } from "@/hooks/sections/use-skills";
import { Marquee } from "@/components/ui/marquee";

export const MarqueeBand = () => {
  const { items } = useMarquee();

  return (
    <div className="flex flex-col gap-4 border-y border-line py-8 text-4xl font-medium tracking-[-0.04em] md:py-12 md:text-7xl">
      <Marquee items={items} />
      <div aria-hidden>
        <Marquee items={items} reverse className="font-serif font-normal text-subtle italic" />
      </div>
    </div>
  );
};
