<script>
import MeuComponente from '../components/MeuComponente.vue'

export default {
  components: {
    MeuComponente
  }
}
</script>

<template>
  <div class="primeira-pagina">
    <h1>Esta é a Home!</h1>
    <MeuComponente />
  </div>
</template>

<style scoped>
.primeira-pagina {
  text-align: center;
  color: #2c3e50;
}
</style>
