import UserService from "@/services/UserService";

const state = {
  users: [],
  user: {}
};

const getters = {
  getRandomUser: state => {
    return state.users[Math.floor(Math.random() * state.users.length)];
  }
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_USER(state, user) {
    state.user = user;
  }
};

const actions = {
  fetchUsers({ commit, getters }) {
    UserService.getUsers()
      .then(response => {
        commit("SET_USERS", response.data);
        commit("SET_USER", getters.getRandomUser);
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
