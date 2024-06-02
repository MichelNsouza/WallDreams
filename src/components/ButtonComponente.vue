<template>
  <button
    :class="`btn ${tamanho} ${cor} ${corTexto}`"
  >
    <img v-if="src" :src="src" :alt="alt" :class="iconClass">
    {{texto}}
  </button>
</template>

<script>
import iconeDownload from '@/assets/icons/icone-download.svg';
import iconeCompatilhar from '@/assets/icons/frame-compartilhar.svg';
import iconeCoracao from '@/assets/icons/frame-coracao.svg';
import iconeX from '@/assets/icons/icone-x.svg';
import iconeFoto from '@/assets/icons/iconFoto.svg';
import iconeLupa from '@/assets/icons/lupaPesquisa.svg';


const iconMap = {
  iconeDownload,
  iconeX,
  iconeLupa,
  iconeFoto,
  iconeCoracao,
  iconeCompatilhar,
};

export default {
  props: {
    texto: {
      type: String,
      default: 'Click aqui' 
    },
    tamanho: {
      type: String,
      default: 'medio' 
    },
    cor: {
      type: String,
      default: '' 
    },
    corTexto: {
      type: String,
      default: '' 
    },
    src: {
      type: String,
      default: '' 
    },
    alt: {
      type: String,
      default: '' 
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    resolvedSrc() {
      return iconMap[this.src] || this.src;
    }
  }
};
</script>

<style scoped>
.branco{
  color: white;
}
.preto{
  color: black;
}
.icone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}
.pequeno{
  width: 250px;
  height: 75px;
  border-radius: 8px;
}
.medio {
  width: 308px;
  height: 80px;
  border-radius: 8px;
}
.grande {
  width: 344px;
  height: 76px;
  border-radius: 10px;
  font-weight:700;
}

.bgVerde {
background-color: #4EB577;
}
.bgVerdeClaro{
  background-color: #78CB99
}
.bgAzul {
background-color: #1E97EE;
}
.bgCinzaEscuro {
background-color: #292929;
}
.bgCinzaClaro {
background-color: #E8E8E8;
}
.bgBranco {
  background-color: white ;
}
.bgVermelho {
  /* background-color: red ; */
  filter: invert(29%) sepia(92%) saturate(4512%) hue-rotate(353deg) brightness(91%) contrast(112%);
}



</style>
