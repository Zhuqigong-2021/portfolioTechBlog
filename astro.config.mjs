import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypeHighlight from "rehype-highlight";
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    rehypePlugins: [
      [
        rehypeHighlight,

        {
          /* Customization options for rehype-highlight */
        },
      ],
      function addCustomCSS() {
        return function (tree) {
          // Add custom CSS for code blocks
          tree.children.forEach((node) => {
            if (node.type === "element" && node.tagName === "code") {
              node.properties.className = "custom-code";
            }
          });
        };
      },
    ],
  },
});
