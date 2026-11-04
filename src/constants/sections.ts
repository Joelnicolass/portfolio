export const SECTIONS = {
  hero: { id: "top", index: "00" },
  about: { id: "about", index: "01" },
  experience: { id: "experience", index: "02" },
  testimonials: { id: "testimonials", index: "03" },
  lab: { id: "lab", index: "04" },
  skills: { id: "skills", index: "05" },
  contact: { id: "contact", index: "06" },
} as const;

export const MAIN_CONTENT_ID = "main";

export const toAnchor = (id: string) => `#${id}`;
