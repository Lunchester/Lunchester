import GroceryService from "@/services/GroceryService.ts";

const state = {
  items: []
};

const getters = {
  getGroceryProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.product.products.find(
        product => product.id === id
      );
      return {
        title: product.title,
        price: product.price,
        image: product.imgLink,
        quantity: quantity
      };
    });
  }
};

const mutations = {
  SET_GROCERY_ITEMS(state, items) {
    state.items = items;
  }
};

const actions = {
  fetchGroceryItems({ commit }) {
    GroceryService.getGroceries()
      .then(response => {
        commit("SET_GROCERY_ITEMS", response.data);
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
