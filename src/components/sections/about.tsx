"use client";

import { useAbout } from "@/hooks/sections/use-about";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/ui/fade-in";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatItem } from "@/components/ui/stat-item";

export const About = () => {
  const about = useAbout();

  return (
    <Section id={about.id}>
      <SectionHeader index={about.index} label={about.label} />

      <ScrollRevealText
        text={about.statement}
        className="text-statement max-w-[24ch] font-medium tracking-[-0.035em] md:max-w-none"
      />

      <div className="mt-20 grid gap-12 md:mt-32 md:grid-cols-12">
        <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 md:col-span-4 md:grid-cols-1">
          {about.facts.map((fact) => (
            <div key={fact.id} className="flex flex-col gap-1.5">
              <dt>
                <Eyebrow>{fact.label}</Eyebrow>
              </dt>
              <dd className="text-lg">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-6 md:col-span-7 md:col-start-6">
          {about.paragraphs.map((paragraph, position) => (
            <FadeIn key={paragraph} delay={position * 0.08}>
              <p className="text-lg leading-relaxed text-subtle md:text-xl">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="mt-24 md:mt-36">
        <Eyebrow className="mb-8 block">{about.stats.label}</Eyebrow>
        <ul className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
          {about.stats.items.map((stat) => (
            <li key={stat.id} className="border-r border-b border-line">
              <StatItem {...stat} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
