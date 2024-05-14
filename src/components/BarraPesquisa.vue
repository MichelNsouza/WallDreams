<template>
    <div class="containerMaior">
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid d-flex justify-content-center">
          <div class="input-group">
            <input type="text" v-model="buscarAtual" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
            <button class="btn btn-outline-success" @click.prevent="enviar">Enviar</button>
          </div>
        </form>
      </nav>
    </div>
</template>
  
  
  <script>
  import { pesquisaStore } from '@/stores/pesquisa';
  export default {
    name: 'BarraPesquisa',
    
    data(){
      return{
        buscarAtual:'',
      }
    },
    methods: {
      enviar(){
      const storePesquisa = pesquisaStore();
      storePesquisa.setPesquisa(this.buscarAtual);
      this.$router.push({ name: 'buscar', params: { query: this.buscarAtual }});
    },
  }

  }
  </script>
  
  <style scoped>

  .containerMaior {

     justify-content: center;
     display: flex;
     align-items: center;
  }


  .form-control{

    width: 784px;

  }
   
  </style>