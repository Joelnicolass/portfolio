export const EASE = {
  outExpo: [0.16, 1, 0.3, 1],
  inOutQuart: [0.76, 0, 0.24, 1],
} as const;

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 1,
  reveal: 1.1,
  countUp: 2,
} as const;

export const STAGGER = {
  chars: 0.03,
  items: 0.08,
} as const;

export const DELAY = {
  heroName: 0.2,
  heroDetails: 0.9,
} as const;

export const SPRING = {
  progress: { stiffness: 120, damping: 30, restDelta: 0.001 },
  cursor: { stiffness: 260, damping: 28, mass: 0.6 },
  magnetic: { stiffness: 180, damping: 14, mass: 0.2 },
} as const;

export const VIEWPORT = {
  once: true,
  margin: "-10% 0px -10% 0px",
} as const;

export const PARALLAX = {
  heroY: "30%",
  heroFadeEnd: 0.85,
} as const;

export const SCROLL_REVEAL = {
  offset: ["start 0.85", "end 0.45"],
  minOpacity: 0.12,
} as const;

export const MAGNETIC_STRENGTH = {
  soft: 0.25,
  strong: 0.4,
} as const;

export const SMOOTH_SCROLL = {
  duration: 1.15,
  anchorOffset: -80,
} as const;

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const CLOCK_INTERVAL_MS = 1000;

export const COPY_FEEDBACK_MS = 2000;

export const INTRO = {
  bars: 8,
  duration: 0.9,
  stagger: 0.06,
  rowsDelay: 0.55,
  rowStagger: 0.12,
  portraitDelay: 0.9,
} as const;

export const HERO_ROWS = [
  { animation: "animate-marquee-slow", repeat: 3 },
  { animation: "animate-marquee-slow-reverse", repeat: 5 },
  { animation: "animate-marquee-fast", repeat: 5 },
] as const;

export const CURSOR = {
  dotSize: 8,
  ringSize: 44,
  hoverScale: 1.9,
  pressScale: 0.8,
  interactiveSelector: "a, button, [role='button'], input, textarea, select, label, [data-cursor]",
  enableQuery: "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  fill: { idle: "rgba(255, 255, 255, 0)", hover: "rgba(255, 255, 255, 1)" },
  enabledClass: "custom-cursor",
  spring: { stiffness: 380, damping: 32, mass: 0.5 },
} as const;
