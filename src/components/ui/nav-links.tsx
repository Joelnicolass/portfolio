import { cn } from "@/lib/utils";

type NavLink = { id: string; href: string; label: string };

type NavLinksProps = {
  links: NavLink[];
  ariaLabel: string;
  className?: string;
};

export const NavLinks = ({ links, ariaLabel, className }: NavLinksProps) => (
  <nav aria-label={ariaLabel} className={className}>
    <ul className="flex items-center gap-1">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className={cn(
              "group relative inline-flex h-9 items-center overflow-hidden px-3 whitespace-nowrap text-sm text-subtle transition-colors hover:text-foreground",
            )}
          >
            <span className="relative block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[150%]">
              {link.label}
            </span>
            <span
              aria-hidden
              className="absolute inset-x-3 top-1/2 block translate-y-[100%] text-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2"
            >
              {link.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
