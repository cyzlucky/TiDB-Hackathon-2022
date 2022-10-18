import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from "vite-plugin-svgr";

export default defineConfig(async ({command}) => {
  const src = resolve(__dirname, 'src');
  const isProduction = command === 'build';

  return {
    resolve: {
      alias: {
        '@': src,
      },
    },
    define: {
      __IS_PROD__: isProduction,
    },
    plugins: [svgr(), react()],
    build: {
      outDir: `dist/`,
      target: 'esnext',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
          chunkFileNames: 'js/[name].[hash].js',
        },
      },
    },
  };
});
