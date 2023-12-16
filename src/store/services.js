import services from '../api/services';

export default {
  state: {
    services: null,
    servicesIterator: {},
  },

  getters: {
    services: (state) => state.services,
    servicesIterator: (state) => state.servicesIterator,
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
        await commit('SET_SERVICES_ITERATOR', services);
      } catch (error) {
        throw Error(error);
      }
    },
  },
  mutations: {
    SET_SERVICES(state, data) {
      state.services = data || null;
    },

    SET_SERVICES_ITERATOR(state, data) {
      state.servicesIterator = (data || [])
        .reduce((acc, el) => ({
          ...acc,
          [el.id]: el,
        }), {});
    },
  },
};
