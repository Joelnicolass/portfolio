"use client";

import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/constants/navigation";
import { SECTIONS, toAnchor } from "@/constants/sections";
import { SITE } from "@/constants/site";
import { useLocalTime } from "@/hooks/use-local-time";
import { useLocaleSwitcher } from "@/hooks/use-locale-switcher";
import { useMenu } from "@/hooks/use-menu";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function useHeader() {
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");
  const menu = useMenu();
  const locale = useLocaleSwitcher();
  const time = useLocalTime(SITE.timeZone);
  const progress = useScrollProgress();

  const links = NAV_ITEMS.map((item) => ({ ...item, label: t(item.id) }));

  return {
    logo: { firstName: tHero("firstName"), lastName: tHero("lastName"), href: toAnchor(SECTIONS.hero.id), ariaLabel: t("home") },
    nav: { links, ariaLabel: t("primary") },
    cta: { label: t("talk"), href: toAnchor(SECTIONS.contact.id) },
    clock: { value: time, label: t("localTime") },
    menu: {
      ...menu,
      openLabel: t("openMenu"),
      closeLabel: t("closeMenu"),
      text: menu.isOpen ? t("close") : t("menu"),
    },
    locale,
    progress,
  };
}
