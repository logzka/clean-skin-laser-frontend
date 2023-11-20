import services from '../api/services';

export default {
  state: {
    services: null,
  },

  getters: {
    services: (state) => state.services,
  },

  actions: {
    async getServices({ commit }, {
      master = null,
    }) {
      const params = {
        master,
      };

      const paramskeys = Object.keys(params);

      paramskeys.forEach((key) => {
        if (!params[key]) delete params[key];
      });

      try {
        // const services = await this.$axios.get('/getServices', { params });

        commit('SET_SERVICES', services);
      } catch (error) {
        throw Error(error);
      }
    },
  },
  mutations: {
    SET_SERVICES(state, data) {
      state.services = data || null;
    },
  },
};
