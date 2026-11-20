import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/teamzono/' : '/',
    assetsInclude: [
      '**/*.HEIC',
      '**/*.heic',
      '**/*.MOV',
      '**/*.mov'
    ],
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          hashCharacters: 'hex',
          assetFileNames: asset => {
            const name = asset.names[0] ?? 'asset';
            const extension = path.extname(name);
            const stem = path.basename(name, extension).toLowerCase();
            return `assets/${stem}-[hash][extname]`.replace('[extname]', extension.toLowerCase());
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
