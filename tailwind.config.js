/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  // 此项配置将指定所有的pages和components文件, 对生成环境中未使用到的样式进行tree-shaking
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 将自定义内容卸载extend里面, 可以保留tailwind默认扩展
      colors: {
        cd: '#cdcdcd',
        666: '#666'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'dark-gray': '#333'
      }),
      borderColor: theme => ({
        ...theme('colors'),
        '666': '#666',
        'e7': '#e7e7e7'
      })
    },
  },
  plugins: [],
}

