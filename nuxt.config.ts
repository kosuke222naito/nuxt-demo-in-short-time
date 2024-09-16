import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    }
  },
  css: ["@/assets/styles/main.scss"],
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()],
      })
    ]
  }
})
