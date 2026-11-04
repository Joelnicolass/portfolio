type SkipLinkProps = {
  href: string;
  label: string;
};

export const SkipLink = ({ href, label }: SkipLinkProps) => (
  <a
    href={href}
    className="fixed top-4 left-4 z-[70] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm text-accent-foreground transition-transform focus:translate-y-0"
  >
    {label}
  </a>
);
