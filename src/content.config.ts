// Collection de contenu « projects » : un fichier Markdown par projet.
// Doc : https://docs.astro.build/en/guides/content-collections/
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  // `image()` vérifie que l'image existe et la prépare pour <Image />
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      techs: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(image()).optional(),
      repo: z.url().optional(),
      order: z.number(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { projects };
