# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run a production build
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

There is no test runner configured yet.

## Architecture

This is a Next.js App Router project (`app/` directory) in its initial scaffold state — currently just the
default `create-next-app` landing page plus a shadcn/ui component set. Key conventions already established:

- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/ui/button`, `@/lib/utils`.
- **UI components** (`components/ui/`) are shadcn/ui components generated with the `components.json` config
  (`style: base-nova`, `baseColor: neutral`). They build on **`@base-ui/react`** primitives (e.g.
  `@base-ui/react/button`), not Radix — import primitives from `@base-ui/react/*` when adding new shadcn
  components. Variants are defined with `class-variance-authority` (`cva`).
- **Class merging**: use the `cn` helper re-exported from `lib/utils.ts` (which itself re-exports the `cn`
  npm package) — do not add a local `clsx`/`tailwind-merge` implementation.
- **Styling**: Tailwind CSS v4, configured entirely in `app/globals.css` via `@import`/`@theme inline` (no
  `tailwind.config.*` file). Design tokens (colors, radii, sidebar/chart colors) are CSS variables defined
  under `:root` and `.dark`, sourced from the `shadcn/tailwind.css` base theme plus `tw-animate-css`.
- **Supabase**: `@supabase/ssr` and `@supabase/supabase-js` are installed as dependencies but there is no
  client setup yet (no `lib/supabase*` files). When adding Supabase, follow the `@supabase/ssr` App Router
  pattern (separate browser/server clients) rather than the plain `supabase-js` client directly in Server
  Components.
