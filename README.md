# FIKA | Pop-Up Shows & Event Experiences

Production frontend for the FIKA Pop-Up Show landing page — a single-page marketing site for curated lifestyle pop-up exhibitions.

## Stack

- TanStack Start + TanStack Router
- React 19 + TypeScript
- Tailwind CSS v4
- Motion (animations)
- Vite 8 / Bun

## Getting started

```sh
bun install
bun run dev
```

Or with npm:

```sh
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Development server |
| `bun run build` | Production build |
| `bun run preview` | Preview production build |
| `bun run lint` | ESLint |
| `bun run test` | Vitest |

## Configuration

Edit **`src/config/site-config.ts`** for:

- Event date, venue, city
- Contact email, phone, address
- Instagram / Facebook URLs
- **Book Your Stall** Google Form URL (`BOOK_STALL_FORM_URL`)
- **Become a Partner** Google Form URL (`PARTNER_FORM_URL`)
- Exhibitors / Partnerships card copy and CTAs
- Navigation labels

SEO metadata lives in **`src/config/seo-config.ts`**.

Copy `.env.example` to `.env` when a backend API base URL or canonical site URL is available.

## Project structure

```
src/
  assets/images|logos   # Local media (no Lovable CDN)
  components/
    common/             # Reveal, Pinwheel
    layout/             # Header, Footer
    sections/           # Landing page sections
    ui/                 # shadcn scaffold (retained for future use)
  config/               # Site, SEO, API config
  constants/            # Categories, gallery
  services/api/         # Future API helpers (unused until backend exists)
  types/                # API / form types
  routes/               # TanStack file routes
```

## Conversion flows

Stall booking and partnership applications open **external Google Forms**. There are no on-page duplicate forms or fake backends.

## Notes

- Visual design must remain unchanged when editing content.
- Unused shadcn UI components are intentionally kept for a later cleanup phase.
