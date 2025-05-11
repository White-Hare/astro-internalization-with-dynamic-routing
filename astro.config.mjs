import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    fallback: {
      en: "tr"
    },
    routing: "manual"
  },
  routing: {
    prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    redirectToDefaultLocale: true,
  },
  integrations: [
    vue(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});