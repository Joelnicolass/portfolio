"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { COPY_FEEDBACK_MS } from "@/constants/motion";

export function useCopyToClipboard(timeout: number = COPY_FEEDBACK_MS) {
  const [isCopied, setIsCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const copy = useCallback(
    async (text: string) => {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setIsCopied(false), timeout);
    },
    [timeout],
  );

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return { isCopied, copy };
}
