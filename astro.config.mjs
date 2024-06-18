import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Home",
      // social: {
      //   github: "https://github.com/withastro/starlight",
      // },
      sidebar: [
        {
          label: "Foundations",
          autogenerate: {
            directory: "foundations",
          },
        },
        {
          label: "Components",
          autogenerate: {
            directory: "components",
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      expressiveCode: {
        themes: ["github-dark"],
      },
    }),
    tailwind(),
  ],
});
