<template>
  <div class="col" @click="abrirModal">
      <div class="card h-100">
          <img :src="'http://ec2-18-229-159-118.sa-east-1.compute.amazonaws.com/api/'+card.url" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text">{{card.description}}</p>
          <h5 class="card-title">{{card.title}}</h5>
          </div>
      </div>
  </div>


  <template v-if="exibeModal"> 
  
  <ModalComponente :card="card" @fechar-modal = "fecharModal"  />

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
    }
  },
    props:{
      card: {
        type: Object,
      },
    },
    methods: {
      abrirModal(){
        
        this.exibeModal = true;
      },
      fecharModal(){
        this.exibeModal = false;
    }
    }
  }
  
  </script>
  
  <style scoped>
  
  </style>