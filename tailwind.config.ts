import { join } from "path";
import type { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";
import { deepOcean } from "./deepOcean";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve("@skeletonlabs/skeleton"), "src/**/*.{html,js,svelte,ts}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
        custom: [deepOcean],
      },
    }),
  ],
} satisfies Config;
