<template>
  <div id="app">

    <header>
      <nav class="navbar navbar-expand-lg">
        <router-link to="/">Ir para a Primeira Página</router-link>
        <router-link to="/pesquisa">Ir para a Segunda Página</router-link>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>

    <footer class="">
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

/* estilo temporario */
header{
  background-color: #4EB577;
  color: white;
  height: 50px;
}

.content {
  min-height: calc(100vh - 100px);
}

footer {
  height: 50px;
  background-color: red;
  color: #fff;
  padding: 20px 0;
}

</style>
