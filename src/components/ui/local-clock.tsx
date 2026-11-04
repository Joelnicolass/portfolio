import { cn } from "@/lib/utils";

type LocalClockProps = {
  label: string;
  value: string | null;
  className?: string;
};

export const LocalClock = ({ label, value, className }: LocalClockProps) => (
  <p className={cn("font-mono text-[11px] tracking-[0.14em] text-subtle uppercase", className)}>
    <span>{label}</span>
    <time className="ml-2 inline-block min-w-[5ch] text-foreground tabular-nums" suppressHydrationWarning>
      {value}
    </time>
  </p>
);
