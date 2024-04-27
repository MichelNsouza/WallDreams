<template>
  <div class="meu-componente">
    <svg
      version="1.1"
      baseProfile="full"
      width="300"
      height="200"
      xmlns="https://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="black" />
      <circle cx="150" cy="100" r="90" fill="blue" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MeuComponente'
}
</script>

<style scoped>
.meu-componente {
  text-align: center;
  color: #2c3e50;
}
</style>
