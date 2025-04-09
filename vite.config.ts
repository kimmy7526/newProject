import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Vite 项目的配置文件
export default defineConfig({
  // 设置基础路径，部署到 GitHub Pages 的子路径
  base: '/vue3-project/',

  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
