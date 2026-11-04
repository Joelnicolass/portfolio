"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { CURSOR } from "@/constants/motion";

const ENABLE_QUERY = CURSOR.enableQuery;

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(ENABLE_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};

const getSnapshot = () => window.matchMedia(ENABLE_QUERY).matches;
const getServerSnapshot = () => false;

export function useCustomCursor() {
  const isEnabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, CURSOR.spring);
  const ringY = useSpring(y, CURSOR.spring);

  useEffect(() => {
    if (!isEnabled) return;

    const root = document.documentElement;
    root.classList.add(CURSOR.enabledClass);

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setIsVisible(true);
    };
    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      setIsHovering(Boolean(target?.closest(CURSOR.interactiveSelector)));
    };
    const onLeave = () => setIsVisible(false);
    const onDown = () => setIsPressed(true);
    const onUp = () => setIsPressed(false);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      root.classList.remove(CURSOR.enabledClass);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [isEnabled, x, y]);

  const ringScale = isPressed ? CURSOR.pressScale : isHovering ? CURSOR.hoverScale : 1;

  return {
    isEnabled,
    isVisible,
    isHovering,
    dot: { x, y, size: CURSOR.dotSize },
    ring: {
      x: ringX,
      y: ringY,
      size: CURSOR.ringSize,
      scale: ringScale,
      fill: isHovering ? CURSOR.fill.hover : CURSOR.fill.idle,
    },
  };
}
