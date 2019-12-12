import SpecialDayService from "@/services/SpecialDayService";

const state = {
  items: [],
  votes: []
};

const getters = {
  getSpecialDayItemTotalVotes: state => id => {
    return state.votes.reduce((total, vote) => {
      if (vote.itemId == id) {
        return total + 1;
      }
    }, 0);
  }
};

const mutations = {
  SET_SPECIAL_DAY_ITEMS(state, items) {
    state.items = items;
  },
  SET_SPECIAL_DAY_VOTES(state, votes) {
    state.votes = votes;
  }
};

const actions = {
  fetchSpecialDayItems({ commit, dispatch }) {
    dispatch("fetchSpecialDayVotes");
    SpecialDayService.getSpecialDayItems()
      .then(response => {
        commit("SET_SPECIAL_DAY_ITEMS", response.data);
      })
      .catch(error => {
        console.log("ERROR: " + error.message);
      });
  },
  fetchSpecialDayVotes({ commit }) {
    SpecialDayService.getSpecialDayVotes()
      .then(response => {
        commit("SET_SPECIAL_DAY_VOTES", response.data);
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
