import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/core': resolve(__dirname, './src/core'),
      '@/game': resolve(__dirname, './src/game'),
      '@/modules': resolve(__dirname, './src/modules'),
      '@/shared': resolve(__dirname, './src/shared'),
      '@/assets': resolve(__dirname, './public/assets'),
    },
  },
});
