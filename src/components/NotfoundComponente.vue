<template>
    <div class="row d-flex justify-content-center">
    <div class="col-md-8">
    <b class="texto"> Ops!!! Não encontramos nenhum Wallpaper para o termo:<span class="vermelho">{{titulo}}</span></b>
</div> 
    <div class="banimento">
    <img src="/src/assets/img/banimento 1.svg" alt="erro">
</div>
</div>
</template>

<script>
export default {
    name: 'NotFoundComponente',
    props:{
        titulo: String
    },
}
</script>

 

<style scoped>

.input{
    height: 80px;
    width: 1046px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    
}

.texto{
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.4em;
    margin-top: 30px;
    
}
.banimento{
   display: flex;
   justify-content: center;
   margin-top: 50px;
   height: 329px;
  
}
.vermelho{
    color: red;
    
}
</style>