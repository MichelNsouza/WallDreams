<template>
  <div class="col-md-4 d-flex justify-content-center align-items-center">
  <div class="card mx-2 mt-3">
    <div class="row g-0">
      <div class="col-12">
        <div class="img-container">
          <img :src="'http://ec2-54-207-67-252.sa-east-1.compute.amazonaws.com/api/' + card.url"
            class="card-img-top rounded img-fluid tamanho" alt="...">
        </div>
      </div>
      <div class="col-12">
        <div class="card-body p-0 m-0">
          <div @click.stop="abrirModal()" class=" mx-3 clickable d-flex justify-content-between p-1">
            <div class="d-flex flex-column mx-2">
              <p class="card-text  p-1 pb- mb-0"><strong class="text-justify">{{ card.title }}</strong></p>
              <p class="p-1 mb-1 mb-0">4k | Full HD | HD</p>
            </div>
            <img  src="/src/assets/icons/icone-download.svg" alt="icone download">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <template v-if="exibeModal">
    <ModalComponente :card="card" :categories="categories" @fechar-modal="fecharModal" />
  </template>
</template>

<script>
import ModalComponente from '@/components/ModalComponente.vue';
import {
  getTodasCategorias
} from '@/services/api';

export default {
  name: 'CardComponente',
  components: {
    ModalComponente
  },
  data() {
    return {
      exibeModal: false,
      categories: [],
    }
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    abrirModal(card) {
      //this.fetchCategoria(card.category_id);
      this.exibeModal = true;
    },
    fecharModal() {
      this.exibeModal = false;
    },
    async fetchCategories() {
      try {
        const response = await getTodasCategorias();
        this.categories = response.data;
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>

<style scoped>
.card {
  background-color: var(--headerColor);
  padding: 0;
  margin: 0;
  max-width: 340px;
  max-height: 305px;
  color: white;
  overflow: hidden;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
  overflow: hidden;
}

.tamanho {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  color: white;
}

.clickable {
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
}

.clickable:hover {
  transform: scale(1.02);
  opacity: 0.8;
}
</style>
