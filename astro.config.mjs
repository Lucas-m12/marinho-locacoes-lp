import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marinholocacoes.com',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14'],
    },
  },
  integrations: [sitemap()],
});
