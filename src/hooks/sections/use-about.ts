"use client";

import { useTranslations } from "next-intl";
import { ABOUT_FACTS, PERCENT_SUFFIX, STATS } from "@/constants/content";
import { SECTIONS } from "@/constants/sections";
import { STAGGER } from "@/constants/motion";
import { useSectionIndex } from "@/hooks/use-section-label";
import { padIndex } from "@/lib/utils";

export function useAbout() {
  const t = useTranslations("about");
  const tStats = useTranslations("stats");
  const index = useSectionIndex(SECTIONS.about.index);

  return {
    id: SECTIONS.about.id,
    index,
    label: t("label"),
    statement: t("statement"),
    paragraphs: t.raw("paragraphs") as string[],
    facts: ABOUT_FACTS.map((id) => ({
      id,
      label: t(`facts.${id}.label`),
      value: t(`facts.${id}.value`),
    })),
    stats: {
      label: tStats("label"),
      items: STATS.map((stat, position) => ({
        ...stat,
        label: tStats(`items.${stat.id}`),
        index: padIndex(position),
        fill: stat.suffix === PERCENT_SUFFIX ? stat.value / 100 : 1,
        delay: position * STAGGER.items,
      })),
    },
  };
}
