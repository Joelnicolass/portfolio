import { yearsSince } from "@/lib/utils";

export const CAREER_START = "2018-03";

export const CAREER_YEARS = yearsSince(CAREER_START);

export const PERCENT_SUFFIX = "%";

export const STATS = [
  { id: "years", value: CAREER_YEARS, suffix: "+" },
  { id: "users", value: 3, suffix: "M+" },
  { id: "concurrent", value: 300, suffix: "K+" },
  { id: "coverage", value: 90, suffix: "%" },
  { id: "adoption", value: 60, suffix: "%" },
  { id: "estimates", value: 30, suffix: "%" },
  { id: "aiUsers", value: 400, suffix: "+" },
] as const;

export const ABOUT_FACTS = ["focus", "industry", "languages"] as const;

export const PROJECT_LINK_TYPES = ["web", "appStore", "googlePlay"] as const;

export type ProjectLinkType = (typeof PROJECT_LINK_TYPES)[number];

type ProjectLink = { type: ProjectLinkType; href: string };

type Project = {
  id: string;
  company: string;
  period: { start: string; end?: string };
  tags: readonly string[];
  links: readonly ProjectLink[];
};

export const PROJECTS = [
  {
    id: "ueno",
    company: "itti",
    period: { start: "2026" },
    tags: ["Flutter", "Micro-apps", "BFF"],
    links: [
      { type: "appStore", href: "https://apps.apple.com/py/app/ueno/id1592509395" },
      {
        type: "googlePlay",
        href: "https://play.google.com/store/apps/details?id=py.com.elcomercio.retailbanking",
      },
    ],
  },
  {
    id: "umarket",
    company: "itti",
    period: { start: "2025", end: "2026" },
    tags: ["React Native", "React", "Next.js", "Go", "NullPlatform"],
    links: [
      { type: "web", href: "https://umarket.com.py/" },
      { type: "appStore", href: "https://apps.apple.com/py/app/umarket/id6756619340" },
    ],
  },
  {
    id: "uttoki",
    company: "itti",
    period: { start: "2025", end: "2026" },
    tags: ["Flutter", "Java", "Go", "NestJS", "Node.js", "NullPlatform"],
    links: [],
  },
  {
    id: "tuiu",
    company: "itti",
    period: { start: "2025", end: "2026" },
    tags: ["Next.js", "Java", "NestJS", "NullPlatform", "New Relic", "Amplitude"],
    links: [],
  },
  {
    id: "fifa",
    company: "itti",
    period: { start: "2026" },
    tags: ["Streaming", "Performance", "High concurrency"],
    links: [],
  },
  {
    id: "ppi",
    company: "ppi",
    period: { start: "2024", end: "2025" },
    tags: ["Next.js", "React Native", "2FA"],
    links: [
      { type: "web", href: "https://www.portfoliopersonal.com/" },
      {
        type: "appStore",
        href: "https://apps.apple.com/ar/app/portfolio-personal-inversiones/id1633706363",
      },
      {
        type: "googlePlay",
        href: "https://play.google.com/store/apps/details?id=com.portfoliopersonal.app",
      },
    ],
  },
] as const satisfies readonly Project[];

export const LAB_REPOS = {
  studioSkills: "https://github.com/Joelnicolass/godot-studio-skills",
  sacrifice: "https://github.com/Joelnicolass/sacproject",
} as const;

export const ARCHIFY_DIAGRAMS = {
  flow: { es: "https://joelnicolass.github.io/godot-studio-skills/index.html", en: "https://joelnicolass.github.io/godot-studio-skills/en.html" },
  kits: { es: "https://joelnicolass.github.io/godot-studio-skills/kits.html", en: "https://joelnicolass.github.io/godot-studio-skills/kits-en.html" },
} as const;

export const AGENT_FLOW = {
  lanes: ["you", "orchestrator", "agents"],
  phases: [
    {
      id: "ask",
      nodes: [
        { id: "idea", lane: "you", step: 1 },
        { id: "interview", lane: "orchestrator", step: 2 },
        { id: "feature", lane: "orchestrator", step: 3 },
      ],
    },
    {
      id: "plan",
      nodes: [
        { id: "lead", lane: "agents", step: 4 },
        { id: "ok", lane: "you", step: 5 },
      ],
    },
    {
      id: "build",
      nodes: [
        { id: "dev", lane: "agents", step: 6 },
        { id: "review", lane: "agents", step: 7 },
        { id: "play", lane: "agents", step: 8 },
        { id: "classify", lane: "orchestrator", step: 9 },
        { id: "close", lane: "you", step: 10 },
      ],
    },
  ],
} as const;

export const FRAMEWORK = {
  tags: ["Claude Code", "Cursor", "Godot 4", "SDD", "GDScript"],
  agents: ["techLead", "developer", "reviewer", "tester", "visual", "playtester"],
  commands: [
    "/create-prd",
    "/generate-rfcs",
    "/implement-rfc",
    "/review-rfc",
    "/verify-prd",
    "/new-mp-feature",
    "/workflow-status",
  ],
  addons: ["MpKit", "FsmKit"],
} as const;

export const CASE_STUDY = {
  year: "2026",
  tags: ["Godot 4", "Web export", "AI agents", "SDD"],
  links: [
    { type: "play", href: "https://sacrifice-godot-web.vercel.app/play" },
    { type: "repo", href: LAB_REPOS.sacrifice },
  ],
} as const;

export const LAB_TOOLS = [
  {
    id: "studioPlaytest",
    year: "2026",
    tags: ["Godot 4", "CLI", "AI agents"],
    links: [{ type: "repo", href: "https://github.com/Joelnicolass/godot-studio-playtest" }],
  },
  {
    id: "relay",
    year: "2026",
    tags: ["Node.js", "WebSocket", "Multiplayer"],
    links: [{ type: "repo", href: "https://github.com/Joelnicolass/relay-godot" }],
  },
] as const;

export const LAB_ENGINES = ["Godot 4", "Unreal Engine", "GDScript", "GDShader", "Multiplayer", "Web export"] as const;

export const PARAGRAPH_SEPARATOR = "\n";

export const TESTIMONIALS = [
  { id: "bertalot", linkedin: "https://www.linkedin.com/in/joel-nicolas-sartori/details/recommendations/" },
  { id: "gonzalez", linkedin: "https://www.linkedin.com/in/joel-nicolas-sartori/details/recommendations/" },
  { id: "martinez", linkedin: "https://www.linkedin.com/in/joel-nicolas-sartori/details/recommendations/" },
] as const;

export const EXPERIENCE = [
  {
    id: "itti",
    start: "2025-08",
    end: null,
    roles: [
      { id: "aiEngineer", start: "2026-07", end: null },
      { id: "senior", start: "2025-08", end: "2026-07" },
    ],
    tech: [
      "React Native",
      "Flutter",
      "Next.js",
      "TypeScript",
      "Go",
      "NestJS",
      "Java",
      "Micro-frontends",
      "BFF",
      "Kong",
      "New Relic",
      "Amplitude",
      "SonarQube",
      "Checkmarx",
      "Python",
    ],
  },
  {
    id: "ppi",
    start: "2024-03",
    end: "2025-08",
    roles: [{ id: "senior", start: "2024-03", end: "2025-08" }],
    tech: ["Next.js", "React Native", "TypeScript", "Amplitude"],
  },
  {
    id: "asap",
    start: "2022-03",
    end: "2024-03",
    roles: [
      { id: "lead", start: "2023-04", end: "2024-03" },
      { id: "engineer", start: "2022-03", end: "2023-04" },
    ],
    tech: [
      "Angular",
      "React Native",
      "React",
      "Flutter",
      "Redux",
      "Node.js",
      "AWS",
      "Docker",
      "Kotlin",
      "TDD",
      "DDD",
    ],
  },
  {
    id: "xside",
    start: "2023-02",
    end: "2023-07",
    roles: [{ id: "ssr", start: "2023-02", end: "2023-07" }],
    tech: ["React Native", "React", "Cypress", "Swift"],
  },
  {
    id: "faniot",
    start: "2021-04",
    end: "2022-03",
    roles: [{ id: "fullstack", start: "2021-04", end: "2022-03" }],
    tech: ["Flutter", "React Native", "Node.js", "MongoDB", "IoT"],
  },
  {
    id: "estandarq",
    start: "2018-03",
    end: "2020-07",
    roles: [{ id: "fullstack", start: "2018-03", end: "2020-07" }],
    tech: ["React", "Node.js", "WordPress", "3D"],
  },
] as const;

export const DEFAULT_OPEN_EXPERIENCE = EXPERIENCE[0].id;

export const SKILL_GROUPS = [
  {
    id: "mobile",
    items: [
      "React Native",
      "Expo",
      "EAS",
      "Expo Router",
      "Reanimated",
      "Flutter",
      "Dart",
      "Kotlin",
      "Java",
    ],
  },
  {
    id: "frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Micro-frontends",
    ],
  },
  { id: "ai", items: ["SDD", "Cursor", "Python"] },
  {
    id: "backend",
    items: ["Node.js", "NestJS", "Express", "Go", "Java", "BFF", "MongoDB", "SQL", "AWS", "Docker", "Kong"],
  },
  {
    id: "architecture",
    items: [
      "Clean",
      "Hexagonal",
      "Vertical Slice",
      "DDD",
      "MVVM",
      "VIPER",
      "BLoC",
      "Micro-apps",
      "TDD",
      "Jest",
      "React Native Testing Library",
      "Cypress",
      "SonarQube",
      "Checkmarx",
      "New Relic",
    ],
  },
  { id: "leadership", items: ["Scrum", "Kanban"] },
] as const;

export const MARQUEE_ITEMS = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Flutter",
  "AI Agents",
  "Micro-frontends",
  "Spec-Driven Development",
  "TDD",
  "Go",
  "NestJS",
  "Clean Architecture",
] as const;

export const EDUCATION = [
  { id: "psychology", start: "2011-03", end: "2020-12" },
  { id: "systems", start: "2023-01", end: "2026-12" },
  { id: "practice", start: "2018-04", end: "2018-11" },
] as const;

export const TEACHING = [
  { id: "gcba", start: "2022-03", end: "2024-03", years: null },
  { id: "workshops", start: null, end: null, years: { start: "2022", end: "2023" } },
] as const;

export const CERTIFICATIONS = [
  { id: "utnFullstack", date: "2021-08" },
  { id: "uxui", date: "2021-12" },
  { id: "utnWeb", date: "2020-12" },
  { id: "english", date: "2020-11" },
] as const;
