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
            
            <template v-for="card in cardsLancamentos" :key="card.wallpaper_id">
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
          
          <template v-for="card in cards3MaisBaixados30dias" :key="card.wallpaper_id">
              <CardComponente :card="card" @card-clicado="abrirModal(card.wallpaper_id, card.category_id, 'mais_baixados')"/>
          </template>
        
        </article>
      </section>

    </div>
  </div> 

   <template v-if="exibeModal"> 
  
    <ModalComponente :nome-categoria="nomeCategoria"  :titulo-modal="tituloModal" @fechar-modal = "fecharModal"  />

   </template>  
</template>

<script>//json-server --watch api.json
import BarraPesquisa from '@/components/BarraPesquisa.vue';
import ButtonComponente from '@/components/ButtonComponente.vue';
import CardComponente from '@/components/CardComponente.vue';
import ModalComponente from '@/components/ModalComponente.vue';
import axios from 'axios';

export default {
  components: {
    ModalComponente,
    BarraPesquisa,
    CardComponente,
    ButtonComponente,
  },
  data() {
    return {
      pesquisaAtual: '',
      exibeModal: false,
      maisBuscado: [],
      cardsLancamentos: [],
      cards3MaisBaixados30dias: [],
      categoriasCards: [],
      tituloModal: '',
      nomeCategoria: '',
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const responseTopBuscas = await axios.get('http://localhost:3000/topBuscas');
        const responsecards3MaisBaixados30dias = await axios.get('http://localhost:3000/maisBaixadosCards');
        const responseLancamentosCards = await axios.get('http://localhost:3000/lancamentosCards');
        const responseCategoriasCards = await axios.get('http://localhost:3000/categories')
        this.categoriasCards = responseCategoriasCards.data;
        this.maisBuscado = responseTopBuscas.data;
        this.cardsLancamentos = responseLancamentosCards.data;
        this.cards3MaisBaixados30dias = responsecards3MaisBaixados30dias.data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
    fecharModal(){
      this.exibeModal = false;
    },
    abrirModal(cardId, cardCatId, tipo){
      this.exibeModal = true;
      let cardSelecionado;
      let categoriaSelecionada;

      if(tipo === 'lancamentos'){
        cardSelecionado = this.cardsLancamentos.find(card => card.wallpaper_id === cardId);
        categoriaSelecionada = this.categoriasCards.find(card => card.category_id === cardCatId);

      } else if(tipo === 'mais_baixados') {
        cardSelecionado = this.cards3MaisBaixados30dias.find(card => card.wallpaper_id === cardId);
        categoriaSelecionada = this.categoriasCards.find(card => card.category_id === cardCatId)
      }
      this.tituloModal = cardSelecionado.title;
      this.nomeCategoria = categoriaSelecionada.name;
      console.log(this.tituloModal);

    },
  }
}
</script>

<style scoped>
.destaqueMaisBuscado{
  color: var(--headerColor);
}
</style>
