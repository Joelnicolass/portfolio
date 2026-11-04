"use client";

import { useTestimonials } from "@/hooks/sections/use-testimonials";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

export const Testimonials = () => {
  const testimonials = useTestimonials();

  return (
    <Section id={testimonials.id} className="bg-surface">
      <SectionHeader index={testimonials.index} label={testimonials.label} title={testimonials.title} />
      <TestimonialCarousel
        active={testimonials.active}
        direction={testimonials.direction}
        people={testimonials.people}
        counter={testimonials.navigation.counter}
        previous={testimonials.navigation.previous}
        next={testimonials.navigation.next}
        sourceLabel={testimonials.sourceLabel}
        newTabLabel={testimonials.newTabLabel}
        translatedNote={testimonials.translatedNote}
      />
    </Section>
  );
};
