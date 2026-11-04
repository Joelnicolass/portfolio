import type { Locale } from "next-intl";
import { cn } from "@/lib/utils";

type LocaleOption = { code: Locale; label: string; isActive: boolean };

type LocaleSwitcherProps = {
  options: LocaleOption[];
  onSelect: (locale: Locale) => void;
  label: string;
  isPending?: boolean;
  className?: string;
};

export const LocaleSwitcher = ({ options, onSelect, label, isPending, className }: LocaleSwitcherProps) => (
  <div
    role="group"
    aria-label={label}
    aria-busy={isPending}
    className={cn("flex items-center rounded-full border border-line p-1", className)}
  >
    {options.map((option) => (
      <button
        key={option.code}
        type="button"
        lang={option.code}
        aria-pressed={option.isActive}
        onClick={() => onSelect(option.code)}
        className={cn(
          "rounded-full px-2.5 py-1 font-mono text-[11px] tracking-widest transition-colors",
          option.isActive ? "bg-foreground text-background" : "text-subtle hover:text-foreground",
        )}
      >
        {option.label}
      </button>
    ))}
  </div>
);
