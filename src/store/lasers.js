import lasers from '../api/lasers';

export default {
  state: {
    lasers: null,
  },

  getters: {
    lasers: (state) => state.lasers,
  },

  actions: {
    async getLasers({ commit }) {
      try {
        // const lasers = await this.$axios.get('/getLasers');

        commit('SET_LASERS', lasers);
      } catch (error) {
        throw Error(error);
      }
    },
  },
  mutations: {
    SET_LASERS(state, data) {
      state.lasers = data || null;
    },
  },
};
