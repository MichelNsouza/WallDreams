import { defineStore } from 'pinia';

export const pesquisaStore = defineStore('pesquisa', {
  state: () => ({
    pesquisa: ''
  }),
  actions: {
    setPesquisa(novaPesquisa) {
      this.pesquisa = novaPesquisa;
    }
  }
})