/**
 * Global type declarations for Ruin Game
 */

// Vite environment variables
declare const __DEV__: boolean;
declare const __PROD__: boolean;

// Global window interface extensions
declare global {
  interface Window {
    GAME_DEBUG?: boolean;
  }
}

// Node.js process environment
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production' | 'test';
    [key: string]: string | undefined;
  }
}

export {};
