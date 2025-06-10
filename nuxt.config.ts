// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "QR Generator",
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
      meta: [
        {
          name: "description",
          content: "QR code generator app made for the TUBITAK competition.",
        },
        { property: "og:url", content: "https://qrgen.gwyndev.com" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "QR Generator" },
        {
          property: "og:description",
          content: "A customizable QR code generator app.",
        },
        {
          property: "og:image",
          content: "https://qrgen.gwyndev.com/logo.png",
        },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "qrgen.gwyndev.com" },
        {
          property: "twitter:url",
          content: "https://qrgen.gwyndev.com",
        },
        { property: "twitter:title", content: "QR Generator" },
        {
          property: "twitter:description",
          content: "A customizable QR code generator app.",
        },
        {
          property: "twitter:image",
          content: "https://qrgen.gwyndev.com/logo.png",
        },
      ],
    },
  },
});
