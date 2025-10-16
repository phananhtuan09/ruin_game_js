import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Define alias paths for @ symbol
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

  // Server configuration
  server: {
    port: 5173,
    host: true,
    open: true,
  },

  // Build configuration
  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    
    // Optimize bundle splitting for game assets
    rollupOptions: {
      output: {
        manualChunks: {
          // External libraries
          vendor: ['pixi.js', '@pixi/sound'],
        },
      },
    },

    // Asset handling
    assetsDir: 'assets',
    assetsInlineLimit: 4096, // 4kb
  },

  // Development optimizations
  optimizeDeps: {
    include: ['pixi.js', '@pixi/sound'],
  },

  // Plugin configuration (can be extended)
  plugins: [],

  // Define global constants
  define: {
    __DEV__: JSON.stringify(process.env['NODE_ENV'] === 'development'),
    __PROD__: JSON.stringify(process.env['NODE_ENV'] === 'production'),
  },

  // CSS configuration
  css: {
    devSourcemap: true,
  },

  // Public directory
  publicDir: 'public',
});