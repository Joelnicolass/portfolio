export const MONTH_YEAR_FORMAT = {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
} as const;

export const CLOCK_FORMAT = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
} as const;

export const MONTH_DAY_ANCHOR = "-15T12:00:00Z";

export const INDEX_PAD = { length: 2, fill: "0" } as const;
