<template>
      <header class="nav">
        <div class="container">
          <nav class="navbar">            
            <router-link to="/" class="custom-link">
               <h1><img src="\src\assets\icons\iconFoto.svg" alt="Icone de fotografia"> WallDreams</h1>
            </router-link>
              
            <ul class="navbar-url p-3 mb-2">
                <li v-for="(categoria) in categorias" :key="category_id" class="list" @click="enviarPesquisa(categoria)"> 
                    <router-link 
                    @click="enviarPesquisa(categoria.name)" 
                    :to="'/buscar/'+categoria.name" 
                    class="nav-info"
                    >
                    <span>{{ categoria.name }}</span>
                    </router-link>
                </li>
            </ul> 
          </nav>
        </div>
     </header>
</template>

  
<script>
import { pesquisaStore } from '@/stores/pesquisa';
import axios from 'axios';
export default {
  setup() {
    const storePesquisa = pesquisaStore() 
    return {
      storePesquisa
    }
  },
  data() {
    return {
      categorias:[]
    };
  },
  created() {
    this.fetchData();
  },
  methods:{
    async fetchData() {
      try {
        const responseCategorias = await axios.get('http://localhost:3000/categories');
        this.categorias = responseCategorias.data;

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
    enviarPesquisa(pesquisaAtual) {
      //enviar contador de busca para api
      this.storePesquisa.setPesquisa(pesquisaAtual.name);
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
