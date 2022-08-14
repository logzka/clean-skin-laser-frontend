import server from '@/server';

const { mastersApi } = server;

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

        const masters = mastersApi;

        commit('SET_MASTERS', masters);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_MASTERS(state, data) {
      state.masters = data || null;
    },
  },
};
