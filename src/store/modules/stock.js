import StockService from "@/services/StockService.js";

const state = {
  items: []
};

const getters = {
  // Get stock product properties
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
  // Fetch stock items from database
  fetchStockItems({ commit }) {
    StockService.getStockItems()
      .then(response => {
        commit("SET_STOCK_ITEMS", response.data);
      })
      .catch(error => {
        console.log("ERROR: " + error.message);
      });
  },
  // Add item to stock or increment if already in stock
  addItemToStock({ state, commit }, product) {
    const stockItem = state.items.find(item => item.id === product.id);

    if (!stockItem) {
      StockService.postStockItem({ id: product.id, quantity: 1 })
        .then(() => {
          commit("ADD_ITEM_TO_STOCK", product.id);
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    } else {
      const newQuantity = stockItem.quantity + 1;

      StockService.patchStockItem(stockItem, newQuantity)
        .then(() => {
          commit("INCREMENT_ITEM_QUANTITY", stockItem);
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    }
  },
  // Remove item from stock or decrease quantity
  removeItemFromStock({ state, commit }, product) {
    const stockItem = state.items.find(item => item.id === product.id);

    if (stockItem.quantity == 1) {
      StockService.deleteStockItem(product)
        .then(() => {
          commit("REMOVE_ITEM_FROM_STOCK", { id: product.id });
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    } else {
      const newQuantity = stockItem.quantity - 1;

      StockService.patchStockItem(stockItem, newQuantity)
        .then(() => {
          commit("DECREASE_ITEM_QUANTITY", stockItem);
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
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
