<template>
    <button class="btn btn-primary" type="submit">{{titulo}}</button>
</template>
    
    <script>
    export default {
      name: 'CardComponente',
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