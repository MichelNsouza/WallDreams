<template class="fundo">

  <div class="container  text-center d-flex z-3 justify-content-center align-items-center w-100">
    <div class="container2 mt-0">
        <div class="d-flex justify-content-end">
        <ButtonComponente @click = "fecharModalCadastro()"
          :texto="''"
          :tamanho="'icone'"
          :cor="'bgBranco'"
          :corTexto="''"
          :src="'/src/assets/icons/icone-x.svg'"
          :alt="'icone botão de fechar'"
          class=""
          
          />
        </div>   

        <h2>Identifique-se para não perder nenhuma <br>
             novidade do WallDreams</h2>

        <p>Não se preoculpe, seus dados estarão protegidos!</p>
        <input type="text" name="nome" id="nome" placeholder="Informe o seu nome" v-model="dadoNome" /> <br>
        <input type="text" name="email" id="email" placeholder="Informe o seu e-mail" v-model="dadoEmail"/> <br>
        <button type="button" class="mt-4 mb-0" @click="btnDownloadWallpaper">
            <img src="/src/assets/icons/icone-download.svg">
            Confirmar Download                
        </button>
  
    </div>
    </div>
</template>

<script>
import ButtonComponente from './ButtonComponente.vue';
import {
    getDownloadWallpaper
} from '@/services/api';

export default {
    data(){
        return {


            dadoNome:'',
            dadoEmail:'',
            


            
        }
    }, components: {
        ButtonComponente
    },
    props:{

        dadoResolucao:{
            type: String
        },
        idWallpaper:{
            type: String
        },
       
    },
    methods: {
        fecharModalCadastro(){
      this.$emit('fechar-modal-cadastro')
    },
    fecharModalESC(event) {
            if (event.keyCode === 27) {
                this.fecharModalCadastro();
            }

    },

    async btnDownloadWallpaper() {
       try {
         
         const download = await getDownloadWallpaper(this.idWallpaper, this.dadoResolucao, this.dadoNome, this.dadoEmail);
         this.salvarImagem(download.request.responseURL)
         
       } catch (error) {
         console.error('Erro ao baixar o Wallpaper:', error);
       }
     },

     salvarImagem(imageData) {
      const fileName = 'imagem-baixada.jpg'; // Nome do arquivo

      // Criar um objeto Blob a partir do conteúdo da imagem
      const blob = new Blob([imageData], { type: 'image/jpeg' });

      // Criar um objeto URL a partir do Blob
      const url = URL.createObjectURL(blob);

      // Criar um link para baixar a imagem
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();

      // Revogar a URL do objeto Blob para evitar vazamentos de memória
      URL.revokeObjectURL(url);
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
        .fundo {
            width: 100vw;
            height: 100vh;
        }
        .container2 {
            border: 1px solid black;
            padding:40px;
            width: 800px;
            height:450px;
            margin-top: 230px;
            border-radius: 20px;
            background-color: white;
        }
        h1 {
            font-weight: 900;
        }
        h2 {
            text-align: center;
        }
        p {
            text-align: center;
        }
       input {
        margin-left: 9px;
        margin-top: 10px;
        width: 700px;
        height: 50px;
        padding: 15px;
        border-radius: 8px;
        border: 2px #E8E8E8;
        background-color: rgba(128, 128, 128, 0.303);
       }
       button {
        width: 250px;
        height: 80px;
        /* margin-left: 230px; */
        margin-top: 10px;
        padding: 15px;
        border-radius: 10px;
        border: none;
        background-color: #78CB99;
        color: white;
        font-weight: 700;
       }
</style>