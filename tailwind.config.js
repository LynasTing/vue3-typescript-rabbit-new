/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  // 此项配置将指定所有的pages和components文件, 对生成环境中未使用到的样式进行tree-shaking
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
}

