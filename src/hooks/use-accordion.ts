"use client";

import { useCallback, useState } from "react";

/**
 * Independent panels: opening one never closes another, so content above the
 * clicked item never collapses and the viewport doesn't jump.
 */
export function useAccordion<Id extends string>(defaultOpen: readonly Id[] = []) {
  const [openIds, setOpenIds] = useState<ReadonlySet<Id>>(() => new Set(defaultOpen));

  const toggle = useCallback(
    (id: Id) =>
      setOpenIds((current) => {
        const next = new Set(current);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      }),
    [],
  );

  const isOpen = useCallback((id: Id) => openIds.has(id), [openIds]);

  return { toggle, isOpen };
}
