"use client";

import { AnimatePresence, motion } from "motion/react";
import { DURATION, EASE } from "@/constants/motion";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { PlusIcon } from "./icons";
import { ProjectCard } from "./project-card";
import type { ProjectLinkViewModel } from "./project-links";
import { TagList } from "./tag";

type Role = { id: string; title: string; period: string };

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  year: string;
  tags: readonly string[];
  links: ProjectLinkViewModel[];
};

export type ExperienceLabels = {
  highlights: string;
  stack: string;
  products: string;
  links: string;
  newTab: string;
};

type ExperienceItemProps = {
  id: string;
  company: string;
  location: string;
  summary: string;
  period: string;
  roles: Role[];
  highlights: string[];
  products: Product[];
  tech: readonly string[];
  isOpen: boolean;
  onToggle: () => void;
  toggleLabel: string;
  labels: ExperienceLabels;
};

export const ExperienceItem = ({
  id,
  company,
  location,
  summary,
  period,
  roles,
  highlights,
  products,
  tech,
  isOpen,
  onToggle,
  toggleLabel,
  labels,
}: ExperienceItemProps) => {
  const panelId = `${id}-panel`;

  return (
    <li className="border-t border-line last:border-b">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={toggleLabel}
        className="group grid w-full grid-cols-12 items-center gap-4 py-7 text-left md:py-9"
      >
        <span className="col-span-12 font-mono text-xs text-subtle md:col-span-3">{period}</span>
        <span className="col-span-10 text-3xl font-medium tracking-[-0.04em] transition-colors group-hover:text-accent md:col-span-6 md:text-5xl">
          {company}
        </span>
        <span className="hidden text-sm text-subtle md:col-span-2 md:block">{location}</span>
        <span
          className={cn(
            "col-span-2 ml-auto flex size-10 items-center justify-center rounded-full border border-line transition-all duration-500 md:col-span-1",
            isOpen && "rotate-45 border-accent bg-accent text-accent-foreground",
          )}
        >
          <PlusIcon className="size-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.inOutQuart }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-10 pb-12">
              <div className="grid gap-10 md:grid-cols-12">
                <div className="flex flex-col gap-6 md:col-span-4 md:col-start-4">
                  <p className="text-subtle">{summary}</p>
                  <ul className="flex flex-col gap-4">
                    {roles.map((role) => (
                      <li key={role.id} className="flex flex-col gap-1 border-l border-accent pl-4">
                        <span className="text-sm text-foreground">{role.title}</span>
                        <span className="font-mono text-[11px] text-subtle">{role.period}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-subtle md:hidden">{location}</p>
                </div>
                <div className="flex flex-col gap-8 md:col-span-5">
                  {highlights.length > 0 && (
                    <div>
                      <Eyebrow className="mb-4 block">{labels.highlights}</Eyebrow>
                      <ul className="flex flex-col gap-3">
                        {highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-foreground md:text-base">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <Eyebrow className="mb-4 block">{labels.stack}</Eyebrow>
                    <TagList items={tech} />
                  </div>
                </div>
              </div>

              {products.length > 0 && (
                <div className="md:pl-[25%]">
                  <Eyebrow className="mb-4 block">{labels.products}</Eyebrow>
                  <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                      <li key={product.id}>
                        <ProjectCard {...product} linksLabel={labels.links} newTabLabel={labels.newTab} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
