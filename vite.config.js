import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Ensure this points to the folder containing `index.html`
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
});
