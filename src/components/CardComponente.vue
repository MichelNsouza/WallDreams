<template>
  <div class="col" @click="abrirModal">
      <div class="card h-100">
          <img :src="card.url" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text">{{card.description}}</p>
          <h5 class="card-title">{{card.title}}</h5>
          </div>
      </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponente',
    props:{
      card: {
        type: Object,
      },
    },
    methods: {
      abrirModal(){
        this.$emit('card-clicado');
      }
    
    }
  }
  </script>
  
  <style scoped>
  
  </style>