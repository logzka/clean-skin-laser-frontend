import services from '../api/services';

export default {
  state: {
    services: null,
    servicesMap: {},
  },

  getters: {
    services: (state) => state.services,
    servicesMap: (state) => state.servicesMap,
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
        commit('SET_SERVICES_MAP', services);
      } catch (error) {
        throw Error(error);
      }
    },
  },
  mutations: {
    SET_SERVICES(state, data) {
      state.services = data || null;
    },

    SET_SERVICES_MAP(state, data) {
      state.servicesMap = (data || [])
        .reduce((acc, el) => ({
          ...acc,
          [el.id]: el,
        }), {});
    },
  },
};
