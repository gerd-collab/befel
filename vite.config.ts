import { defineConfig, loadEnv } from 'vite';
import feedback from './api/feedback.js';

export default defineConfig(({ mode }) => {
  // Private feedback variables stay in the server process, never in Vite's client env.
  const env = loadEnv(mode, process.cwd(), 'FEEDBACK_');
  for (const [key, value] of Object.entries(env)) process.env[key] ??= value;
  return {
    plugins: [{
      name: 'feedback-api-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.split('?')[0] === '/api/feedback') {
            void feedback(req, res);
          } else next();
        });
      },
    }],
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
  };
});
