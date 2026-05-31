import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects collection — replaces the Jekyll `projects` collection.
// Each file lives in src/content/projects/<slug>.md and is rendered at /projects/<slug>/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    tools: z.array(z.string()).default([]),
    image: z.string().optional(),
    github_repo: z.string().url().optional(),
    // Lower numbers sort first on the home page.
    order: z.number().default(99),
  }),
});

// Work-experience collection — rendered at /experience/<slug>/.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    logo: z.string().optional(),
    image: z.string().optional(),
    tools: z.array(z.string()).default([]),
    // Categorized skills, rendered as a grid on the detail page.
    skills: z
      .array(z.object({ group: z.string(), items: z.array(z.string()) }))
      .optional(),
    // Hero image for the detail page (distinct from `image`, the home-card thumbnail).
    lead_image: z.string().optional(),
    lead_image_alt: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects, experience };
