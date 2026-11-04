export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "joelnicolass@gmail.com",
  timeZone: "America/Argentina/Buenos_Aires",
  cvPath: "/cv/joel-nicolas-sartori-cv.pdf",
  cvFileName: "Joel_Nicolas_Sartori.pdf",
  portrait: "/images/joel-sartori-portrait.jpg",
} as const;

export const SOCIAL_LINKS = [
  { id: "linkedin", href: "https://www.linkedin.com/in/joel-nicolas-sartori/" },
  { id: "github", href: "https://github.com/joelnicolass" },
  { id: "email", href: `mailto:${SITE.email}` },
] as const;

export type SocialId = (typeof SOCIAL_LINKS)[number]["id"];

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
