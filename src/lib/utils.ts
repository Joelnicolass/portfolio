import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { INDEX_PAD, MONTH_DAY_ANCHOR } from "@/constants/date";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const toDate = (yearMonth: string) => new Date(`${yearMonth}${MONTH_DAY_ANCHOR}`);

export const padIndex = (index: number) =>
  String(index + 1).padStart(INDEX_PAD.length, INDEX_PAD.fill);

export const splitWords = (text: string) => text.split(/\s+/).filter(Boolean);

export const splitChars = (text: string) => Array.from(text);

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export const yearsSince = (yearMonth: string, now: Date = new Date()) =>
  Math.floor((now.getTime() - toDate(yearMonth).getTime()) / MS_PER_YEAR);
