import server from '@/server';

const { stocksApi } = server;

export default {
  state: {
    stocks: null,
  },

  getters: {
    stocks: (state) => state.stocks,
  },

  actions: {
    async getStocks({ commit }) {
      try {
        // const stocks = await this.$axios.get('/getStocks');

        const stocks = stocksApi;

        commit('SET_STOCKS', stocks);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_STOCKS(state, data) {
      state.stocks = data || null;
    },
  },
};
