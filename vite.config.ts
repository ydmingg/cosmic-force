import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 
export default defineConfig({
    plugins: [vue()],
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
