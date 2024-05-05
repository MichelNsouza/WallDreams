<template>

    <HeaderComponente/>

    <main class="content"> <router-view /> </main>

    <FooterComponente/>
    
</template>

<script>
import FooterComponente from '@/components/FooterComponente.vue';
import HeaderComponente from '@/components/HeaderComponente.vue';

export default {
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
