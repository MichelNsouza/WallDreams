<template>
  <button class="btn btn-primary" type="submit">{{titulo}}</button>
</template>
  
  <script>
  export default {
    name: 'ButtonComponente',
    props:{
      titulo: String,
      classeEstilo: {
          type: String,
          default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>