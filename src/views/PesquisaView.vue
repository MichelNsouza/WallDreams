<script>
import MeuComponente from '../components/MeuComponente.vue'

export default {
  components: {
    MeuComponente
  }
} 
</script>

<template>
  <div class="pesquisa-pagina">
    <h1>Esta é a Pesquisa!</h1>
    <p>testes</p>
    <MeuComponente/>
  </div>
</template>

<style scoped>
.pesquisa-pagina {
  background-color: white;
  text-align: center;
  color: #2c3e50;
}
</style>
