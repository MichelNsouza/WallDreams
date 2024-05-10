<template>
  <div class="row d-flex justify-content-center">
    <div class="col-md-8">

      <div class="pt-5 text-center">

        <h3>Acesse mais de 1.000.000 de Papeis de parede<br>
  e deixe seu computador com a sua cara!</h3>
          <p>Faça download em 4K, Full-HD ou HD, não importa sua resolução!</p>   
    
        <BarraPesquisa/> 

          <p>Categorias mais buscadas <span class="destaqueMaisBuscado">{{maisBuscado[0]}},</span> <span class="destaqueMaisBuscado">{{maisBuscado[1]}}</span> e <span class="destaqueMaisBuscado">{{maisBuscado[2]}}</span>.</p><!-- recebe 3 categorias mais baixadas da api -->
        
      </div>

      <section class="mt-5">

        <h2 class="mt-5 mb-3">Lançamentos</h2>

          <article class="row row-cols-1 row-cols-md-3 g-4">
            
            <template v-for="card in cards" :key="card.id">
              <CardComponente :card="card"/>
            </template>
          
          </article>

          <ButtonComponente :titulo="'Ver mais'"/>
      
      </section>

      <section class="mt-5 mb-5">

        <h2>Mais baixados nos últimos 30 dias</h2>

        <article class="row row-cols-1 row-cols-md-3 g-4"> <!-- aqui vem um for com os 3 ultimos card's incluidos na api -->
          
          <template v-for="card in cards" :key="card.id">
            <CardComponente :card="card"/>
          </template>
        
        </article>
      </section>

    </div>
  </div> 

  <div v-if="exibeModal == true">
  
    <ModalComponente/>

  </div> 
</template>

<script>
import { pesquisaStore } from '@/stores/pesquisa';

import BarraPesquisa from '@/components/BarraPesquisa.vue';
import ButtonComponente from '@/components/ButtonComponente.vue';
import CardComponente from '@/components/CardComponente.vue';
import ModalComponente from '@/components/ModalComponente.vue';

export default {
  name: 'HomeView',
  components: {
    ModalComponente,
    BarraPesquisa,
    CardComponente,
    ButtonComponente,
  },
  created() {
    this.storePesquisa = pesquisaStore();
  },
  data() {
    return {
      pesquisaAtual:'',
      exibeModal:false,
      maisBuscado:['Paisagem','Animais','Veiculos'],
      cards: [
        { 
          id: 1, 
          nome: 'Card1',
          texto: 'teste card 1',
          img: './src/assets/image 6.png'
        },
        { 
          id: 2, 
          nome: 'Card2',
          texto: 'teste card 2',
          img: './src/assets/image 6.png'
        },
        { 
          id: 3, 
          nome: 'Card3',
          texto: 'teste card 3',
          img: './src/assets/image 6.png'
        }
      ]
    }
  },
  methods:{
    enviarPesquisa() {
      this.storePesquisa.setPesquisa(this.pesquisaAtual);
      this.$router.push({ name: 'buscar', params: { query:this.pesquisaAtual}});
    }
  }
}

</script>

<style scoped>
.destaqueMaisBuscado{
  color: var(--headerColor);
}
</style>
