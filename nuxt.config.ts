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
})
