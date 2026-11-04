"use client";

import { useCallback } from "react";
import { useTranslations } from "next-intl";

export type YearRange = { start: string; end?: string };

export function useYearRange() {
  const t = useTranslations("common");

  return useCallback(
    ({ start, end }: YearRange) => (end ? t("yearRange", { start, end }) : start),
    [t],
  );
}
