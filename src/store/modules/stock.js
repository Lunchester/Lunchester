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
        id: id,
        title: product.title,
        imgLink: product.imgLink,
        quantity: quantity
      };
    });
  }
};

const mutations = {
  SET_STOCK_ITEMS(state, items) {
    state.items = items;
  },
  ADD_ITEM_TO_STOCK(state, { id }) {
    state.items.push({
      id: id,
      quantity: 1
    });
  },
  REMOVE_ITEM_FROM_STOCK(state, { id }) {
    const stockItem = state.items.find(item => item.id == id);
    const stockItemIndex = state.items.indexOf(stockItem);

    console.log(stockItem, stockItemIndex);

    if (stockItemIndex > -1) {
      state.items.splice(stockItemIndex, 1);
    }
  },
  INCREMENT_ITEM_QUANTITY(state, { id }) {
    const stockItem = state.items.find(item => item.id === id);
    stockItem.quantity++;
  },
  DECREASE_ITEM_QUANTITY(state, { id }) {
    const stockItem = state.items.find(item => item.id === id);
    stockItem.quantity--;
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
  },
  addItemToStock({ state, commit }, product) {
    const stockItem = state.items.find(item => item.id === product.id);

    if (!stockItem) {
      commit("ADD_ITEM_TO_STOCK", { id: product.id });
    } else {
      commit("INCREMENT_ITEM_QUANTITY", stockItem);
    }
  },
  removeItemFromStock({ state, commit }, product) {
    const stockItem = state.items.find(item => item.id === product.id);

    if (stockItem.quantity == 1) {
      commit("REMOVE_ITEM_FROM_STOCK", { id: product.id });
    } else {
      commit("DECREASE_ITEM_QUANTITY", stockItem);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
