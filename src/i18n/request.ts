import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { SITE } from "@/constants/site";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    timeZone: SITE.timeZone,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
