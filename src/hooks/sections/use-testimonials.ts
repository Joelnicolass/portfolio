"use client";

import { useTranslations } from "next-intl";
import { PARAGRAPH_SEPARATOR, TESTIMONIALS } from "@/constants/content";
import { SECTIONS } from "@/constants/sections";
import { useCarousel } from "@/hooks/use-carousel";
import { useSectionIndex } from "@/hooks/use-section-label";
import { padIndex } from "@/lib/utils";

export function useTestimonials() {
  const t = useTranslations("testimonials");
  const tCommon = useTranslations("common");
  const index = useSectionIndex(SECTIONS.testimonials.index);
  const carousel = useCarousel(TESTIMONIALS.length);

  const items = TESTIMONIALS.map((item) => ({
    id: item.id,
    href: item.linkedin,
    name: t(`items.${item.id}.name`),
    role: t(`items.${item.id}.role`),
    relation: t(`items.${item.id}.relation`),
    quote: t(`items.${item.id}.quote`),
    paragraphs: t(`items.${item.id}.text`).split(PARAGRAPH_SEPARATOR),
  }));

  return {
    id: SECTIONS.testimonials.id,
    index,
    label: t("label"),
    title: t("title"),
    translatedNote: t("translated"),
    sourceLabel: t("source"),
    newTabLabel: tCommon("newTab"),
    active: items[carousel.index],
    direction: carousel.direction,
    navigation: {
      counter: t("counter", {
        current: padIndex(carousel.index),
        total: padIndex(items.length - 1),
      }),
      previous: { label: t("previous"), onClick: carousel.previous },
      next: { label: t("next"), onClick: carousel.next },
    },
    people: items.map((item, position) => ({
      id: item.id,
      name: item.name,
      isActive: position === carousel.index,
    })),
  };
}
