"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { HERO_ROWS, INTRO } from "@/constants/motion";
import { SECTIONS } from "@/constants/sections";
import { SITE } from "@/constants/site";
import { useLocalTime } from "@/hooks/use-local-time";

export function useHero() {
  const t = useTranslations("hero");
  const time = useLocalTime(SITE.timeZone);
  const rowTexts = t.raw("rows") as string[];

  const rows = useMemo(
    () =>
      rowTexts.map((text, index) => {
        const config = HERO_ROWS[index % HERO_ROWS.length];
        return {
          id: `${index}-${text}`,
          text,
          repeat: config.repeat,
          animation: config.animation,
          delay: INTRO.rowsDelay + index * INTRO.rowStagger,
        };
      }),
    [rowTexts],
  );

  return {
    id: SECTIONS.hero.id,
    title: t("srTitle"),
    rows,
    portrait: {
      src: SITE.portrait,
      alt: t("portraitAlt"),
      delay: INTRO.portraitDelay,
    },
    footer: {
      location: t("location"),
      remote: t("remote"),
      time,
      availability: t("availability"),
    },
  };
}
