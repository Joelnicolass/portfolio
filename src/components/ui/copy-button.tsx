import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "./icons";

type CopyButtonProps = {
  label: string;
  isCopied: boolean;
  onCopy: () => void;
  className?: string;
};

export const CopyButton = ({ label, isCopied, onCopy, className }: CopyButtonProps) => (
  <button
    type="button"
    onClick={onCopy}
    className={cn(
      "inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-sm transition-colors hover:border-foreground",
      isCopied && "border-accent text-accent",
      className,
    )}
  >
    {isCopied ? <CheckIcon /> : <CopyIcon />}
    <span aria-live="polite">{label}</span>
  </button>
);
