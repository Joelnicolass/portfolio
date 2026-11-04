"use client";

import { motion } from "motion/react";
import { INTRO } from "@/constants/motion";
import { useHero } from "@/hooks/sections/use-hero";
import { useParallax } from "@/hooks/use-parallax";
import { staggeredEnter } from "@/lib/motion";
import { Container } from "@/components/ui/container";
import { HeroRow } from "@/components/ui/hero-row";
import { IntroCurtain } from "@/components/ui/intro-curtain";
import { Portrait } from "@/components/ui/portrait";

export const Hero = () => {
  const hero = useHero();
  const { ref, style } = useParallax<HTMLElement>();

  return (
    <section id={hero.id} ref={ref} className="relative flex h-svh min-h-[560px] flex-col overflow-hidden">
      <IntroCurtain />
      <h1 className="sr-only">{hero.title}</h1>

      <motion.div style={style} className="relative flex flex-1 flex-col justify-center bg-background pt-16">
        <div className="relative font-display text-hero uppercase">
          {hero.rows.map((row) => (
            <HeroRow
              key={row.id}
              text={row.text}
              repeat={row.repeat}
              animation={row.animation}
              delay={row.delay}
              className="relative text-foreground"
            />
          ))}

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <Portrait
              {...hero.portrait}
              className="mt-[4%] aspect-[2/3] w-[min(32vw,36svh)] min-w-[180px]"
            />
          </div>
        </div>
      </motion.div>

      <Container className="relative z-30 pb-5">
        <motion.div
          {...staggeredEnter(0, INTRO.portraitDelay)}
          className="flex items-center justify-between gap-4 text-xs tracking-wide uppercase md:text-sm"
        >
          <p className="flex flex-wrap items-center gap-x-2">
            <span>{hero.footer.location}</span>
            <span aria-hidden className="text-accent">•</span>
            <time className="tabular-nums" suppressHydrationWarning>
              {hero.footer.time}
            </time>
            <span aria-hidden className="hidden text-accent sm:inline">•</span>
            <span className="hidden sm:inline">{hero.footer.remote}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent animate-pulse-dot" aria-hidden />
            {hero.footer.availability}
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
