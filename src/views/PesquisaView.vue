<script>
import MeuComponente2 from '../components/MeuComponente2.vue'

export default {
  components: {
    MeuComponente2
  }
}
</script>

<template>
  <div class="pesquisa-pagina">
    <h1>Esta é a Pesquisa!</h1>
    <MeuComponente2 />
  </div>
</template>

<style scoped>
.pesquisa-pagina {
  background-color: white;
  text-align: center;
  color: #2c3e50;
}
</style>
