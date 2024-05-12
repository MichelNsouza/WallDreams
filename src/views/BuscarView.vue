<template>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-md-8">

        <BarraPesquisa/> 

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

<script>
import BarraPesquisa from '@/components/BarraPesquisa.vue';
import ButtonComponente from '@/components/ButtonComponente.vue';
import CardComponente from '@/components/CardComponente.vue';
import NotfoundComponente from '@/components/NotfoundComponente.vue';
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
      pesquisaAtual: '',
      pesquisaExiste: true,
      qtdWallpp: 10,
      pesquisaRetorno: storePesquisa,
      cards: [ 
        { 
          id: 1, 
          nome: 'Card1',
          texto: 'teste card 1',
          img: '/src/assets/image 6.png'
        },
        { 
          id: 2, 
          nome: 'Card2',
          texto: 'teste card 2',
          img: '/src/assets/image 6.png'
        },
        { 
          id: 3, 
          nome: 'Card3',
          texto: 'teste card 3',
          img: '/src/assets/image 6.png'
        },
        { 
          id: 4, 
          nome: 'Card1',
          texto: 'teste card 1',
          img: '/src/assets/image 6.png'
        },
        { 
          id: 5, 
          nome: 'Card2',
          texto: 'teste card 2',
          img: '/src/assets/image 6.png'
        },
        { 
          id: 6, 
          nome: 'Card3',
          texto: 'teste card 3',
          img: '/src/assets/image 6.png'
        },
        { 
          id: 7, 
          nome: 'Card1',
          texto: 'teste card 1',
          img: '/src/assets/image 6.png'
        },
        { 
          id: 8, 
          nome: 'Card2',
          texto: 'teste card 2',
          img: '/src/assets/image 6.png'
        },
        { 
          id: 9, 
          nome: 'Card3',
          texto: 'teste card 3',
          img: '/src/assets/image 6.png'
        }
      ]
    };
  },
  methods: {
    enviarPesquisa() {
      this.pesquisaRetorno.setPesquisa(this.pesquisaAtual);
      this.$router.push({ name: 'buscar', params: { query: this.pesquisaAtual }});
    }
  }
};
</script>


<style scoped>

</style>
