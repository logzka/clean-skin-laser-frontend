export default {
  state: {
    activeBanner: null,
  },

  getters: {
    activeBanner: (state) => state.activeBanner,
  },

  actions: {
    /**
     * Get Active Banner
     */
    async getActiveBanner({ commit }) {
      try {
        /** Some 'asynchronous request' here */
        const activeBanner = {
          id: 1,
          services: ['byg76fgvf64f', 'bjhfjfjf78vm'],
          image: 'piling.webp',
          active: true,
        };

        commit('SET_ACTIVE_BANNER', activeBanner);

        return activeBanner;
      } catch (error) {
        throw Error(error);
      }
    },

    /**
     * Set Active Banner
     * @param {Object} bannerData
     */
    async setActiveBanner({ commit }, bannerData) {
      try {
        /** Some req. */
        commit('SET_ACTIVE_BANNER', bannerData);
      } catch (err) {
        console.error(err);
      }
    },
  },

  mutations: {
    SET_ACTIVE_BANNER(state, data) {
      state.activeBanner = data;
    },
  },
};
