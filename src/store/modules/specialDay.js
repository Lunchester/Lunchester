import SpecialDayService from "@/services/SpecialDayService";

const state = {
  items: []
};

const getters = {};

const mutations = {
  SET_SPECIAL_DAY_ITEMS(state, items) {
    state.items = items;
  }
};

const actions = {
  fetchSpecialDayItems({ commit }) {
    SpecialDayService.getSpecialDayItem()
      .then(response => {
        commit("SET_SPECIAL_DAY_ITEMS", response.data);
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
