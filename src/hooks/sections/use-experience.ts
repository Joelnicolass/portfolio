"use client";

import { useTranslations } from "next-intl";
import { DEFAULT_OPEN_EXPERIENCE, EXPERIENCE, PROJECTS } from "@/constants/content";
import { SECTIONS } from "@/constants/sections";
import { useAccordion } from "@/hooks/use-accordion";
import { usePeriodFormatter } from "@/hooks/use-period-formatter";
import { useSectionIndex } from "@/hooks/use-section-label";
import { useYearRange } from "@/hooks/use-year-range";

type ExperienceId = (typeof EXPERIENCE)[number]["id"];

export function useExperience() {
  const t = useTranslations("experience");
  const tWork = useTranslations("work");
  const tCommon = useTranslations("common");
  const index = useSectionIndex(SECTIONS.experience.index);
  const { formatPeriod } = usePeriodFormatter();
  const formatYears = useYearRange();
  const accordion = useAccordion<ExperienceId>([DEFAULT_OPEN_EXPERIENCE]);

  const products = PROJECTS.map((project) => ({
    id: project.id,
    company: project.company,
    year: formatYears(project.period),
    tags: project.tags,
    links: project.links.map((link) => ({ ...link, label: tWork(`links.${link.type}`) })),
    name: tWork(`items.${project.id}.name`),
    category: tWork(`items.${project.id}.category`),
    description: tWork(`items.${project.id}.description`),
  }));

  const items = EXPERIENCE.map((item) => {
    const roleTitles = t.raw(`items.${item.id}.roles`) as Record<string, string>;
    const company = t(`items.${item.id}.company`);

    return {
      id: item.id,
      company,
      location: t(`items.${item.id}.location`),
      summary: t(`items.${item.id}.summary`),
      period: formatPeriod(item),
      roles: item.roles.map((role) => ({
        id: role.id,
        title: roleTitles[role.id],
        period: formatPeriod(role),
      })),
      highlights: t.raw(`items.${item.id}.highlights`) as string[],
      products: products.filter((product) => product.company === item.id),
      tech: item.tech,
      toggleLabel: t("toggle", { company }),
      isOpen: accordion.isOpen(item.id),
      onToggle: () => accordion.toggle(item.id),
    };
  });

  return {
    id: SECTIONS.experience.id,
    index,
    label: t("label"),
    title: t("title"),
    description: t("description"),
    labels: {
      highlights: t("highlights"),
      stack: t("stack"),
      products: t("products"),
      links: tWork("links.label"),
      newTab: tCommon("newTab"),
    },
    items,
  };
}
