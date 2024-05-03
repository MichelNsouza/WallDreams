<template>

<div class="container d-flex justify-content-center align-items-center vh-100">
  <div class="card mb-3">
  <div class="row no-gutters d-flex align-items-stretch" style="height:100%;">
    <div class="col-md-8">
      <img src="/src/assets/image 6.png" class="card-img mt-3 p-3" alt="...">
      <p class="p-3 text-lg ">O ratinho corredor</p>
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


</style>
