import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "bg-accent text-accent-foreground hover:bg-foreground",
  outline: "border border-line text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
  ghost: "text-foreground hover:text-accent",
} as const;

const SIZES = {
  sm: "h-9 px-4 text-xs",
  md: "h-12 px-6 text-sm",
  lg: "h-16 px-8 text-base",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  download?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
};

export const ButtonLink = ({
  href,
  children,
  icon,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  ...rest
}: ButtonLinkProps) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className={cn(
      "group/button inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300",
      VARIANTS[variant],
      SIZES[size],
      className,
    )}
    {...rest}
  >
    <span>{children}</span>
    {icon && (
      <span className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5">
        {icon}
      </span>
    )}
  </a>
);
