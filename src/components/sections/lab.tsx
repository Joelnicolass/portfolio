"use client";

import { STAGGER } from "@/constants/motion";
import { useLab } from "@/hooks/sections/use-lab";
import { AgentFlow } from "@/components/ui/agent-flow";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectLinks } from "@/components/ui/project-links";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TagList } from "@/components/ui/tag";

export const Lab = () => {
  const lab = useLab();
  const { framework, flow, caseStudy, engines } = lab;

  return (
    <Section id={lab.id} className="inverse">
      <SectionHeader
        index={lab.index}
        label={lab.label}
        title={lab.title}
        description={lab.description}
      />

      <article className="flex flex-col gap-14 border-t border-line pt-12 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12">
          <FadeIn className="flex flex-col gap-6 md:col-span-7">
            <Eyebrow>{framework.eyebrow}</Eyebrow>
            <h3 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9] break-words text-accent uppercase">
              {framework.name}
            </h3>
            <p className="font-serif text-3xl leading-tight italic md:text-4xl">
              {framework.lead}
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-subtle">
              {framework.description}
            </p>
            <TagList items={framework.tags} />
            <ProjectLinks
              links={framework.links}
              label={lab.linksLabel}
              newTabLabel={lab.newTabLabel}
            />
          </FadeIn>

          <FadeIn
            delay={STAGGER.items}
            className="flex flex-col gap-8 md:col-span-4 md:col-start-9"
          >
            <div>
              <Eyebrow className="mb-4 block">
                {framework.principlesLabel}
              </Eyebrow>
              <ol className="flex flex-col gap-4">
                {framework.principles.map((principle) => (
                  <li
                    key={principle.index}
                    className="flex gap-4 border-t border-line pt-4 text-sm leading-relaxed"
                  >
                    <span className="font-mono text-xs text-accent">
                      {principle.index}
                    </span>
                    {principle.text}
                  </li>
                ))}
              </ol>
            </div>
            {framework.groups.map((group) => (
              <div key={group.id}>
                <Eyebrow className="mb-3 block">{group.label}</Eyebrow>
                <TagList items={group.items} />
              </div>
            ))}
          </FadeIn>
        </div>

        {flow && <AgentFlow {...flow} />}
      </article>

      {caseStudy && (
        <FadeIn className="mt-20 grid gap-8 border-y border-line py-12 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-4">
            <Eyebrow>{caseStudy.eyebrow}</Eyebrow>
            <h3 className="font-display text-7xl leading-none uppercase md:text-8xl">
              {caseStudy.name}
            </h3>
            <Eyebrow>{caseStudy.year}</Eyebrow>
          </div>
          <div className="flex flex-col gap-6 md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed">{caseStudy.description}</p>
            <TagList items={caseStudy.tags} />
            <ProjectLinks
              links={caseStudy.links}
              label={lab.linksLabel}
              newTabLabel={lab.newTabLabel}
            />
            <p className="text-xs text-subtle">{caseStudy.note}</p>
          </div>
        </FadeIn>
      )}

      {engines && (
        <FadeIn className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <Eyebrow className="shrink-0">{engines.label}</Eyebrow>
          <TagList items={engines.items} size="md" />
        </FadeIn>
      )}
    </Section>
  );
};
