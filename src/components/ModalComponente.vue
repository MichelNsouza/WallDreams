<template>

<div  class="container d-flex justify-content-center align-items-center vh-100 z-2">
  <div class="card col12 col-md-10 col-lg-8 mb-3">
  <div class="row no-gutters d-flex align-items-stretch">
    <div class="col-md-8">
      <img :src="'http://ec2-54-94-18-161.sa-east-1.compute.amazonaws.com/api/walldreams/wallpaper/v2/download_wallpaper/'+card.wallpaper_id+'/?resolution=HD'" class="card-img mt-3 p-3 h-auto w-100" alt="...">
      <div class="div d-flex justify-content-beetween">
        <p class="h5 p-3 text-lg flex-grow-1">{{card.description}}</p>
    
        <button class="p-1 m-2 d-flex justify-content-center align-items-center btn icone" @click="like" :class="curtida ? 'bgVermelho' : ''">
            <img src="/src/assets/icons/frame-coracao.svg" alt="icone coração">
            <span>{{ curtir }}</span>
          </button>
        <button class="p-1 m-2 d-flex justify-content-center align-items-center btn icone" @click="compartilhar">
            <img src="/src/assets/icons/frame-compartilhar.svg" alt="icone compartilhar">
          </button>
          
       
      </div>
    
    </div>
  
    <div class="col-md-4 col-12">

      <div class="card-body d-flex flex-column"> 

        <div class="d-flex justify-content-end">
          <button class="btn icone" @click="fecharModal()">
            <img src="/src/assets/icons/icone-x.svg" alt="icone X">
          </button>
        </div>    

        <button  type="button" class="btn btn-success btn-lg mt-4 mb-2"@click="abrirModalCadastro(), resolucao = '4K'"><img src="/src/assets/icons/icone-download.svg" alt="icone download"> Baixar em 4K</button>
        <button type="button" class="btn btn-primary btn-lg mb-2"@click="abrirModalCadastro(), resolucao = 'FullHD'"><img src="/src/assets/icons/icone-download.svg" alt="icone download"> Baixar em Full HD</button>
        <button type="button" class="btn btn-dark btn-lg mb-2"@click="abrirModalCadastro(), resolucao = 'HD'"><img src="/src/assets/icons/icone-download.svg" alt="icone download"> Baixar em HD</button>

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
    <ModalEmailComponente @fechar-modal-cadastro = "fecharModalCadastro" :dadoResolucao="resolucao" :idWallpaper="card.wallpaper_id"/>
  </template>

</template>

<script>
import ButtonComponente from '@/components/ButtonComponente.vue';
import ModalEmailComponente from '@/components/ModalEmailComponente.vue';

import {
  getLikeWallpaper
} from '@/services/api';


export default {
  data(){
    return {
      exibeModalCadastro: false,
      curtida: false,
      resolucao:'',
      curtir: this.like,
    }
  },
  components: {
    ButtonComponente,
    ModalEmailComponente
  },
  props: {
    like: {
      type: Number,  
    },
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

      if (navigator.share) {// web sh não funciona em http, somente local e https, procurar alternativa
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
        alert('API de Web Share não suportada neste navegador.');
        alert(`copie o link: http://ec2-54-94-18-161.sa-east-1.compute.amazonaws.com/buscar/${encodeURIComponent(this.card.description)}`);

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

      if(this.curtida === false){
        this.fetchLike();

        this.curtir++;
     
        this.curtida = true;

      }

    },
    
    async fetchLike() {
      try {
        await getLikeWallpaper(this.card.wallpaper_id);
       // console.log(this.card.like_count);

      } catch (error) {
        console.error('Erro ao registrar like:', error);
      }
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

.icone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}

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

.bgVermelho {
  /* background-color: red ; */
  filter: invert(29%) sepia(92%) saturate(4512%) hue-rotate(353deg) brightness(91%) contrast(112%);
}

</style>
