import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { MAIN_CONTENT_ID } from "@/constants/sections";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Lab } from "@/components/sections/lab";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { Skills } from "@/components/sections/skills";
import { SkipToContent } from "@/components/sections/skip-to-content";
import { Testimonials } from "@/components/sections/testimonials";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <SkipToContent />
      <Header />
      <main id={MAIN_CONTENT_ID}>
        <Hero />
        <MarqueeBand />
        <About />
        <Experience />
        <Testimonials />
        <Lab />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
