import masters from '../api/masters';

export default {
  state: {
    masters: null,
  },

  getters: {
    masters: (state) => state.masters,
  },

  actions: {
    async getMasters({ commit }, {
      dateFree = null,
      timeFree = null,
      name = null,
      serviceType = null,
    }) {
      const params = {
        dateFree,
        timeFree,
        name,
        serviceType,
      };

      const paramskeys = Object.keys(params);

      paramskeys.forEach((key) => {
        if (!params[key]) delete params[key];
      });

      try {
        // const masters = await this.$axios.get('/getMasters', { params });

        commit('SET_MASTERS', masters);
      } catch (error) {
        throw Error(error);
      }
    },
  },
  mutations: {
    SET_MASTERS(state, data) {
      state.masters = data || null;
    },
  },
};
