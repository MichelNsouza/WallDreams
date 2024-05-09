<template>
      <header class="nav">
        <div class="container">
          <nav class="navbar">            
            <router-link to="/" class="custom-link">
               <h1><img src="\src\assets\icons\iconFoto.svg" alt="Icone de fotografia"> WallDreams</h1>
            </router-link>
              
            <ul class="navbar-url p-3 mb-2">
                <li v-for="(categoria, index) in categorias" :key="index" class="list" @click="enviarPesquisa(categoria)"> 
                    <router-link 
                    @click="enviarPesquisa(categoria)" 
                    :to="'/buscar/'+categoria" 
                    class="nav-info"
                    >
                    <span>{{ categoria }}</span>
                    </router-link>
                </li>
            </ul> 
          </nav>
        </div>
     </header>
</template>

  
<script>
import { pesquisaStore } from '@/stores/pesquisa';
export default {
  setup() {
    const storePesquisa = pesquisaStore() 
    return {
      storePesquisa
    }
  },
  data() {
    return {
      categorias:[
      'Todos',
      'Paisagem',
      'Tecnologia',
      'Abstratos',
      'Animais',
      'Veiculos',
      'Outros'
    ]
    };
  },
  methods:{
    enviarPesquisa(pesquisaAtual) {
      this.storePesquisa.setPesquisa(pesquisaAtual);
    }
  }
}
</script>

<style>
/*navbar css*/
.nav{
    background-color: var(--headerColor);
    color:var(--whiteColor);
}
.custom-link{
  color: var(--whiteColor);
  text-decoration: none;
} 
.svg-nav{
  margin: 0 15px 7px 0;
  align-items: center;
}

.nav-info{
  text-decoration: none;
  color: var(--whiteColor);
}

.navbar-url li{
  display: inline-block;
  text-decoration: none;
  padding-left: 20px;
}
</style>
