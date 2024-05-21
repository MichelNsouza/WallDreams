<template>
  <div class="col" @click="mudaModal">
      <div class="card h-100">
          <img :src="card.url" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text">{{card.description}}</p>
          <h5 class="card-title">{{card.title}}</h5>
          </div>
      </div>
  </div>


  <template v-if="exibeModal"> 
  
  <ModalComponente :nome-categoria="nomeCategoria"  :titulo-modal="tituloModal" @fechar-modal = "fecharModal"  />

 </template>  

  </template>
  
  <script>
import ModalComponente from '@/components/ModalComponente.vue';

  export default {
    name: 'CardComponente',
    components: {
      ModalComponente
  },
  data(){
    
    return {
      exibeModal: false,
      tituloModal: '',
      nomeCategoria: ''
    }
  },
    props:{
      card: {
        type: Object,
      },
    },
    methods: {
      mudaModal(){
        this.exibeModal = !this.exibeModal;
        this.tituloModal = this.card.title;
        this.nomeCategoria = this.card.category_id;
        
      },
      fecharModal(){
        this.mudaModal();
    }
    
    }
  }
  </script>
  
  <style scoped>
  
  </style>