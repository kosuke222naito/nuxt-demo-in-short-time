import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,

  vite: {
    plugins: [Components({ resolvers: [NaiveUiResolver()] })],
  },

  compatibilityDate: "2024-07-23",
});