import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE } from "@/constants/site";
import { routing } from "@/i18n/routing";
import { fontVariables } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "meta" });
  const languages = Object.fromEntries(routing.locales.map((code) => [code, `/${code}`]));

  return {
    metadataBase: new URL(SITE.url),
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${locale}`, languages },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <NextIntlClientProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <CustomCursor />
        </NextIntlClientProvider>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
