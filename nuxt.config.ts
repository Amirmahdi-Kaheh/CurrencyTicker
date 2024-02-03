// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },

    head: {
      title: process.env.APP_TITLE,
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, user-scalable=no",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        {
          hid: "description",
          name: "description",
          content: process.env.APP_DESCRIPTION,
        },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      downloadBaseUrl: process.env.DOWNLOAD_BASE_URL
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
