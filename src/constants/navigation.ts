import { SECTIONS, toAnchor } from "./sections";

export const NAV_ITEMS = [
  { id: "about", href: toAnchor(SECTIONS.about.id) },
  { id: "experience", href: toAnchor(SECTIONS.experience.id) },
  { id: "testimonials", href: toAnchor(SECTIONS.testimonials.id) },
  { id: "lab", href: toAnchor(SECTIONS.lab.id) },
  { id: "contact", href: toAnchor(SECTIONS.contact.id) },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];

export const KEYS = {
  escape: "Escape",
} as const;

export const SCROLL_LOCK_CLASS = "scroll-locked";

export const MOBILE_MENU_ID = "mobile-menu";
