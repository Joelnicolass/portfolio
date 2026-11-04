import { cn } from "@/lib/utils";

type AvailabilityBadgeProps = {
  label: string;
  className?: string;
};

export const AvailabilityBadge = ({ label, className }: AvailabilityBadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-4 py-2 text-xs text-foreground backdrop-blur",
      className,
    )}
  >
    <span className="size-2 rounded-full bg-accent animate-pulse-dot" aria-hidden />
    {label}
  </span>
);
