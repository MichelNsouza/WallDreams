import { createRouter, createWebHistory } from 'vue-router';

import BuscarView from '@/views/BuscarView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';


const router = createRouter({   
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {

      path: '/buscar/:query',
      name: 'buscar',
      component: BuscarView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'não-encontrado',
      component: NotFoundView
    }
  ]
})

export default router
