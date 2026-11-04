"use client";

import { useCallback } from "react";
import { useFormatter, useTranslations } from "next-intl";
import { MONTH_YEAR_FORMAT } from "@/constants/date";
import { toDate } from "@/lib/utils";

export type Period = { start: string | null; end: string | null };

export function usePeriodFormatter() {
  const format = useFormatter();
  const t = useTranslations("common");

  const formatMonth = useCallback(
    (yearMonth: string) => format.dateTime(toDate(yearMonth), MONTH_YEAR_FORMAT),
    [format],
  );

  const formatPeriod = useCallback(
    ({ start, end }: Period) => {
      const endLabel = end ? formatMonth(end) : t("present");
      return start ? t("period", { start: formatMonth(start), end: endLabel }) : t("expected", { date: endLabel });
    },
    [formatMonth, t],
  );

  return { formatMonth, formatPeriod };
}
