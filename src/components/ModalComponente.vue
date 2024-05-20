<template>

<div  class="container d-flex justify-content-center align-items-center vh-100  ">
  <div class="card col12 col-md-10 col-lg-8 mb-3">
  <div class="row no-gutters d-flex align-items-stretch">
    <div class="col-md-8">
      <img src="/src/assets/image 6.png" class="card-img mt-3 p-3 h-auto w-100" alt="...">
      <div class="div d-flex justify-content-beetween">
        <p class="h5 p-3 text-lg flex-grow-1">{{ tituloModal }}</p>
        
        <ButtonComponente 
          :texto="''" 
          :tamanho="'icone'" 
          :cor="'bgCinzaClaro'"
          :src="'/src/assets/icons/frame-coracao.png'"
          :alt="'ícone botão de download'"
          class=" p-1 m-2 d-flex justify-content-center align-items-center"
        />
        
        <ButtonComponente 
          :texto="''" 
          :tamanho="'icone'" 
          :cor="'bgCinzaClaro'"
          :src="'/src/assets/icons/frame-compartilhar.png'"
          :alt="'ícone botão de download'"
          class="p-1 m-2 d-flex justify-content-center align-items-center"
        />
       
      </div>
    
    </div>
  
    <div class="col-md-4 col-12">

      <div class="card-body d-flex flex-column"> 

        <div class="d-flex justify-content-end">
          <ButtonComponente @click="fecharModal"
          :texto="''"
          :tamanho="'icone'"
          :cor="'bgCinza'"
          :corTexto="''"
          :src="'/src/assets/icons/icone-x.png'"
          :alt="'icone botão de fechar'"
          class=""
          
        />
        </div>     

        <ButtonComponente 
          :texto="'Baixar em 4K'" 
          :tamanho="'pequeno'" 
          :cor="'bgVerde'"
          :corTexto="'branco'"
          :src="'/src/assets/icons/icone-download.png'"
          :alt="'ícone botão de download'"
          class="mt-4 mb-2"
        />
        <ButtonComponente 
          :texto="'Baixar em Full HD'" 
          :tamanho="'pequeno'" 
          :cor="'bgAzul'"
          :corTexto="'branco'"
          :src="'./src/assets/icons/icone-download.png'"
          :alt="'ícone botão de download'"
          class="mb-2"
        />
        <ButtonComponente 
          :texto="'Baixar em HD'" 
          :tamanho="'pequeno'" 
          :cor="'bgCinzaEscuro'"
          :corTexto="'branco'"
          :src="'./src/assets/icons/icone-download.png'"
          :alt="'ícone botão de download'"
          class="mb-2"
        />
        <p class="h5 mt-3">Categoria</p>
        <p>{{ nomeCategoria }}</p>
        <p class="h5"><strong>Donwloads semanais</strong></p>
        <p>123.789</p>
      </div>
        
    </div>
  </div>
</div>
</div>

</template>

<script>
import ButtonComponente from '@/components/ButtonComponente.vue';

export default {
  name: 'ModalComponente',
  components: {
    ButtonComponente,
  },
  props: {
    tituloModal: String,
    nomeCategoria: String
  },
  
  methods: {
   
    fecharModal(){
      this.$emit('fechar-modal')
    }
  }

}
</script>

<style scoped>

.container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.card {
  width: 100%;
  max-width: 1000px;
  /* max-height: 553px; */
  height: auto;
  margin: auto;
  margin-top: 10vh;
 
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
