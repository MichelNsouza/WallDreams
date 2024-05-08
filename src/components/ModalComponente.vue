<template>

<div class="container d-flex justify-content-center align-items-center vh-100">
  <div class="card col-md-12 mb-3">
  <div class="row no-gutters d-flex align-items-stretch" style="height:100%;">
    <div class="col-md-8">
      <img src="/src/assets/image 6.png" class="card-img mt-3 p-3" alt="...">
      <div class="div d-flex justify-content-beetween">
        <p class="p-3 text-lg flex-grow-1 ">O ratinho corredor</p>
       
          <button class="btn btn-secondary m-2"><img src="/src/assets/icons/frame-coracao.png" alt=""></button>
          <button class="btn btn-secondary m-2"><img src="/src/assets/icons/frame-compartilhar.png" alt=""></button>
       
       
      </div>
    
    </div>
  
    <div class="col-md-4">
      <div class="card-body d-flex flex-column">
        <button type="button" class="btn btn-success mt-4 mb-3">
          <img src="/src/assets/icons/icone-download.png" class="iconeDownload" alt="ícone botão de download">
          Baixar em 4K
        </button>
        <button type="button" class="btn btn-primary mb-3">
          <img src="/src/assets/icons/icone-download.png" class="iconeDownload" alt="ícone botão de Download">
          Baixar em Full HD
        </button>
        <button type="button" class="btn btn-dark">
          <img src="/src/assets/icons/icone-download.png" class="iconeDownload" alt="ícone botão de download">
          Baixar em HD
        </button>
        <p class="h5 mt-3">Categoria</p>
        <p>Veiculos</p>
        <p class="h5"><strong>Donwloads semanais</strong></p>
        <p>123.789</p>
      </div>
        
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  name: 'ModalComponente'
}
</script>

<style scoped>

.card {
  width: 1001px;
  height: 553px;
 
}

.img {
  width: 665px;
  height: 443px
}


.btn-success, .btn-primary, .btn-dark {
  width: 251px;
  height: 76px;
  border-radius: 8px;
  color: white;
}

.iconeDownload {
  margin-right: 8px;
}

 .btn-secondary {
  width: 47px;
  height: 41px;
  background: #E8E8E8;
  border: none;


}


</style>
