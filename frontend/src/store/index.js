import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: '',
    username: '',
    selector: '',
    selected: [],
  },
  getters: {
    isLoggedIn: state => {
      return state.token;
    },
  },
  mutations: {
    set_token: (state, token) => {
      state.token = token;
    },
    set_username: (state, username) => {
      state.username = username;
    },
    reset: state => {
      state.token = ''; state.username = '';
    },
    select_one:(state, obj) => {
      state.selected.push(obj);
    },
    // UNSELECT_ONE:(state, obj) => {
    // },
    set_selected:(state, selected) => {
      state.selected = selected;
    },
    set_selector:(state, selector) => {
      state.selector = selector;
    }
  },
  actions: {
    login: ({ commit, dispatch }, { token, username }) => {
      commit('set_token', token);
      commit('set_username', username);
      // set auth header
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit('resset', '');
    },
  }
})
