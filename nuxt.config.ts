// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'normalize.css/normalize.css',
    'remixicon/fonts/remixicon.css',
    '@/assets/main.css',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
    },
  },
});
