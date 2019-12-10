import GroceryService from "@/services/GroceryService.ts";
import StockService from "@/services/StockService";

const state = {
  items: [],
  taxRate: 0.09
};

const getters = {
  getGroceryProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.product.products.find(
        product => product.id === id
      );
      return {
        id: id,
        title: product.title,
        price: product.price,
        imgLink: product.imgLink,
        quantity: quantity
      };
    });
  },
  getGroceryTotalPrice: (state, getters) => {
    return getters.getGroceryProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },
  getGroceryTaxPrice: (state, getters) => {
    return getters.getGroceryTotalPrice * state.taxRate;
  }
};

const mutations = {
  SET_GROCERY_ITEMS(state, items) {
    state.items = items;
  },
  ADD_ITEM_TO_GROCERY(state, { id }) {
    state.items.push({
      id: id,
      quantity: 1
    });
  },
  REMOVE_ITEM_FROM_GROCERY(state, { id }) {
    const groceryItem = state.items.find(item => item.id == id);
    const groceryItemIndex = state.items.indexOf(groceryItem);

    if (groceryItemIndex > -1) {
      state.items.splice(groceryItemIndex, 1);
    }
  },
  INCREMENT_ITEM_QUANTITY(state, { id }) {
    const groceryItem = state.items.find(item => item.id === id);
    groceryItem.quantity++;
  },
  DECREASE_ITEM_QUANTITY(state, { id }) {
    const groceryItem = state.items.find(item => item.id === id);
    groceryItem.quantity--;
  }
};

const actions = {
  fetchGroceryItems({ commit }) {
    GroceryService.getGroceryItems()
      .then(response => {
        commit("SET_GROCERY_ITEMS", response.data);
      })
      .catch(error => {
        console.log("ERROR: " + error.message);
      });
  },
  addItemToGrocery({ state, commit }, product) {
    const groceryItem = state.items.find(item => item.id === product.id);

    if (!groceryItem) {
      GroceryService.postGroceryItem({ id: product.id, quantity: 1 })
        .then(() => {
          commit("ADD_ITEM_TO_GROCERY", { id: product.id });
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    } else {
      const newQuantity = groceryItem.quantity + 1;

      GroceryService.patchGroceryItem(groceryItem, newQuantity)
        .then(() => {
          commit("INCREMENT_ITEM_QUANTITY", groceryItem);
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    }
  },
  removeItemFromGrocery({ state, commit }, product) {
    const groceryItem = state.items.find(item => item.id === product.id);

    if (groceryItem.quantity == 1) {
      GroceryService.deleteGroceryItem(product)
        .then(() => {
          commit("REMOVE_ITEM_FROM_GROCERY", { id: product.id });
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    } else {
      const newQuantity = groceryItem.quantity - 1;

      GroceryService.patchGroceryItem(groceryItem, newQuantity)
        .then(() => {
          commit("DECREASE_ITEM_QUANTITY", groceryItem);
        })
        .catch(error => {
          console.log(error.message);
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
