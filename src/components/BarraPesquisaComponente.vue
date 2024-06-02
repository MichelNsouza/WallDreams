<template>
  <div class="containerMaior z-1">
    <nav class="navbar bg-body">
      <form class="container-fluid d-flex justify-content-center">
        <div class="input-group input-group-lg">
          <input type="text" v-model="buscarAtual" class="form-control" placeholder="O que você procura?"
            aria-label="Buscar" aria-describedby="basic-addon1">
          <button class="btn btn-success" @click.prevent="enviar">
            <img src="/src/assets/icons/lupaPesquisa.svg" alt="icone lupa">
          </button>
        </div>
      </form>
    </nav>
  </div>
</template>


<script>
import { pesquisaStore } from '@/stores/pesquisa';
export default {
  data() {
    return {
      buscarAtual: '',
    }
  },
  methods: {
    enviar() {
      const storePesquisa = pesquisaStore();
      storePesquisa.setPesquisa(this.buscarAtual);// aplicar tratamento no back toLowerCase().trim()
      this.$router.push({ name: 'buscar', query: { q: this.buscarAtual } });// aplicar tratamento no back toLowerCase().trim()
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
  background-color: #E8E8E8;
}

.btn img {
  width: 20px;
  height: 20px;
}

.btn-success {
  background-color: #78CB99;


}
</style>