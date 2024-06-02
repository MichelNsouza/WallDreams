<template>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-md-9">

      <BarraPesquisa class="mt-5" />

      <section class="mt-5">
        <div v-if="pesquisaExiste == true">
          <p class="d-flex mt-5 mb- mx-5">{{ qtdWallpp }} Wallpapers foram encontrados com o termo: <span
              class="destaque"> <b> {{ pesquisaRetorno.pesquisa }} </b> </span></p>

          <article class="mb-5 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-3 g-4 al">

            <template v-for="card in cards">
              <CardComponente :card="card" />
            </template>

            <div class="w-100"></div>

            <template v-if="qtdWallpp > 9 && quantidadevisivel <= qtdWallpp" class="mt-3 d-flex justify-content-center">
              <ButtonComponente :texto="'Ver mais Wallpapers'" :tamanho="'grande'" :cor="'bgCinzaClaro'"
                @click.prevent="incrementaCards()" />
            </template>

          </article>
        </div>
        <div v-if="pesquisaExiste == false">
          <NotfoundComponente :titulo="pesquisaRetorno.pesquisa" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BarraPesquisa from '@/components/BarraPesquisaComponente.vue';
import ButtonComponente from '@/components/ButtonComponente.vue';
import CardComponente from '@/components/CardComponente.vue';
import NotfoundComponente from '@/components/NotfoundComponente.vue';
import { getTodosWallpapers, getWallpaperPesquisa } from '@/services/api';
import { pesquisaStore } from '@/stores/pesquisa';

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
      quantidadevisivel: 9,
      pesquisaRetorno: storePesquisa,
      cards: [],
      cardsEncontrados:[]
    };
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    '$route'() {
      this.quantidadevisivel = 9;
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

        let pesquisa;
    
        if (this.pesquisaRetorno.pesquisa.toLowerCase().trim() === 'todos') {
          pesquisa = await getTodosWallpapers();
          this.cardsEncontrados = pesquisa.data.wallpapers;
        } else {
          pesquisa = await getWallpaperPesquisa(this.pesquisaRetorno.pesquisa);// no back tratativa de string toLowerCase().trim()
          this.cardsEncontrados = pesquisa.data.result;
        }
        if (pesquisa) {
          this.cards = this.cardsEncontrados.slice(0, this.quantidadevisivel);
          this.pesquisaExiste = this.cardsEncontrados.length > 0;
          this.qtdWallpp = this.cardsEncontrados.length;

        } else {
          this.qtdWallpp = 0;
          this.cards = [];
          this.pesquisaExiste = false;
          this.quantidadevisivel = 0;
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
  }
};
</script>


<style scoped>
.destaque {
  color: var(--headerColor);
  font-weight: bold;
}
</style>
