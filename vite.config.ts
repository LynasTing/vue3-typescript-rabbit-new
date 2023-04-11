import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      // 使用style-resources-loader 自动导入项目中的scss变量和mixins
      scss: {
        additionalData: `
          @import "@/assets/styles/mixins.scss";
          @import "@/assets/styles/variables.scss";
        `
      }
    }
  },
  resolve: {
    // 配置"/src"路径的别名: "@"
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
