<template>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-md-8">

      <BarraPesquisa/>  

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
        <div v-if="pesquisaExiste == false">
          <NotfoundComponente :titulo="pesquisaRetorno.pesquisa"/>
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
      pesquisaExiste: false,
      qtdWallpp: 0,
      pesquisaRetorno: storePesquisa,
      cards: [],
    };
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    '$route'() {
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      try {
        this.cards = [];
        const todasCategorias = await axios.get('http://localhost:3000/categories');
        const categorias = todasCategorias.data;
      
        const categoriaEncontrada = categorias.find(categoria => categoria.name.toLowerCase() === this.pesquisaRetorno.pesquisa.toLowerCase());

        if (categoriaEncontrada) {
          const todosCards = await axios.get('http://localhost:3000/todosCards');
          const cardsEncontrados = todosCards.data.filter(card => card.category_id === categoriaEncontrada.category_id);

          this.cards = cardsEncontrados;
          this.pesquisaExiste = cardsEncontrados.length > 0;
          this.qtdWallpp = cardsEncontrados.length;

        } else if(!categoriaEncontrada) {
          const todosCards = await axios.get('http://localhost:3000/todosCards');
          const cardsEncontrados = todosCards.data.filter(card => card.description.includes(this.pesquisaRetorno.pesquisa));
          

          this.cards = cardsEncontrados;
          this.pesquisaExiste = cardsEncontrados.length > 0;
          this.qtdWallpp = cardsEncontrados.length;
        }else {
          this.cards = [];
          this.pesquisaExiste = false;
          this.qtdWallpp = 0;
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },

  }
};
</script>


<style scoped>

</style>
