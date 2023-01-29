import { createRouter, createWebHistory } from 'vue-router'
import AlumnosView from '../views/AlumnosView.vue'
import ProfesoresView from '../views/ProfesoresView.vue'
import TheMain from '../components/TheMain.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: TheMain
    },
    {
      path: '/alumnos/:id',
      name: 'alumnos',
      component: AlumnosView
    },
    {
      path: '/profesores/:id',
      name: 'profesores',
      component: ProfesoresView
    }
  ]
})

export default router
