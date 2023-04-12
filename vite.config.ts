import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 借助vite-plugin-vue-setup-extend 插件可以直接在vite项目中的script标签上定义name (默认情况下在vite中是不允许的)
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import path from 'path'
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  server: {
    // 端口号
    port: 8964,
    // 开发环境运行时自动打开默认浏览器
    open: true,
    // 配置本地代理地址
    // proxy: { 
    //   '/dev': 'http://xxx.xxx.com/api'
    // }
  },
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
