<template>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-md-8">

      <BarraPesquisa  class="mt-5"/>  

      <section class="mt-5">
        <div v-if="pesquisaExiste == true">
          <p class="mt-5 mb-3">{{qtdWallpp}} Wallpapers foram encontrados com o termo: <span class="destaque">{{pesquisaRetorno.pesquisa}}</span></p>

            <article class="mb-5 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-3 g-4 al">
              
              <template v-for="card in cards" :key="card.id">
                <CardComponente :card="card"/>
              </template>

              <div class="w-100"></div>

              <template v-if="qtdWallpp > 9 && quantidadevisivel<=qtdWallpp" class="mt-3 d-flex justify-content-center">
                <ButtonComponente 
                  :texto="'Ver mais Wallpapers'" 
                  :tamanho="'grande'" 
                  :cor="'bgCinzaClaro'"
                  @click.prevent="incrementaCards()"
                />
              </template>
            
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
import { 
  getWallpaperPesquisa,
  getTodosWallpapers

} from '@/services/api';
 
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
      quantidadevisivel:9,
      pesquisaRetorno: storePesquisa,
      cards: [],
    };
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    '$route'() {
      this.quantidadevisivel=9;
      this.fetchData();
  
    },

  },
  methods: {
    incrementaCards() {
      this.quantidadevisivel += 9;
      this.fetchData();
    },
     async fetchData() {
       try {
         this.cards = [];
         const todos = await getTodosWallpapers();
         this.cards = todos.data.wallpapers;
         //  const pesquisa = await getWallpaperPesquisa(this.pesquisaRetorno.pesquisa.toLowerCase().trim());
         
        //  if (pesquisa) {
        //    const cardsEncontrados = pesquisa.data
        //    this.cards = cardsEncontrados.slice(0, this.quantidadevisivel);
        //    this.pesquisaExiste = cardsEncontrados.length > 0;
        //    this.qtdWallpp = cardsEncontrados.length;

        //  }else {
        //      this.qtdWallpp = 0;
        //      this.cards = [];
        //      this.pesquisaExiste = false;
        //      this.quantidadevisivel = 0;
        //  }
       } catch (error) {
         console.error('Erro ao buscar dados:', error);
       }
     },
  }
};
</script>


<style scoped>
.destaque{
  color: var(--headerColor);
  font-weight: bold;
}
</style>
