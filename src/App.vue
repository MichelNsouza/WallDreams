<template>
  <div id="app">
    <HeaderComponente/>

    <main class="content">
      <router-view />
    </main>

    <FooterComponente/>
   


  </div>
</template>

<script>
import FooterComponente from './components/FooterComponente.vue';
import HeaderComponente from './components/HeaderComponente.vue';

export default {
  name: 'App',
  components:{
    FooterComponente,
    HeaderComponente
  },
  data() {
    return {
      buscarQuery: '',
      categoryQuery: '',
      

    };
  }
}
</script>

<style>

.content {
  min-height: calc(100vh - 100px);
}

</style>
