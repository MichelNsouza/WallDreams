<template>
  <div class="containerMaior">
    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid d-flex justify-content-center">
        <div class="input-group input-group-lg">
          <input type="text" v-model="buscarAtual" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="basic-addon1">
          <button class="btn btn-success" @click.prevent="enviar">
            <img src="/src/assets/icons/lupaPesquisa.svg">
          </button>
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
      storePesquisa.setPesquisa(this.buscarAtual.toLowerCase().trim());
      this.$router.push({ name: 'buscar', params: { query: this.buscarAtual.toLowerCase().trim()}});
    },
  }

  }
  </script>
  
  <style>
  .containerMaior {
    width: 100%;
  }
  .input-group {
    width: 100%;
    max-width: 600px; 
  }
  .form-control {
    flex: 1;
  }
  .btn img {
    width: 20px;
    height: 20px;
  }
</style>