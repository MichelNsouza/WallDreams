<template>
  <div id="app2">

    <HeaderComponente/>

    <main class="content"> <router-view /> </main>

    <FooterComponente/>
    
  </div>
</template>

<script>
import FooterComponente from './components/FooterComponente.vue';
import HeaderComponente from './components/HeaderComponente.vue';

export default {
  name: 'App2',
  components:{
    HeaderComponente,
    FooterComponente,
  },
  data() {
    return {
    };
  },
}
</script>

<style>

.content {
  min-height: calc(100vh - 100px);
}

</style>
