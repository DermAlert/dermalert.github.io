// vite.config.js no novo projeto (já integrado ao MkDocs)
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
})