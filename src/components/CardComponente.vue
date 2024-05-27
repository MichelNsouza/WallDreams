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
  
  <ModalComponente :card="card" :categories="categories" @fechar-modal = "fecharModal"  />

 </template>  

  </template>
  
  <script>
import ModalComponente from '@/components/ModalComponente.vue';
import axios from 'axios';

  export default {
    name: 'CardComponente',
    components: {
      ModalComponente
  },
  data(){
    return {
      exibeModal: false,
      categories: [],
    }
  },
    props:{
      card: {
        type: Object,
        required: true,

      },
    },
    methods: {
      abrirModal(){
        this.fetchCategoria(card.category_id);
        this.exibeModal = true;
      },
      fecharModal(){
        this.exibeModal = false;
    },
    async fetchCategories() {
      try {
        const response = await axios.get('http://ec2-18-229-159-118.sa-east-1.compute.amazonaws.com/api/walldreams/category/');
        this.categories = response.data;
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }
    },
    mounted() {
    this.fetchCategories();
  }

  };
  
  </script>
  
  <style scoped>
  
  </style>