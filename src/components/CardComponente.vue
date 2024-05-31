<template>
  
  <div class="card m-auto h-100 col fundo" @click="abrirModal()">
  <div class="img-container">
    <img :src="'http://ec2-18-229-159-118.sa-east-1.compute.amazonaws.com/api/'+card.url"
    class="card-img-top rounded img-fluid tamanho" alt="...">
  </div>
    <div class="card-body py-1 px-3 d-flex justify-content-between flex-column"> 
      <p class="card-text pb-0"><strong>{{card.title}}</strong></p>
      <div class="d-flex flex-row">
      <p> 4k | Full HD | HD </p> <img class="ms-5"  src="/src/assets/icons/icone-download.svg" alt=""> 
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
      abrirModal(card){
        //this.fetchCategoria(card.category_id);
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
  .fundo {background-color: var(--headerColor);
    padding: 0; 
    margin: 0;
    max-width: 345px; 
    max-height: 305px;
    color:white;
  }; 
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    overflow: hidden;
  }
  
  .tamanho {
    width: auto;
    height: 100%;
    object-fit: cover;  
  };
  
  .card {
    overflow: hidden;
    color:white;
  }

  </style> 