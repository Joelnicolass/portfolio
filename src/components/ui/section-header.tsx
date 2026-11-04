import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { FadeIn } from "./fade-in";

type SectionHeaderProps = {
  index: string;
  label: string;
  title?: string;
  description?: string;
  className?: string;
};

export const SectionHeader = ({ index, label, title, description, className }: SectionHeaderProps) => (
  <header className={cn("mb-14 grid gap-6 md:mb-20 md:grid-cols-12", className)}>
    <FadeIn className="flex items-center gap-3 md:col-span-3">
      <Eyebrow className="text-accent">{index}</Eyebrow>
      <Eyebrow>{label}</Eyebrow>
    </FadeIn>
    {title && (
      <FadeIn delay={0.1} className="md:col-span-9">
        <h2 className="text-headline font-medium tracking-[-0.04em] text-balance">{title}</h2>
        {description && (
          <p className="mt-6 max-w-xl text-base text-subtle md:text-lg">{description}</p>
        )}
      </FadeIn>
    )}
  </header>
);
