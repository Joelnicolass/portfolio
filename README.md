# Joel Nicolás Sartori — Portfolio

**Live:** https://joelsartori.vercel.app

Personal portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Motion** (Framer Motion), **Lenis** smooth scroll and **next-intl** (ES / EN).

```bash
npm install
npm run dev     # http://localhost:3000 → redirects to /es or /en
npm run build
```

Pushes to `main` deploy automatically on Vercel. `NEXT_PUBLIC_SITE_URL` is set as a production environment variable so metadata and `hreflang` alternates use the real domain.

## Architecture

```
messages/            es.json / en.json — every user-facing string lives here
src/
  app/[locale]/      layout (i18n provider, fonts, metadata) + page (composes sections)
  i18n/              next-intl routing, request config and typed navigation
  proxy.ts           locale detection / redirect (Next 16 "proxy", formerly middleware)
  constants/         data & config: content (projects, experience, skills…), motion, site, sections
  hooks/             all logic
    sections/        one view-model hook per section (constants + translations → props)
    use-*.ts         reusable behaviour hooks (magnetic, count-up, parallax, accordion, clock…)
  components/
    ui/              pure, reusable presentational components (props in → JSX out)
    sections/        thin containers: call a section hook, render ui components
    providers/       smooth scroll
  lib/               small pure helpers (cn, dates, motion presets, fonts)
```

### Rules followed

- **No literals in components** — copy comes from `messages/*`, data and config from `src/constants/*`.
- **No logic in components** — sections call one hook and pass props down; UI components are pure.
- **Typed i18n** — `src/types/next-intl.d.ts` types locales and message keys, so a missing key fails `tsc`.
- **Locale-aware formatting** — dates (`Aug 2025 — Present` / `ago 2025 — Actualidad`), numbers and the local clock use next-intl's formatter.
- **Accessibility** — skip link, `aria-expanded` accordions and menu, reduced-motion support, semantic landmarks.

## Editing content

- Add a project → append to `PROJECTS` in `src/constants/content.ts` and add `work.items.<id>` to both message files.
- Add a job → append to `EXPERIENCE` and add `experience.items.<id>` (company, location, summary, roles, highlights).
- Replace the CV → overwrite `public/cv/joel-nicolas-sartori-cv.pdf`.
