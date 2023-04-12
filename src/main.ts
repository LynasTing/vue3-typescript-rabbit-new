import { createApp } from 'vue'
// normalize.css 是一个css包, 会重置不常用的样式, 抹平各浏览器之间的差异
import 'normalize.css'
// 导入tailwind css
import './index.css'
import router from './router'
import { store } from './store'
import App from './App.vue'
const app = createApp(App)
app.use(router).use(store).mount('#app')