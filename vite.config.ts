import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
  },
  build: {
    target: 'es2022',
    assetsInlineLimit: 0,
    // The bundle is mostly course text in three languages; one chunk keeps every screen offline-ready.
    chunkSizeWarningLimit: 700,
  },
});
