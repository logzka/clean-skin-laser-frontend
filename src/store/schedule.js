import server from '@/server';

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

      console.log(params);

      try {
        // const schedule = await this.$axios.get('/getSchedule', { params });

        const schedule = server.scheduleApi;

        commit('SET_SCHEDULE', schedule);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_SCHEDULE(state, data) {
      state.schedule = data || null;
    },
  },
};
