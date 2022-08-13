import server from '@/server';

const { scheduleApi } = server;

export default {
  state: {
    schedule: null,
  },

  getters: {
    schedule(state) {
      return state.schedule;
    },
  },

  actions: {
    // TODO: put the date RANGE in future
    async getSchedule({ commit }, {
      date = new Date(),
      master = null,
      type = null,
    }) {
      const params = {
        date,
        type,
        master,
      };

      const paramskeys = Object.keys(params);

      paramskeys.forEach((key) => {
        if (!params[key]) delete params[key];
      });

      try {
        // const schedule = await this.$axios.get('/getSchedule', { params });

        const schedule = scheduleApi;

        commit('SET_SCHEDULE', schedule);
      } catch (error) {
        console.error(error);
      }
    },

    setSchedule({ commit }, data) {
      commit('SET_SCHEDULE', data || null);
    },

    resetSchedule({ commit }) {
      commit('SET_SCHEDULE', null);
    },
  },
  mutations: {
    SET_SCHEDULE(state, data) {
      state.schedule = data || null;
    },
  },
};
