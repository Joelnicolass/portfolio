import { EXTERNAL_LINK_PROPS } from "@/constants/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";

type SocialLink = { id: string; href: string; label: string };

type SocialLinksProps = {
  items: SocialLink[];
  newTabLabel: string;
  className?: string;
};

export const SocialLinks = ({ items, newTabLabel, className }: SocialLinksProps) => (
  <ul className={cn("flex flex-wrap gap-x-8 gap-y-3", className)}>
    {items.map((item) => (
      <li key={item.id}>
        <a
          href={item.href}
          {...EXTERNAL_LINK_PROPS}
          className="group inline-flex items-center gap-1.5 text-lg text-foreground transition-colors hover:text-accent"
        >
          {item.label}
          <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">{newTabLabel}</span>
        </a>
      </li>
    ))}
  </ul>
);
