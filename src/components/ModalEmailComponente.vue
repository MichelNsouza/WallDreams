<template class="fundo">

  <div class="container  text-center d-flex z-3 justify-content-center align-items-center w-100">
    <div class="container2 mt-0">
        <div class="d-flex justify-content-end">
        <ButtonComponente @click = "fecharModalCadastro()"
          :texto="''"
          :tamanho="'icone'"
          :cor="'bgBranco'"
          :corTexto="''"
          src="@/src/assets/icons/icone-x.svg"
          :alt="'icone botão de fechar'"
          class=""
          
          />
        </div>   

        <h2>Identifique-se para não perder nenhuma <br>
             novidade do WallDreams</h2>

        <p>Não se preoculpe, seus dados estarão protegidos!</p>
        <input type="text" name="nome" id="nome" placeholder="Informe o seu nome"  /> <br>
        <input type="text" name="email" id="email" placeholder="Informe o seu e-mail"/> <br>
        <button type="button" class="mt-4 mb-0">
            <img src="/src/assets/icons/icone-download.svg">
            Confirmar Download                
        </button>
  
    </div>
    </div>
</template>

<script>
import ButtonComponente from './ButtonComponente.vue';
// download_wallpaper/5(id do wpp)/?resolution=4K(paremetro)&name=fulanodetal(paremetro)&email=fulano@gmail.com(paremetro)
export default {
    data(){
        return {
            
        }
    }, components: {
        ButtonComponente
    },
    props:{
       
    },
    methods: {
        fecharModalCadastro(){
      this.$emit('fechar-modal-cadastro')
    },
    fecharModalESC(event) {
            if (event.keyCode === 27) {
                this.fecharModalCadastro();
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