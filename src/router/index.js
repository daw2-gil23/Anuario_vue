import { createRouter, createWebHistory } from 'vue-router'
import Anuario from '../views/Anuario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Anuario',
      component: Anuario
    },
    {
      path: '/card/:id',
      name: 'card',
      component: Anuario
    }
  ]
})

export default router
