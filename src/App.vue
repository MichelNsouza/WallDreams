<template>
  <div id="app">

    <header>
      <nav>
        <router-link to="/">Ir para a Primeira Página</router-link>
        <router-link to="/pesquisa">Ir para a Segunda Página</router-link>
      </nav>
    </header>
        
    <router-view />

    <footer>
      Footer
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
