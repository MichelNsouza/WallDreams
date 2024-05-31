<template>
  <div class="row d-flex justify-content-center">
    <div class="col-md-8">

      <div class="pt-5 text-center">

        <h3>Acesse mais de 1.000.000 de Papeis de parede<br>
  e deixe seu computador com a sua cara!</h3>
          <p>Faça download em 4K, Full-HD ou HD, não importa sua resolução!</p>   
    
          <BarraPesquisa/> 

          <p>
          Categorias mais buscadas 
          <a :href="`/categoria/${maisBuscado[0]}`" class="destaqueMaisBuscado"><strong>{{ maisBuscado[0] }}</strong></a>, 
          <a :href="`/categoria/${maisBuscado[1]}`" class="destaqueMaisBuscado"><strong>{{ maisBuscado[1] }}</strong></a> e 
          <a :href="`/categoria/${maisBuscado[2]}`" class="destaqueMaisBuscado"><strong>{{ maisBuscado[2] }}</strong></a>.
        </p>
        
      </div>

      <section class="mt-5 ">

        <h2 class="mt-5 mb-3">Lançamentos</h2>
          <article class="row row-cols-1 row-cols-md-3 g-4">
            
            <template v-for="card in lancamentosWallpapers">
              <CardComponente :card="card"/>
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

      <section class="mt-5 mb-5">

        <h2>Mais baixados nos últimos 30 dias</h2>

        <article class="row row-cols-1 row-cols-md-3 g-4">
          
          <template v-for="card in maisBaixadosWallpapers">
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
} from '@/services/api';

export default {
  name: 'HomeView',
  components: {
    BarraPesquisa,
    CardComponente,
    ButtonComponente,
  },
  data() {
    return {
      pesquisaAtual: '',
      quantidadevisivel:3,
      qtdLancamentos:0,
      maisBuscado: [],
      lancamentosWallpapers: [],
      maisBaixadosWallpapers: [],
      maisBuscadoArray: [
      {
        "category_id": 1,
        "name": "Veículos"
      },
      {
        "category_id": 2,
        "name": "Paisagem"
      },
      {
        "category_id": 3,
        "name": "Animais"
        }]
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
    incrementaCards() {
        this.quantidadevisivel += 3;
        this.fetchData();
    },
    async fetchData() {
      try {
        const responseMaisBaixadosWallpapers = await getMaisBaixadosWallpapers();
        const responseLancamentosWallpapers = await getLancamentosWallpapers();
        //const responseMaisBuscadosCategorias = await getCategoriasMaisBuscadas();
        this.lancamentosWallpapers = responseLancamentosWallpapers.data;
        this.qtdLancamentos = this.lancamentosWallpapers.length;
        this.maisBaixadosWallpapers = responseMaisBaixadosWallpapers.data;
        //this.maisBuscado = responseMaisBuscadosCategorias.data;
        
        this.maisBuscadoArray.forEach(categoria => {
          this.maisBuscado.push(categoria.name);
        });

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
