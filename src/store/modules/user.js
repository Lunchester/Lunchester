import UserService from "@/services/UserService";

const state = {
  users: []
};

const getters = {
  getRandomUser: state => {
    return state.users[Math.floor(Math.random() * state.users.length)];
  }
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  }
};

const actions = {
  fetchUsers({ commit }) {
    UserService.getUsers()
      .then(response => {
        commit("SET_USERS", response.data);
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
