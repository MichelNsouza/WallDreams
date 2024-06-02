<template>
  <header class="nav">
    <div class="container">
      <nav class="navbar navbar-expand-lg ">
        <router-link to="/" class="custom-link">
          <h1 class="h4"><img src="\src\assets\icons\iconFoto.svg" alt="Icone de fotografia"> WallDreams</h1>
        </router-link>

        <ul class="navbar-url collapse navbar-collapse justify-content-end p-3 mb-2">
          <li v-for="(categoria) in categorias" class="list">
            <router-link @click="enviarPesquisa(categoria.name)" :to="'/buscar/' + categoria.name" class="nav-info">
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
import {
  getTodasCategorias
} from '@/services/api';
export default {
  setup() {
    const storePesquisa = pesquisaStore()
    return {
      storePesquisa
    }
  },
  data() {
    return {
      categorias: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const todasCategorias = await getTodasCategorias();
        this.categorias = todasCategorias.data;

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
    enviarPesquisa(categoria) {
      this.storePesquisa.setPesquisa(categoria);
    }
  }
}
</script>

<style>
/*navbar css*/
.nav {
  background-color: var(--headerColor);
  color: var(--whiteColor);
  height: 80px;
}

.navbar {
  height: 80px;
  widows: 100%;
}

.custom-link {
  color: var(--whiteColor);
  text-decoration: none;
}

.svg-nav {
  margin: 0 15px 7px 0;
  align-items: center;
}

.nav-info {
  text-decoration: none;
  color: var(--whiteColor);
}

.navbar-url li {
  display: inline-block;
  text-decoration: none;
  padding-left: 20px;
}
</style>
