<template>
<div class="col">
    <div class="card h-100">
        <img :src="card.img" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">{{card.texto}}</p>
        <h5 class="card-title">{{card.nome}}</h5>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'CardComponente',
  props:{
    card: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>

</style>