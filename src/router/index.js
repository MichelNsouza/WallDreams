import { createRouter, createWebHistory } from 'vue-router';

import BuscarView from '@/views/BuscarView.vue';
import HomeView from '@/views/HomeView.vue';
import NotfoundView from '@/views/NotfoundView.vue';
import EnviarView from '@/views/EnviarView.vue';


const router = createRouter({   
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: BuscarView
    },
    {
      path: '/adm/criar',
      name: 'criarWpp',
      component: EnviarView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'não-encontrado',
      component: NotfoundView
    }
  ]
})

export default router
