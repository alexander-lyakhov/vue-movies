import { getField, updateField } from 'vuex-map-fields';
import api from '@/api';

export default {
  namespaced: true,

  state: {
    movies: [],
    total: 0,
    search: '',
    searchBy: 'title',
    sortBy: '',
    sortOrder: '',
    offset: 0,
    limit: 12,
  },

  getters: {
    getField,
  },

  mutations: {
    updateField,

    SET_SEARCH(state, val) {
      if (state.search !== val) {
        state.search = val;
      }
    },

    POPULATE_MOVIES(state, data) {
      state.movies = data.data;
      state.total = data.total;
    },

  },

  actions: {
    async GET_MOVIES({ state, commit }) {
      const params = {
        search: state.search,
        searchBy: state.searchBy,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
        offset: state.offset,
        limit: state.limit,
      };

      const res = await api.getMovies(params);
      commit('POPULATE_MOVIES', res.data);
      return res;
    },
  },
};
