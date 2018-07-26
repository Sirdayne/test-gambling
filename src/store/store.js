import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    year: null,
  },
  getters: {
    getYear: (state) => {
      return state.year;
    },
  },
  mutations: {
    setYear: (state, payload) => {
      state.year = payload;
    },
  },
  actions: {
    actionSetYear: ({
      commit
    }, payload) => {
      commit('setYear', payload);
    },
  },
  modules: {

  }
});
