<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/teste">teste</RouterLink>
        <RouterLink to="/paisagens">Paisagens</RouterLink>
        <RouterLink to="/abstrato">Abstrato</RouterLink>
        <RouterLink to="/animais">Animais</RouterLink>
        <RouterLink to="/veiculos">Veiculos</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
  
  <footer>
    <p>
      Teste de footer
    </p>
  </footer>
</template>

<style scoped>

</style>
