import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // Project root
  publicDir: 'public', // Static assets folder
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html'), // Explicit entry point
    },
  },
});