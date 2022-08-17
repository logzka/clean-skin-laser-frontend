import server from '@/server';

const { lasersApi } = server;

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

        const lasers = lasersApi;

        commit('SET_LASERS', lasers);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_LASERS(state, data) {
      state.lasers = data || null;
    },
  },
};
