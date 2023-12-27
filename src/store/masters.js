import masters from '../api/masters';

export default {
  state: {
    masters: null,
  },

  getters: {
    masters: (state) => state.masters,
  },

  actions: {
    /**
     * Get masters
     * @param {*} param0
     * @param {*} param1
     */
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

    /**
     * Set masters
     * @param {*} param0
     * @param {*} data
     */
    setMasters({ commit }, data) {
      commit('SET_MASTERS', data);
    },

    async createMaster({ getters, commit }, masterData) {
      if (!masterData) throw Error('Не получены данные мастера.');

      const params = masterData;
      params.id = Math.random();

      try {
        // await this.$axios.post(PATH, params);

        const currentMasters = [
          { ...params },
          ...getters.masters || masters,
        ];

        commit('SET_MASTERS', currentMasters);
      } catch (error) {
        throw Error(error);
      }
    },

    async updateMaster({ getters, commit }, masterData) {
      if (!masterData) throw Error('Не получены данные по мастеру.');

      const params = masterData;

      try {
        // await this.$axios.patch(PATH, params);

        const currentMasters = getters.masters
          .map((master) => {
            if (master.id === params.id) return { ...params };
            return master;
          });

        commit('SET_MASTERS', currentMasters);
      } catch (error) {
        throw Error(error);
      }
    },

    async deleteMaster({ getters, commit }, masterId) {
      if (!masterId) throw Error('Не указан ID мастера.');

      try {
        // await this.$axios.delete(`${PATH}/delete/${masterId}`);

        const currentMasters = (getters.masters || [])
          .filter((master) => master.id !== masterId) || [];

        commit('SET_MASTERS', currentMasters);
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
