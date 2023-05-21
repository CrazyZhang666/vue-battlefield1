import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [vue()],
    build: {
        outDir: "dist"
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        cors: true,
        proxy: {
            "/gateway": {
                target: "https://gateway.p.2788.pro/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/gateway/, "")
            },
            "/blaze": {
                target: "https://blaze.2788.pro/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/blaze/, "")
            }
        }
    }
})
