import { createRouter, createWebHashHistory } from "vue-router" 
import Layout from '@/views/layout/index.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout
    },
    {
      path: '/login',
      component: () => import('@/views/layout/login/index')
    }
  ]
})
export default router