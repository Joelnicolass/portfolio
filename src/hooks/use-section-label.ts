"use client";

import { useTranslations } from "next-intl";

export function useSectionIndex(index: string) {
  const t = useTranslations("common");
  return t("sectionIndex", { index });
}
