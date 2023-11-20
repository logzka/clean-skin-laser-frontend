import studio from '../api/studio';

export default {
  state: {
    studio: null,
  },

  getters: {
    studio: (state) => state.studio,
  },

  actions: {
    async getStudio({ commit }) {
      try {
        // const studio = await this.$axios.get('/getStudio');

        commit('SET_STUDIO', studio);
      } catch (error) {
        throw Error(error);
      }
    },
  },
  mutations: {
    SET_STUDIO(state, data) {
      state.studio = data || null;
    },
  },
};
