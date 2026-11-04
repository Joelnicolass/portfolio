"use client";

import { STAGGER } from "@/constants/motion";
import { useEducation } from "@/hooks/sections/use-education";
import { useSkills } from "@/hooks/sections/use-skills";
import { EntryList } from "@/components/ui/entry-list";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SkillGroup } from "@/components/ui/skill-group";

export const Skills = () => {
  const skills = useSkills();
  const education = useEducation();

  return (
    <Section id={skills.id} className="bg-surface">
      <SectionHeader index={skills.index} label={skills.label} title={skills.title} />

      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, position) => (
          <FadeIn key={group.id} delay={position * STAGGER.items}>
            <SkillGroup title={group.title} items={group.items} />
          </FadeIn>
        ))}
      </div>

      <div className="mt-20 grid gap-14 border-t border-line pt-14 md:grid-cols-3 md:gap-10">
        {education.columns.map((column, position) => (
          <FadeIn key={column.id} delay={position * STAGGER.items}>
            <EntryList title={column.title} items={column.items} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
