"use client";

import { useCallback, useTransition } from "react";
import { useLocale, useTranslations, type Locale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function useLocaleSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelect = useCallback(
    (next: Locale) =>
      startTransition(() => router.replace(pathname, { locale: next, scroll: false })),
    [pathname, router],
  );

  const options = routing.locales.map((code) => ({
    code,
    label: t(`locales.${code}`),
    isActive: code === locale,
  }));

  return { options, onSelect, isPending, label: t("language") };
}
