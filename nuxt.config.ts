// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'AHNI QR Generator',
      link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }],
      meta: [
        {
          name: 'description',
          content: 'QR code generator app made for the TUBITAK competition.',
        },
        { property: 'og:url', content: 'https://ahni-qrgenerator.vercel.app' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'AHNI QR Generator' },
        {
          property: 'og:description',
          content: 'QR code generator app made for the TUBITAK competition.',
        },
        {
          property: 'og:image',
          content: 'https://ahni-qrgenerator.vercel.app/logo.png',
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'ahni-qrgenerator.vercel.app' },
        {
          property: 'twitter:url',
          content: 'https://ahni-qrgenerator.vercel.app',
        },
        { property: 'twitter:title', content: 'AHNI QR Generator' },
        {
          property: 'twitter:description',
          content: 'QR code generator app made for the TUBITAK competition.',
        },
        {
          property: 'twitter:image',
          content: 'https://ahni-qrgenerator.vercel.app/logo.png',
        },
      ],
    },
  },
});
