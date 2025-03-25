import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 自定義路徑別名
  resolve: {
    alias: {
      "@": "/src", 
    },
  },
})
