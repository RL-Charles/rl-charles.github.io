# rl-charles.github.io

Personal portfolio site — built with [Astro](https://astro.build) and deployed to GitHub Pages.

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
[CLAUDE.md](./CLAUDE.md) for the frontmatter schema and conventions.

> Note: this repo migrated from Jekyll to Astro. The site is a portfolio, not a major
> project — kept simple on purpose.
