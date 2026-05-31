# CLAUDE.md

Guidance for working in this repository.

## What this is

A personal portfolio website built with **Jekyll** and hosted on **GitHub Pages**.
It is a *user/organization Pages site* — the repo is named `<username>.github.io`,
so it publishes at the account's root domain (e.g. `https://<username>.github.io/`).

It is intentionally small and front-end-light. The owner works primarily in backend
and wants to keep the site simple — prefer minimal, dependency-free changes over
introducing build tooling, JS frameworks, or heavy CSS.

## Tech stack

- **Jekyll** via the `github-pages` gem (versions are pinned by GitHub Pages, see `Gemfile.lock`).
- Theme: **`jekyll-theme-cayman`** (remote theme styling lives in the gem, not in this repo).
- Plugins: `jekyll-feed`, `jekyll-seo-tag`.
- Content is **Markdown with embedded HTML/inline CSS** (the cards on the home page are
  hand-written HTML blocks inside `index.md`).

## Layout

| Path | Purpose |
|------|---------|
| `_config.yml` | Site config: title, URL, theme, plugins, the `projects` collection. |
| `index.md` | Home page. Hand-built HTML cards linking to experience + project pages. |
| `_layouts/default.html` | The only layout. Wraps every page; defines the header buttons (Back to Portfolio, LinkedIn) and the footer (contact info). |
| `index.css` | Small global overrides (also duplicated in `assets/css/custom.css`). |
| `assets/css/custom.css` | Theme overrides actually loaded by `default.html`. **Edit this one** for styling. |
| `experience/*.md` | Work-experience detail pages (e.g. `hp_poly.md`). |
| `projects/*.md` | The `projects` collection. Each has front matter (`title`, optional `github_repo`) and permalinks to `/projects/:path/`. |
| `assets/images`, `assets/gifs` | Media used by the cards and detail pages. |

## Conventions

- **Detail pages** use `layout: default` and wrap body content in
  `<div class="experience-box" markdown="1"> … </div>` so Markdown still renders inside the HTML.
- **Images** are referenced with `{{ site.baseurl }}/assets/...` — keep using `site.baseurl`
  so links survive a base-path change.
- **Internal navigation** currently uses **root-absolute paths** (`/`, `/projects/foo`,
  `/experience/bar`). These only work while the site is served from the domain root
  (a user Pages site). If this ever becomes a *project* page (served under a subpath),
  every such link must be prefixed with `{{ site.baseurl }}` and `baseurl` set accordingly.
- New project cards: copy an existing `.experience-box` block in `index.md` and add a
  matching `projects/<name>.md`.
- `assets/css/custom.css` is the stylesheet linked by the layout; `index.css` at the repo
  root is **not** linked and is effectively dead — consolidate into `custom.css` if touched.

## Local development

```bash
bundle install            # first time
bundle exec jekyll serve  # serves at http://localhost:4000
```

Build output goes to `_site/` (git-ignored). GitHub builds and deploys automatically on
push to the default branch — there is no separate CI.

## Gotchas

- The Cayman theme's own CSS comes from the gem; you can only override it via
  `assets/css/custom.css` (note the `!important` overrides already there).
- `_config.yml` changes require a server restart locally; they do NOT hot-reload.
- The site URL, `github_username`, and any `github_repo:` front-matter links must match
  the current GitHub account name — see the rename note below.

## Repo / account name

The GitHub account was renamed `charles-mowbray` → `RL-Charles`. For a user Pages site
the repository **must** be named `<username>.github.io`. If the account is `rl-charles`,
the repo must be `rl-charles.github.io` to publish at `https://rl-charles.github.io/`.
Keep `_config.yml` `url`/`github_username` and the git remote in sync with the account name.
