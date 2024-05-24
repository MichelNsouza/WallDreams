<template>
  <div class="row d-flex justify-content-center">
    <div class="col-md-8">

      <div class="pt-5 text-center">

        <h3>Acesse mais de 1.000.000 de Papeis de parede<br>
  e deixe seu computador com a sua cara!</h3>
          <p>Faça download em 4K, Full-HD ou HD, não importa sua resolução!</p>   
    
        <BarraPesquisa/> 

          <p>Categorias mais buscadas <span class="destaqueMaisBuscado">{{maisBuscado[0].name}},</span> <span class="destaqueMaisBuscado">{{maisBuscado[1].name}}</span> e <span class="destaqueMaisBuscado">{{maisBuscado[2].name}}</span>.</p><!-- recebe 3 categorias mais baixadas da api -->
        
      </div>

      <section class="mt-5 ">

        <h2 class="mt-5 mb-3">Lançamentos</h2>

          <article class="row row-cols-1 row-cols-md-3 g-4">
            
            <template v-for="card in list_latest_wallpapers_released" :key="card.wallpaper_id">
              <CardComponente :card="card" @card-clicado="abrirModal(card.wallpaper_id, card.category_id, 'lancamentos')"/>
            </template>
          
          </article>
          <div class="mt-5 d-flex justify-content-center align-items-center">
          
            <ButtonComponente 
            :texto="'Ver mais lançamentos'" 
            :tamanho="'grande'" 
            :cor="'bgCinzaClaro'"
            
            />

          </div>
      </section>

      <section class="mt-5 mb-5">

        <h2>Mais baixados nos últimos 30 dias</h2>

        <article class="row row-cols-1 row-cols-md-3 g-4">
          
          <template v-for="card in list_most_downloaded_wallpapers" :key="card.wallpaper_id">
              <CardComponente :card="card" @card-clicado="abrirModal(card.wallpaper_id, card.category_id, 'mais_baixados')"/>
          </template>
        
        </article>
      </section>

    </div>
  </div> 

</template>

<script>//json-server --watch api.json
import BarraPesquisa from '@/components/BarraPesquisa.vue';
import ButtonComponente from '@/components/ButtonComponente.vue';
import CardComponente from '@/components/CardComponente.vue';
import { 
  getTodasCategorias,
  getMaisBaixadosWallpapers,
  getLancamentosWallpapers,
  getTodosWallpapers
} from '@/services/api';

export default {
  components: {
    BarraPesquisa,
    CardComponente,
    ButtonComponente,
  },
  data() {
    return {
      pesquisaAtual: '',
      maisBuscado: [],
      lancamentosWallpapers: [],
      maisBaixadosWallpapers: [],
      todasCategorias: ['a', 'b', 'c'],
      
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const todos = await getTodosWallpapers();
        const responseMaisBaixadosWallpapers = await getMaisBaixadosWallpapers();
        const responseLancamentosWallpapers = await getLancamentosWallpapers();
        const responseTodasCategorias = await getTodasCategorias();
        
        // this.todasCategorias = responseTodasCategorias.data;
        // this.lancamentosWallpapers = responseLancamentosWallpapers.data;
        // this.maisBaixadosWallpapers = responseMaisBaixadosWallpapers.data;

        this.todasCategorias = todos.data;
        this.lancamentosWallpapers = todos.data;
        this.maisBaixadosWallpapers = todos.data.wallpapers;

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
}
</style>
