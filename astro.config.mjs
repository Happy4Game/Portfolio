// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Le site est publié sur GitHub Pages, dans le sous-dossier /Portfolio :
  // https://docs.astro.build/en/guides/deploy/github/#configure-astro-for-github-pages
  site: "https://happy4game.github.io",
  base: "/Portfolio",
});
