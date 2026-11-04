"use client";

import { useTranslations } from "next-intl";
import { MAIN_CONTENT_ID, toAnchor } from "@/constants/sections";

export function useSkipLink() {
  const t = useTranslations("nav");
  return { label: t("skipToContent"), href: toAnchor(MAIN_CONTENT_ID) };
}
