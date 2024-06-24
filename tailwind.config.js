/** @type {import('tailwindcss').Config} */
import starlightPlugin from "@astrojs/starlight-tailwind";
const colors = require("./utilities/colors");

module.exports = {
  purge: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./fuel-react-components/**/*.{js,jsx,ts,tsx,html,mdx}",
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,mdx}",
    "./fuel-react-components/**/*.{js,jsx,ts,tsx,html,mdx}",
    "./components-playground/**/*.{js,jsx,ts,tsx,html,mdx}",
  ],
  theme: {
    extend: {
      colors,
      keyframes: {
        dotFlashing1: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dotFlashing2: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dotFlashing3: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        dotFlashing1: "dotFlashing1 2s infinite linear alternate",
        dotFlashing2: "dotFlashing2 2s infinite linear alternate 0.4s",
        dotFlashing3: "dotFlashing3 2s infinite linear alternate 0.6s",
      },
    },
  },
  plugins: [
    starlightPlugin(),
    require("./msc-components/global"),
    require("./msc-components/msc-buttons"),
    require("./msc-components/msc-icons"),
    require("./msc-components/msc-checkbox"),
    require("./msc-components/msc-dropdown"),
    require("./msc-components/msc-inputs"),
    require("./msc-components/msc-modals"),
    require("./msc-components/msc-radio"),
    require("./msc-components/msc-toggle"),
    require("./msc-components/msc-dividers"),
    require("./msc-components/msc-spinner"),
    require("./msc-components/msc-link"),
  ],
};
