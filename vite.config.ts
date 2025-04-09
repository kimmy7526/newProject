import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

//  Vite 项目的配置文件
export default defineConfig({
  base: '/newProject/', // 用於 GitHub Pages 的子目錄配置
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  }
})
