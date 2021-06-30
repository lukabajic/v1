import { createStore } from "vuex";

export default createStore({
  state: {
    repos: [],
    show: false,
    contributors: [],
  },
  mutations: {
    fetchRepos(state, payload) {
      state.repos = payload;
    },

    fetchContributors(state, payload) {
      
      state.show = true;

      return state.contributors = payload;
    },
    hide(state) {
      state.show = false;
    },
  },
  actions: {
    async getRepos(context) {
      const res = await fetch("https://api.github.com/repositories");
      const data = await res.json();
      context.commit("fetchRepos", data);
    },
    async getContributors(context, payload) {
      const res = await fetch(payload.contributors_url);
      const data = await res.json();
      context.commit("fetchContributors", data);
    },
  },
  modules: {},
});
