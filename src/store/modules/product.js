import ProductService from "@/services/ProductService.js";

const state = {
  products: []
};

const getters = {
  getProductById: state => id => {
    return state.products.find(product => product.id === id);
  }
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  }
};

const actions = {
  // Fetch product from database
  fetchProducts({ commit }) {
    ProductService.getProducts()
      .then(response => {
        commit("SET_PRODUCTS", response.data);
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
