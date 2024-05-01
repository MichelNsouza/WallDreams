<template>
  <div>

    <input type="text" v-text="pesquisa" placeholder="Digite o termo de busca...">

    <h3>{{pesquisa.quantidade}} Wallpapers foram encontrados com o termo: {{pesquisa.nome}}</h3>
      
      <div v-for="card in filteredCards" :key="card.id">
        <div class="col">
          <div class="card h-100">
            <img :src="card.img" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">{{card.texto}}</p>
              <h5 class="card-title">{{card.nome}}</h5>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buscaQuery: '',
      query: '',
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
  computed: {

  }
};
</script>

<style scoped>
/* Seus estilos */
</style>
