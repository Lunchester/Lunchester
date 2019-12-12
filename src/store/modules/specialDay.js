import SpecialDayService from "@/services/SpecialDayService";

const state = {
  items: [],
  votes: []
};

const getters = {
  getSpecialDayItemTotalVotes: state => id => {
    let total = 0;
    state.votes.forEach(vote => {
      if (vote.itemId == id) {
        total += 1;
      }
    });
    return total;
  }
};

const mutations = {
  SET_SPECIAL_DAY_ITEMS(state, items) {
    state.items = items;
  },
  SET_SPECIAL_DAY_VOTES(state, votes) {
    state.votes = votes;
  },
  ADD_SPECIAL_DAY_VOTE(state, vote) {
    state.votes.push(vote);
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
  },
  addSpecialDayVote({ commit }, vote) {
    SpecialDayService.postSpecialDayVote(vote)
      .then(() => {
        commit("ADD_SPECIAL_DAY_VOTE", vote);
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
