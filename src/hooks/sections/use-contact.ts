"use client";

import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { SECTIONS, toAnchor } from "@/constants/sections";
import { SITE, SOCIAL_LINKS } from "@/constants/site";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { useSectionIndex } from "@/hooks/use-section-label";

export function useContact() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const index = useSectionIndex(SECTIONS.contact.index);
  const { isCopied, copy } = useCopyToClipboard();

  const onCopy = useCallback(() => copy(SITE.email), [copy]);

  return {
    id: SECTIONS.contact.id,
    index,
    label: t("label"),
    title: t("title"),
    titleAccent: t("titleAccent"),
    description: t("description"),
    email: { value: SITE.email, href: `mailto:${SITE.email}` },
    copy: { label: isCopied ? t("copied") : t("copy"), isCopied, onCopy },
    cv: { label: t("cv"), href: SITE.cvPath, download: SITE.cvFileName },
    socials: {
      label: t("socials"),
      newTabLabel: tCommon("newTab"),
      items: SOCIAL_LINKS.map((link) => ({ ...link, label: t(`social.${link.id}`) })),
    },
  };
}

export function useFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return {
    rights: t("rights", { year }),
    built: t("built"),
    backToTop: { label: t("backToTop"), href: toAnchor(SECTIONS.hero.id) },
  };
}
