# rl-charles.github.io

Personal portfolio site: built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build & preview

```bash
npm run build      # → dist/
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. Set **Settings → Pages → Source = GitHub Actions** once.

## Adding content

Drop a Markdown file in `src/content/projects/` or `src/content/experience/`. See
[AGENTS.md](./AGENTS.md) for repository conventions and `src/content.config.ts` for the
frontmatter schema.

> This portfolio migrated from Jekyll to Astro. Its structure stays simple on purpose.
