import { cn } from "@/lib/utils";

type TagListProps = {
  items: readonly string[];
  className?: string;
  size?: "sm" | "md";
};

export const TagList = ({ items, className, size = "sm" }: TagListProps) => (
  <ul className={cn("flex flex-wrap gap-2", className)}>
    {items.map((item) => (
      <li
        key={item}
        className={cn(
          "rounded-full border border-line text-subtle transition-colors hover:border-subtle hover:text-foreground",
          size === "sm" ? "px-3 py-1 font-mono text-[11px]" : "px-4 py-2 text-sm",
        )}
      >
        {item}
      </li>
    ))}
  </ul>
);
