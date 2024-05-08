<template>
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-md-8">
      <div class="pt-5 text-center">
        <form>
          <input type="text" v-model="pesquisaAtual" :placeholder="pesquisaRetorno.pesquisa ? pesquisaRetorno.pesquisa : 'Digite o termo de busca...'">
          <button type="button" @click="enviarPesquisa">Enviar</button>
        </form>
      </div>
      <div v-if="Notfound == true"><NotfoundComponente :titulo="pesquisaRetorno.pesquisa"/></div>

      <section class="mt-5">
        <div v-if="pesquisaExiste == 'correto'">
          <p class="mt-5 mb-3">{{qtdWallpp}} Wallpapers foram encontrados com o termo: {{pesquisaRetorno.pesquisa}}</p>

            <article class="row row-cols-1 row-cols-md-3 g-4 al">
              <template v-for="card in cards" :key="card.id">
                <div class="col">
                  <div class="card h-100">
                    <img :src="card.img" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">{{card.texto}}</p>
                      <h5 class="card-title">{{card.nome}}</h5>
                    </div>
                  </div>
                </div>
              </template>

              <button>Ver mais Wallpapers</button><!-- componente btn aqui -->
            </article>

        
        </div>
        <div v-if="pesquisaExiste == 'errado'">
          <p>Componente not found vem aqui</p>
        </div>
      </section>
    </div>
  </div> 
</template>

<script>
import { pesquisaStore } from '@/stores/pesquisa';
import NotfoundComponente from '../components/NotfoundComponente.vue';
export default {
  components: { NotfoundComponente },
  data() {
    return {
      pesquisaAtual: '',
      Notfound: true,
      qtdWallpp: 10,
      pesquisaRetorno: this.storePesquisa,
      //ver como fazer isso com true false, pois precisa de 3 estados V, F e " "
      pesquisaExiste: 'correto', // correto exibe cards, errado exibe notfoud, nada exibe nada
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
  setup() {
    const storePesquisa = pesquisaStore() 
    return {
      storePesquisa
    }
  },
  methods:{
    enviarPesquisa() {
      this.storePesquisa.setPesquisa(this.pesquisaAtual);
      this.$router.push({ name: 'buscar', params: { query:this.pesquisaAtual}});
    }
  }
};
</script>

<style scoped>

</style>
