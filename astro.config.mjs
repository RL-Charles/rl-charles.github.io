// @ts-check
import { defineConfig } from 'astro/config';

// User Pages site: served at the domain root, so `base` stays "/".
// If this ever becomes a project page, set `base: '/<repo>'` and the
// BASE_URL-aware links below will follow automatically.
export default defineConfig({
  site: 'https://rl-charles.github.io',
  base: '/',
});
