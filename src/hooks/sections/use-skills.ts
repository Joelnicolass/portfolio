"use client";

import { useTranslations } from "next-intl";
import { MARQUEE_ITEMS, SKILL_GROUPS } from "@/constants/content";
import { SECTIONS } from "@/constants/sections";
import { useSectionIndex } from "@/hooks/use-section-label";

export function useSkills() {
  const t = useTranslations("skills");
  const index = useSectionIndex(SECTIONS.skills.index);

  return {
    id: SECTIONS.skills.id,
    index,
    label: t("label"),
    title: t("title"),
    groups: SKILL_GROUPS.map((group) => ({
      id: group.id,
      title: t(`groups.${group.id}`),
      items: [...group.items, ...(t.raw(`extra.${group.id}`) as string[])],
    })),
  };
}

export function useMarquee() {
  return { items: MARQUEE_ITEMS };
}
