import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
});
