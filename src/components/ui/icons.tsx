import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const ArrowUpRightIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDownIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const ArrowUpIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const DownloadIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);

export const PlusIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const CopyIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h8" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);

export const SparkIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M12 2c.5 4.9 2.6 7.5 10 10-7.4 2.5-9.5 5.1-10 10-.5-4.9-2.6-7.5-10-10 7.4-2.5 9.5-5.1 10-10Z" />
  </svg>
);
