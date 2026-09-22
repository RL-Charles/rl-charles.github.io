# Repository guidance

## Writing rules

- Use direct, affirmative sentences in agent replies, documentation, and portfolio copy.
- Rewrite single and double negations as positive statements. State the intended meaning directly.
- Express comparisons through the chosen point itself. For example, write "It is Y" when Y is the intended point.
- Replace every em dash (U+2014) in tracked text with punctuation that fits the sentence. Apply this to page copy, metadata, Markdown, comments, and guidance files.
- Check tracked text for U+2014 before finishing changes.

## Project

This is a personal portfolio built with Astro 5 and deployed to GitHub Pages at
`https://rl-charles.github.io/`. Keep the site small, fast, and easy to maintain.
The visual theme uses a deep space background, cyan and amber accents, monospace
labels, and a canvas backdrop.

- `src/pages/index.astro` renders the home page and content cards.
- `src/pages/projects/[...slug].astro` and `src/pages/experience/[...slug].astro`
  render entries from the corresponding content collections.
- `src/content.config.ts` defines their frontmatter schemas and sort order.
- `src/layouts/Base.astro` holds shared HTML, metadata, and motion behavior.
- `src/styles/global.css` holds shared styles and theme tokens.
- `public/assets/` holds images and GIFs, served from `/assets/`.
- `.github/workflows/deploy.yml` builds and publishes the site on pushes to `main`.

Use plain Astro, CSS, and Markdown for routine changes. Reference images through
`/assets/...`. Build internal links with `import.meta.env.BASE_URL`.

## Verification

Run `npm run build` after site or content changes. Run `npm run check` after
TypeScript or Astro logic changes. Check the final diff for whitespace issues.
