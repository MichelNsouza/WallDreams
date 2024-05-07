import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
import PesquisaView from '../views/PesquisaView.vue'
import CardEmail from '../views/CardEmail.vue' 

// import TodosView from '../views/TodosView.vue'
// import PaisagensView from '../views/PaisagensView.vue'
// import AbstratoView from '../views/AbstratoView.vue'
// import AnimaisView from '../views/AnimaisView.vue'
// import VeiculosView from '../views/VeiculosView.vue'
// import OutrosView from '../views/OutrosView.vue'
// import Erro404View from '../views/Erro404View.vue'
=======
import BuscarView from '@/views/BuscarView.vue'
import HomeView from '@/views/HomeView.vue'
import Notfound from '@/views/Notfound.vue'

>>>>>>> develop

const router = createRouter({   
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'home',
      component: HomeView
    },
    {
<<<<<<< HEAD
      path: '/pesquisa',
      name: 'pesquisa',
      component: PesquisaView
    },  
    // {
    //   path: '/todos',
    //   name: 'todos',
    //   component: TodosView
    // },
    // {
    //   path: '/paisagens',
    //   name: 'paisagens',
    //   component: PaisagensView
    // },
    // {
    //   path: '/abstrato',
    //   name: 'abstrato',
    //   component: AbstratoView
    // },
    // {
    //   path: '/animais',
    //   name: 'animais',
    //   component: AnimaisView
    // },
    // {
    //   path: '/veiculos',
    //   name: 'veiculos',
    //   component: VeiculosView
    // },
    // {
    //   path: '/outros',
    //   name: 'outros',
    //   component: OutrosView
    // },
    // {
    //   path: '/erro404',
    //   name: 'erro404',
    //   component: Erro404View
    // }
=======
      path: '/buscar',
      name: 'buscar',
      component: BuscarView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'não-encontrado',
      component: Notfound
    }
>>>>>>> develop
  ]
})

export default router
