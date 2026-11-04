"use client";

import { AnimatePresence, motion } from "motion/react";
import { DURATION, EASE } from "@/constants/motion";
import { EXTERNAL_LINK_PROPS } from "@/constants/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";
import { Eyebrow } from "./eyebrow";

type Testimonial = {
  id: string;
  href: string;
  name: string;
  role: string;
  relation: string;
  quote: string;
  paragraphs: string[];
};

type NavAction = { label: string; onClick: () => void };

type TestimonialCarouselProps = {
  active: Testimonial;
  direction: number;
  people: { id: string; name: string; isActive: boolean }[];
  counter: string;
  previous: NavAction;
  next: NavAction;
  sourceLabel: string;
  newTabLabel: string;
  translatedNote: string;
};

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 60 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -60 }),
};

const ArrowButton = ({ action, flip }: { action: NavAction; flip?: boolean }) => (
  <button
    type="button"
    onClick={action.onClick}
    aria-label={action.label}
    className="flex size-12 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
  >
    <ArrowUpRightIcon className={cn("size-4", flip ? "-rotate-135" : "rotate-45")} />
  </button>
);

export const TestimonialCarousel = ({
  active,
  direction,
  people,
  counter,
  previous,
  next,
  sourceLabel,
  newTabLabel,
  translatedNote,
}: TestimonialCarouselProps) => (
  <div className="grid gap-12 md:grid-cols-12">
    <div className="flex flex-col justify-between gap-10 md:col-span-4">
      <ul className="flex flex-col gap-3">
        {people.map((person) => (
          <li
            key={person.id}
            className={cn(
              "text-2xl tracking-[-0.03em] transition-colors duration-500 md:text-3xl",
              person.isActive ? "text-foreground" : "text-muted",
            )}
          >
            {person.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <ArrowButton action={previous} flip />
        <ArrowButton action={next} />
        <span className="ml-2 font-mono text-xs text-subtle tabular-nums" aria-live="polite">
          {counter}
        </span>
      </div>
    </div>

    <div className="relative md:col-span-8">
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.figure
          key={active.id}
          custom={direction}
          variants={slide}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: DURATION.base, ease: EASE.outExpo }}
          className="flex flex-col gap-8"
        >
          <blockquote className="flex flex-col gap-6">
            <p className="font-serif text-4xl leading-[1.05] text-accent italic md:text-6xl">{active.quote}</p>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-subtle md:text-lg">
              {active.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </blockquote>
          <figcaption className="flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-lg text-foreground">{active.name}</span>
              <span className="text-sm text-subtle">{active.role}</span>
              <Eyebrow className="mt-2">{active.relation}</Eyebrow>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              {translatedNote && <Eyebrow>{translatedNote}</Eyebrow>}
              <a
                href={active.href}
                {...EXTERNAL_LINK_PROPS}
                className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
              >
                {sourceLabel}
                <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:rotate-45" />
                <span className="sr-only">{newTabLabel}</span>
              </a>
            </div>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </div>
  </div>
);
