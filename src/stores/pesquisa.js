import { defineStore } from 'pinia';

export const pesquisaStore = defineStore('pesquisa', {
  state: () => ({
    // Defina seu estado reativo aqui
    pesquisa: ''
  }),
  getters: {
    // Opcional: getters para retornar dados derivados do estado
  },
  actions: {
    // Opcional: ações para modificar o estado
    setPesquisa(novaPesquisa) {
      this.pesquisa = novaPesquisa;
    }
  }
})