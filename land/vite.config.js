import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        suporte: resolve(__dirname, 'suporte.html'),
        curso: resolve(__dirname, 'curso.html'),
        comofunciona: resolve(__dirname, 'comofunciona.html'),
        sobre: resolve(__dirname, 'sobre.html'),
      },
    },
  },
})