# CLAUDE.md

Guidance for working in this repository.

## What this is

A personal portfolio website built with **Astro** and deployed to **GitHub Pages**.
It is a *user Pages site* — the repo is named `<username>.github.io`, so it publishes at
the account's root domain (`https://rl-charles.github.io/`).

It is intentionally small and content-light. Aesthetic is **refined dark-tech** (deep-space
base, cyan/amber accents, monospace labels, a canvas starfield hero). Keep changes minimal
and dependency-light — prefer plain CSS/Canvas over adding heavy libraries or React unless a
feature genuinely needs interactivity.

> Migrated from Jekyll in 2026. If you find references to `_config.yml`, `Gemfile`, or
> `jekyll-theme-cayman`, they are stale.

## Tech stack

- **Astro 5** (static output). No UI framework — pages are `.astro` + Markdown.
- **Content collections** (`src/content.config.ts`) using the `glob` loader — replaces the
  old Jekyll `projects` collection. Two collections: `projects` and `experience`.
- Styling: one global stylesheet (`src/styles/global.css`) defining CSS variables + a small
  set of component classes (`.card`, `.chip`, `.btn`, `.prose`, `.reveal`). Per-page tweaks
  live in scoped `<style>` blocks inside the `.astro` files.
- Fonts: Inter + JetBrains Mono from Google Fonts (loaded in `Base.astro`).

## Layout

| Path | Purpose |
|------|---------|
| `src/pages/index.astro` | Home page — hero + starfield, then experience/project card grids pulled from the collections. |
| `src/pages/projects/[...slug].astro` | Renders each project from the `projects` collection at `/projects/<slug>/`. |
| `src/pages/experience/[...slug].astro` | Renders each experience entry at `/experience/<slug>/`. |
| `src/layouts/Base.astro` | HTML shell: `<head>`/SEO/OG tags, fonts, footer, and the scroll-reveal `IntersectionObserver` script. |
| `src/components/Starfield.astro` | Canvas starfield background (parallax, reduced-motion aware, pauses on hidden tab). |
| `src/components/Card.astro` | Summary card used in the home-page grids. |
| `src/content/projects/*.md` | Project content. Frontmatter is validated by the schema in `src/content.config.ts`. |
| `src/content/experience/*.md` | Work-experience content. |
| `src/styles/global.css` | Theme tokens + shared component classes. **Start here for styling.** |
| `public/assets/images`, `public/assets/gifs` | Static media, served at `/assets/...`. |
| `.github/workflows/deploy.yml` | Builds the site and deploys `dist/` to GitHub Pages on push to `main`. |

## Content model

Frontmatter is type-checked at build time (`src/content.config.ts`). To add a project, drop a
new file in `src/content/projects/`:

```markdown
---
title: My Project
subtitle: One-line description
tools: ["Rust", "WebGPU"]          # rendered as chips
image: /assets/images/foo.png       # card thumbnail + header (served from public/)
github_repo: https://github.com/RL-Charles/foo   # optional → "View on GitHub" button
order: 4                            # lower sorts first on the home page
---

Markdown body — headings, lists, code, images all render inside `.prose`.
```

The filename (minus `.md`) becomes the URL slug. `experience` works the same way with
`role`, `company`, and `logo` fields.

Conventions:
- Reference images as `/assets/...` (root-absolute). They live in `public/`. Do **not** use
  the old Jekyll `{{ site.baseurl }}` syntax — it no longer applies.
- Write plain Markdown — no wrapping `<div markdown="1">` blocks (that was a Jekyll/kramdown
  thing; Astro's Markdown does not re-parse Markdown inside raw HTML blocks).
- Internal links use `import.meta.env.BASE_URL` so they survive a base-path change. `BASE_URL`
  is `/` for this user Pages site.

## Local development

```bash
npm install          # first time
npm run dev          # dev server at http://localhost:4321
npm run build        # static build into dist/
npm run preview      # serve the built dist/ locally
npm run check        # astro type-check
```

## Deployment

Push to `main` → the `deploy.yml` Action runs `npm ci && npm run build` and publishes `dist/`
to GitHub Pages. **One-time setup:** in the repo, Settings → Pages → *Build and deployment*
→ Source = **GitHub Actions** (not "Deploy from a branch"). There is no Jekyll build anymore.

## Gotchas

- Repo name must stay `rl-charles.github.io` to remain a root user Pages site; if the GitHub
  account is ever renamed, rename the repo and update `site` in `astro.config.mjs`.
- `astro.config.mjs` `base` is `/`. If this becomes a *project* page, set `base: '/<repo>'`
  — the `BASE_URL`-aware links and asset paths will follow automatically.
- The starfield and scroll-reveal both honor `prefers-reduced-motion`; keep that contract when
  adding motion.
- `Date.now()`/`Math.random()` are fine in Astro app code (this note only applies to the
  Claude workflow runtime, not the site).
