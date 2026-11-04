"use client";

import { useCallback, useEffect, useState } from "react";
import { KEYS, SCROLL_LOCK_CLASS } from "@/constants/navigation";

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((value) => !value), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const root = document.documentElement;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEYS.escape) setIsOpen(false);
    };

    root.classList.add(SCROLL_LOCK_CLASS);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      root.classList.remove(SCROLL_LOCK_CLASS);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return { isOpen, toggle, close };
}
