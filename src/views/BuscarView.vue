<template>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-md-8">

        <BarraPesquisa @pesquisar="receberPesquisa"/> 

      <div v-if="pesquisaExiste == false">
        <section class="mt-5">

          <NotfoundComponente :titulo="pesquisaRetorno.pesquisa"/>

        </section>
      </div>

      <section class="mt-5">
        <div v-if="pesquisaExiste == true">
          <p class="mt-5 mb-3">{{qtdWallpp}} Wallpapers foram encontrados com o termo: {{pesquisaRetorno.pesquisa}}</p>

            <article class="mb-5 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-3 g-4 al">
              
              <template v-for="card in cards" :key="card.id">
                <CardComponente :card="card"/>
              </template>

              <ButtonComponente 
                :texto="'Ver mais lançamentos'" 
                :tamanho="'grande'" 
                :cor="'bgCinzaClaro'"
                />
            
            </article>
        </div>
      </section>
    </div>
  </div> 
</template>

<script>//json-server --watch api.json
import BarraPesquisa from '@/components/BarraPesquisa.vue';
import ButtonComponente from '@/components/ButtonComponente.vue';
import CardComponente from '@/components/CardComponente.vue';
import NotfoundComponente from '@/components/NotfoundComponente.vue';
import { pesquisaStore } from '@/stores/pesquisa';
import axios from 'axios';

export default {
  components: {
    NotfoundComponente,
    BarraPesquisa,
    CardComponente,
    ButtonComponente,
  },
  data() {
    const storePesquisa = pesquisaStore();
    return {
      pesquisaAtual: '',
      pesquisaExiste: false,
      qtdWallpp: 10,
      pesquisaRetorno: storePesquisa,
      cards: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const responseCategorias = await axios.get('http://localhost:3000/categories');
        
        const categorias = responseCategorias.data;
      
        const categoria = categorias.find(categoria => categoria.name === this.pesquisaRetorno);// pesquisar como filtrar as categorias

        if (categoria) {
          const responseCardFiltrados = await axios.get('http://localhost:3000/todosCards', {
            params: {
              category_id: categoria.category_id
            },
            
          });
          this.cards = responseCardFiltrados.data;
          this.pesquisaExiste = true;
        } else {
          this.pesquisaExiste = false;
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
    enviarPesquisa() {
      this.pesquisaRetorno.setPesquisa(this.pesquisaAtual);
      this.$router.push({ name: 'buscar', params: { query: this.pesquisaAtual }});
    },
    receberPesquisa(texto) {
      this.pesquisaAtual = texto;
      this.fetchData();
    }
  }
};
</script>


<style scoped>

</style>
