// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gopal-kaul.is-a.dev',
  integrations: [
    react(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
