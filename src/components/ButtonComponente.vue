<template>
  <button
  :class="`btn ${tamanho} ${cor} ${corTexto}`"
  >
  <img :src="src" :alt="alt" :class="iconClass">
  {{texto}}
  </button>
</template>

<script>
export default {
  name: 'ComponenteBotao',
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
};
</script>

<style scoped>
/*
img{
  margin-right: 8px;
}ERRO DOS ICONES NÃO ESTAREM CENTRALIZANDO,  agora está centralizado*/

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
