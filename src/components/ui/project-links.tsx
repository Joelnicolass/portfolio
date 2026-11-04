import { EXTERNAL_LINK_PROPS } from "@/constants/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";

export type ProjectLinkViewModel = { type: string; href: string; label: string };

type ProjectLinksProps = {
  links: ProjectLinkViewModel[];
  label: string;
  newTabLabel: string;
  className?: string;
};

export const ProjectLinks = ({ links, label, newTabLabel, className }: ProjectLinksProps) =>
  links.length > 0 && (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="mr-1 font-mono text-[11px] tracking-widest text-subtle uppercase">{label}</span>
      {links.map((link) => (
        <a
          key={link.type}
          href={link.href}
          {...EXTERNAL_LINK_PROPS}
          className="group/link inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          {link.label}
          <ArrowUpRightIcon className="size-3 transition-transform duration-300 group-hover/link:rotate-45" />
          <span className="sr-only">{newTabLabel}</span>
        </a>
      ))}
    </div>
  );
