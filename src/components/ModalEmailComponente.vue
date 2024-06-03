<template class="fundo">

    <div class="container  text-center d-flex z-3 justify-content-center align-items-center w-100">
        <div class="container2 mt-0">
            <div class="d-flex justify-content-end">
                <button class="btn icone" @click="fecharModalCadastro()">
                    <img src="/src/assets/icons/icone-x.svg" alt="icone X">
                 </button>
            </div>

            <h2>Identifique-se para não perder nenhuma <br>
                novidade do WallDreams</h2>

            <p>Não se preoculpe, seus dados estarão protegidos!</p>
         <form @submit.prevent="btnDownloadWallpaper">
            <input required type="text" name="nome" id="nome" placeholder="Informe o seu nome" v-model="dadoNome" /> <br>
            <input required type="email" name="email" id="email" placeholder="Informe o seu e-mail" v-model="dadoEmail" /> <br>
            <button type="submit" class="mt-4 mb-0">
                <img src="/src/assets/icons/icone-download.svg">
                Confirmar Download
            </button>
        </form>

        </div>
    </div>
</template>

<script>
import {
    getDownloadWallpaper
} from '@/services/api';
import ButtonComponente from './ButtonComponente.vue';

export default {
    data() {
        return {
            dadoNome: '',
            dadoEmail: '',
        }
    },
    components: {
        ButtonComponente
    },
    props: {

        dadoResolucao: {
            type: String
        },
        idWallpaper: {
            type: String
        },

    },
    methods: {
        fecharModalCadastro() {
            this.$emit('fechar-modal-cadastro')
        },
        fecharModalESC(event) {
            if (event.keyCode === 27) {
                this.fecharModalCadastro();
            }

        },

        async btnDownloadWallpaper() {
      try {
        const response = await getDownloadWallpaper(this.idWallpaper, this.dadoResolucao, this.dadoNome, this.dadoEmail);
        const imageUrl = response.request.responseURL;
        this.downloadImage(imageUrl);
      } catch (error) {
        console.error('Erro ao baixar o Wallpaper:', error);
      }
    },

    async downloadImage(imageUrl) {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'imagem-baixada.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Erro ao baixar a imagem:', error);
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
.fundo {
    width: 100vw;
    height: 100vh;
}

.container2 {
    border: 1px solid black;
    padding: 40px;
    width: 800px;
    height: 450px;
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
.icone {
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}
</style>