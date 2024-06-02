<template>
  <div class="row d-flex justify-content-center">
    <div class="col-md-9">
      <section class="mt-5 mx-3 ">
      <div class="pt-5 text-center">

        <h3>Acesse mais de 1.000.000 de Papeis de parede<br>
  e deixe seu computador com a sua cara!</h3>
          <p>Faça download em 4K, Full-HD ou HD, não importa sua resolução!!!</p>   
    
          <BarraPesquisa/> 

          <p>
          Categorias Mais Buscadas 
          <router-link @click="enviarPesquisa(maisBuscado[0].name )"  :to="'/buscar/'+maisBuscado[0].name " class="destaqueMaisBuscado"><strong>{{ maisBuscado[0].name }}</strong></router-link>, 
          <router-link @click="enviarPesquisa(maisBuscado[1].name )"  :to="'/buscar/'+maisBuscado[1].name " class="destaqueMaisBuscado"><strong>{{ maisBuscado[1].name  }}</strong></router-link> e 
          <router-link @click="enviarPesquisa(maisBuscado[0].name )"  :to="'/buscar/'+maisBuscado[0].name " class="destaqueMaisBuscado"><strong>{{ maisBuscado[0].name  }}</strong></router-link>.
        </p>
        
      </div>
      </section>
      <section class="mt-5 mb-5 mx-3 col mx-5">
        <h2 class="mt-5 mb-3 mx-5">Lançamentos</h2>
          <article class="row m-0 p-0 justify-content-center align-items-center">

            <template v-for="card in lancamentosWallpapers">
              <CardComponente :card="card" />
            </template>
          
          </article>
          <div class="mt-5 d-flex justify-content-center align-items-center">
            <!--trocar para 3-->
            <template v-if="qtdLancamentos > 2 && quantidadevisivel<=qtdLancamentos" class="mt-3 d-flex justify-content-center">
            <ButtonComponente 
              :texto="'Ver mais lançamentos'" 
              :tamanho="'grande'" 
              :cor="'bgCinzaClaro'"
              @click.prevent="incrementaCards()"
            />
          </template>
          </div>
      </section>

      <section class="mt-5 mb-5 mx-3 col mx-5">
        <h2 class="mx-5">Mais baixados nos últimos 30 dias</h2>
        <article class="row m-0 p-0 justify-content-center align-items-center">

          <template  v-for="card in maisBaixadosWallpapers">
              <CardComponente :card="card"/>
          </template>
        
        </article>
      </section>

    </div>
  </div> 

</template>

<script>
import BarraPesquisa from '@/components/BarraPesquisaComponente.vue';
import ButtonComponente from '@/components/ButtonComponente.vue';
import CardComponente from '@/components/CardComponente.vue';
import {
  getLancamentosWallpapers,
  getMaisBaixadosWallpapers,
  getMaisProcuradasCategorias,
} from '@/services/api';
import { pesquisaStore } from '@/stores/pesquisa';
export default {
  name: 'HomeView',
  components: {
    BarraPesquisa,
    CardComponente,
    ButtonComponente,
  },
  setup() {
    const storePesquisa = pesquisaStore() 
    return {
      storePesquisa
    }
  },
  data() {
    return {
      pesquisaAtual: '',
      quantidadevisivel:3,
      qtdLancamentos:0,
      maisBuscado: [],
      lancamentosWallpapers: [],
      maisBaixadosWallpapers: [],

    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route'() {
      this.quantidadevisivel=3;
      this.fetchData();
    },
  },
  methods: {
    enviarPesquisa(categoria) {
      this.storePesquisa.setPesquisa(categoria);
    },
    incrementaCards() {
        this.quantidadevisivel += 3;
        this.fetchData();
    },
    async fetchData() {
      try {
        const responseMaisBaixadosWallpapers = await getMaisBaixadosWallpapers();
        const responseLancamentosWallpapers = await getLancamentosWallpapers();
        const responseMaisBuscadosCategorias = await getMaisProcuradasCategorias();

        this.lancamentosWallpapers = responseLancamentosWallpapers.data;
        this.qtdLancamentos = this.lancamentosWallpapers.length;

        this.maisBaixadosWallpapers = responseMaisBaixadosWallpapers.data;
        
        this.maisBuscado = responseMaisBuscadosCategorias.data;




      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
  }
}
</script>

<style scoped>
.destaqueMaisBuscado{
  color: var(--headerColor);
   text-decoration: none;
}
</style>
