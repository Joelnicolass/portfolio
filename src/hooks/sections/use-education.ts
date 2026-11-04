"use client";

import { useTranslations } from "next-intl";
import { CERTIFICATIONS, EDUCATION, TEACHING } from "@/constants/content";
import { usePeriodFormatter } from "@/hooks/use-period-formatter";
import { useYearRange } from "@/hooks/use-year-range";

export function useEducation() {
  const t = useTranslations("education");
  const { formatMonth, formatPeriod } = usePeriodFormatter();
  const formatYears = useYearRange();

  return {
    columns: [
      {
        id: "education",
        title: t("educationLabel"),
        items: EDUCATION.map((item) => ({
          id: item.id,
          title: t(`items.${item.id}.title`),
          institution: t(`items.${item.id}.institution`),
          date: formatPeriod(item),
        })),
      },
      {
        id: "teaching",
        title: t("teachingLabel"),
        items: TEACHING.map((item) => ({
          id: item.id,
          title: t(`teaching.${item.id}.title`),
          institution: t(`teaching.${item.id}.institution`),
          description: t(`teaching.${item.id}.description`),
          date: item.years ? formatYears(item.years) : formatPeriod(item),
        })),
      },
      {
        id: "certifications",
        title: t("certificationsLabel"),
        items: CERTIFICATIONS.map((item) => ({
          id: item.id,
          title: t(`certifications.${item.id}.title`),
          institution: t(`certifications.${item.id}.institution`),
          date: formatMonth(item.date),
        })),
      },
    ],
  };
}
