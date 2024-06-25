import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import lottie from "astro-integration-lottie";

export default defineConfig({
  site: "https://adrianmsc.github.io",
  base: "/msc-docs-starlight/",
  integrations: [
    starlight({
      title: "MSC",
      logo: {
        src: "./src/assets/msc-logo.svg",
      },
      // social: {
      //   github: "https://github.com/withastro/starlight",
      // },
      sidebar: [
        {
          label: "Start Here",
          autogenerate: {
            directory: "guides",
          },
        },
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
    react(),
    lottie(),
  ],
});
