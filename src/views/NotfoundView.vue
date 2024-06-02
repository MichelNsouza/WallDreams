<template>
  <div class="not-found">
    <h2>Página não encontrada</h2>
    <p>A página que você está procurando não foi encontrada.</p>
    <router-link to="/">Voltar para o início</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>