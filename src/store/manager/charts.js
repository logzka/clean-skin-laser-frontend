/** Api */
import chart from '../../api/chart';

export default {
  state: {
    loadingManagerCharts: null,
    chart: null,
  },

  getters: {
    loadingManagerCharts: (state) => state.loadingManagerCharts,
    chart: (state) => state.chart,
  },

  actions: {
    setLoadingManagerCharts({ commit }, flag) {
      commit('SET_LOADING_MANAGER_CHARTS', flag);
    },

    /**
     * Get Chart
     * @param {String} param0 Chart type
     * @param {String} param1 Period
     */
    async getChart({ commit }, { chartName = 'service', period = 'month' }) {
      try {
        const chartData = await chart
          .find((chrt) => chrt.name === chartName) || {};

        commit('SET_CHART', {
          ...chartData,
          data: await chartData?.data
            .map((el) => ({
              ...el,
              count: el.count[period],
            })),
        });
      } catch (error) {
        throw Error(error);
      }
    },
  },

  mutations: {
    SET_LOADING_MANAGER_CHARTS(state, flag) {
      state.loadingManagerCharts = flag || false;
    },

    SET_CHART(state, data) {
      state.chart = data || null;
    },
  },
};
