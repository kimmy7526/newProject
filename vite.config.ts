import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

//  Vite 项目的配置文件
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  }
})
