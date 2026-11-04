import { cn } from "@/lib/utils";

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  text: string;
  openLabel: string;
  closeLabel: string;
  controls: string;
  className?: string;
};

export const MenuButton = ({ isOpen, onClick, text, openLabel, closeLabel, controls, className }: MenuButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-expanded={isOpen}
    aria-controls={controls}
    aria-label={isOpen ? closeLabel : openLabel}
    className={cn(
      "inline-flex h-9 items-center gap-2 rounded-full border border-line px-4 text-xs text-foreground",
      className,
    )}
  >
    <span className="relative block h-2 w-4" aria-hidden>
      <span
        className={cn(
          "absolute left-0 h-px w-full bg-current transition-transform duration-300",
          isOpen ? "top-1 rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-px w-full bg-current transition-transform duration-300",
          isOpen ? "top-1 -rotate-45" : "top-2",
        )}
      />
    </span>
    {text}
  </button>
);
