import Vue from "vue";
import Vuex from "vuex";

import product from "@/store/modules/product.js";
import stock from "@/store/modules/stock.js";
import grocery from "@/store/modules/grocery.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    product,
    stock,
    grocery
  }
});
