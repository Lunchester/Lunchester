import StockService from "@/services/StockService.ts";

const state = {
  items: []
};

const getters = {
  getStockProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.product.products.find(
        product => product.id === id
      );
      return {
        title: product.title,
        image: product.imgLink,
        quantity: quantity
      };
    });
  }
};

const mutations = {
  SET_STOCK_ITEMS(state, items) {
    state.items = items;
  }
};

const actions = {
  fetchStockItems({ commit }) {
    StockService.getStock()
      .then(response => {
        commit("SET_STOCK_ITEMS", response.data);
      })
      .catch(error => {
        console.log("ERROR: " + error.message);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
