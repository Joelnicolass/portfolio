"use client";

import { useExperience } from "@/hooks/sections/use-experience";
import { ExperienceItem } from "@/components/ui/experience-item";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export const Experience = () => {
  const experience = useExperience();

  return (
    <Section id={experience.id} className="inverse">
      <SectionHeader
        index={experience.index}
        label={experience.label}
        title={experience.title}
        description={experience.description}
      />

      <ul>
        {experience.items.map((item) => (
          <ExperienceItem key={item.id} {...item} labels={experience.labels} />
        ))}
      </ul>
    </Section>
  );
};
