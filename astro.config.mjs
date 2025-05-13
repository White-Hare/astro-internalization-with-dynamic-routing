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
  integrations: [
    vue(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});