// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig(async () => ({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
    clearScreen: false,
    server: {
        port: 3000,
        strictPort: true,
        watch: {
            ignored: ['**/src-tauri/**'],
        },
    },
}));
