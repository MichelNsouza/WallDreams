<template>

<div  class="container d-flex justify-content-center align-items-center vh-100 z-2">
  <div class="card col12 col-md-10 col-lg-8 mb-3">
  <div class="row no-gutters d-flex align-items-stretch">
    <div class="col-md-8">
      <img :src="'http://ec2-18-229-159-118.sa-east-1.compute.amazonaws.com/api/'+card.url" class="card-img mt-3 p-3 h-auto w-100" alt="...">
      <div class="div d-flex justify-content-beetween">
        <p class="h5 p-3 text-lg flex-grow-1">{{card.description}}</p>
        
        <ButtonComponente 
          :texto="''" 
          :tamanho="'icone'" 
          :cor="'bgCinzaClaro'"
          :src="'/src/assets/icons/frame-coracao.svg'"
          :alt="'ícone botão de download'"
          class=" p-1 m-2 d-flex justify-content-center align-items-center"
          @click="like"
          :iconClass="curtida ? 'bgVermelho' : ''"
        />
        
        <ButtonComponente 
          :texto="''" 
          :tamanho="'icone'" 
          :cor="'bgCinzaClaro'"
          :src="'/src/assets/icons/frame-compartilhar.svg'"
          :alt="'ícone botão de download'"
          class="p-1 m-2 d-flex justify-content-center align-items-center"
          @click="compartilhar"
        />
       
      </div>
    
    </div>
  
    <div class="col-md-4 col-12">

      <div class="card-body d-flex flex-column"> 

        <div class="d-flex justify-content-end">
          <ButtonComponente @click="fecharModal()"
          :texto="''"
          :tamanho="'icone'"
          :cor="'bgCinza'"
          :corTexto="''"
          :src="'/src/assets/icons/icone-x.svg'"
          :alt="'icone botão de fechar'"
          class=""
          
          />
        </div>     

        <ButtonComponente 
          :texto="'Baixar em 4K'" 
          :tamanho="'pequeno'" 
          :cor="'bgVerde'"
          :corTexto="'branco'"
          :src="'/src/assets/icons/icone-download.svg'"
          :alt="'ícone botão de download'"
          class="mt-4 mb-2"
          @click="abrirModalCadastro()"
        />
        <ButtonComponente 
          :texto="'Baixar em Full HD'" 
          :tamanho="'pequeno'" 
          :cor="'bgAzul'"
          :corTexto="'branco'"
          :src="'/src/assets/icons/icone-download.svg'"
          :alt="'ícone botão de download'"
          class="mb-2"
          @click="abrirModalCadastro()"
        />
        <ButtonComponente 
          :texto="'Baixar em HD'" 
          :tamanho="'pequeno'" 
          :cor="'bgCinzaEscuro'"
          :corTexto="'branco'"
          :src="'/src/assets/icons/icone-download.svg'"
          :alt="'ícone botão de download'"
          class="mb-2"
          @click="abrirModalCadastro()"
        />
        <p class="h5 mt-3">Categoria</p>
        <p>{{  getCategoryName(card.category_id) }}</p> 
        <p class="h5"><strong>Donwloads semanais</strong></p>
        <p>{{card.download_count}}</p>
      </div>
        
    </div>
  </div>
</div>
</div>

  <template v-if="exibeModalCadastro">
    <ModalEmailComponente @fechar-modal-cadastro = "fecharModalCadastro"/>
  </template>

</template>

<script>
import ButtonComponente from '@/components/ButtonComponente.vue';
import ModalEmailComponente from '@/components/ModalEmailComponente.vue';
export default {
  data(){
    return {
      exibeModalCadastro: false,
      curtida: false,
    }
  },
  components: {
    ButtonComponente,
    ModalEmailComponente
  },
  props: {
    // tituloModal: String,
    // nomeCategoria: String,
    card: {
        type: Object,
      },
      categories: {
      type: Array,
      required: true,
    }
  },
  methods: {
    fecharModal(){
      this.$emit('fechar-modal')
    }, 
    fecharModalESC(event) {
            if (event.keyCode === 27 && this.exibeModalCadastro == false) {
                this.fecharModal(); 
            }

    },
    async compartilhar() {

      // window.location.href

      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Confira este conteúdo!',
            text: this.card.description,
            url: `/buscar/${encodeURIComponent(this.card.description)}`,
          });
          console.log('Conteúdo compartilhado com sucesso');
        } catch (error) {
          console.error('Erro ao compartilhar o conteúdo:', error);
        }
      } else {
        console.warn('API de Web Share não suportada neste navegador.');
      }
    },
    getCategoryName(category_id) {
      const category = this.categories.find(cat => cat.category_id === category_id);
      return category ? category.name : 'Categoria desconhecida';
    },
    abrirModalCadastro() {
      this.exibeModalCadastro = true;
      //this.fecharModal();
      
    },
    fecharModalCadastro() {
      this.exibeModalCadastro = false;
    },
    like(){
      this.curtida = !this.curtida;
    }
   
    },
    mounted() {
        document.addEventListener('keydown', this.fecharModalESC);
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.fecharModalESC);
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

.card-img {
  max-width: 100%;
  max-height: 450px; /* Define a altura máxima desejada */
  object-fit: contain;
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
