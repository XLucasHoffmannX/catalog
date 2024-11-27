import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import sri from './vite-plugin-sri.js';
export default defineConfig({
    plugins: [react(), tsconfigPaths(), sri()],
    server: {
        open: '/',
        port: 4200
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    optimizeDeps: {
        include: ['react']
    }
});
