import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compression from 'vite-plugin-compression';

// 
export default defineConfig({
    plugins: [
        vue(),
        compression({
            algorithm: "brotliCompress",
            ext: ".br",
            threshold: 1024 * 600,
            // verbose: true,
        })
    ],
    build: {
        chunkSizeWarningLimit: 1000, // 根据需要调整警告限制
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    css: {
        preprocessorOptions: {
          scss: { api: 'modern-compiler' },
        }
    },
    server: {
        port: 3001,
        host: '0.0.0.0',
    }
})
