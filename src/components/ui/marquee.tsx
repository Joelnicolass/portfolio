import { cn } from "@/lib/utils";
import { SparkIcon } from "./icons";

type MarqueeProps = {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
};

const MarqueeTrack = ({ items, hidden }: { items: readonly string[]; hidden?: boolean }) => (
  <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
    {items.map((item) => (
      <li key={item} className="flex items-center gap-8 pr-8 md:gap-12 md:pr-12">
        <span>{item}</span>
        <SparkIcon className="size-5 text-accent md:size-7" />
      </li>
    ))}
  </ul>
);

export const Marquee = ({ items, reverse, className }: MarqueeProps) => (
  <div
    className={cn(
      "group flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]",
      className,
    )}
  >
    <div
      className={cn(
        "flex w-max group-hover:[animation-play-state:paused]",
        reverse ? "animate-marquee-reverse" : "animate-marquee",
      )}
    >
      <MarqueeTrack items={items} />
      <MarqueeTrack items={items} hidden />
    </div>
  </div>
);
