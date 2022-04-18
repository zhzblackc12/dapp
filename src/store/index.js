import Vue from "vue";
import Vuex from "vuex";
import busdtStore from "./modules/busdt";
import web3ModalStore from "./modules/web3Modal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    web3Modal: web3ModalStore,
    busdt: busdtStore
  },
});
