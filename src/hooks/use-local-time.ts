"use client";

import { useSyncExternalStore } from "react";
import { useFormatter } from "next-intl";
import { CLOCK_FORMAT } from "@/constants/date";
import { CLOCK_INTERVAL_MS } from "@/constants/motion";

const MINUTE_MS = 60_000;

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, CLOCK_INTERVAL_MS);
  return () => window.clearInterval(id);
};

const getSnapshot = () => Math.floor(Date.now() / MINUTE_MS);
const getServerSnapshot = () => null;

export function useLocalTime(timeZone: string) {
  const format = useFormatter();
  const minute = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return minute === null
    ? null
    : format.dateTime(new Date(minute * MINUTE_MS), { ...CLOCK_FORMAT, timeZone });
}
