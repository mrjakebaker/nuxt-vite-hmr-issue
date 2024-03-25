// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@pinia/nuxt'],

  i18n: {
    locales: [
      {
        name: 'Deutsch',
        code: 'de',
        iso: 'de-DE',
        file: 'de.json',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-GB',
        file: 'en.json',
      },
    ],
    lazy: true,
    langDir: './i18n/',
    defaultLocale: 'de',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    detectBrowserLanguage: {
      useCookie: false,
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  devtools: { enabled: false },
});
