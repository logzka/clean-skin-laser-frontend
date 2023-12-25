import stocks from '../api/stocks';

// const PATH = '/stocks';

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
        // const stocks = await this.$axios.get(PATH);

        commit('SET_STOCKS', stocks);
      } catch (error) {
        throw Error(error);
      }
    },

    /**
     * Set stocks
     */
    setStocks({ commit }, data) {
      commit('SET_STOCKS', data);
    },

    async createStock({ getters, commit }, stockData) {
      if (!stockData) throw Error('Не получены данные по акции.');

      const params = stockData;
      params.id = Math.random();

      try {
        // await this.$axios.post(PATH, params);

        const currentStocks = [
          { ...params },
          ...getters.stocks || stocks,
        ];

        commit('SET_STOCKS', currentStocks);
      } catch (error) {
        throw Error(error);
      }
    },

    async updateStock({ getters, commit }, stockData) {
      if (!stockData) throw Error('Не получены данные по акции.');

      const params = stockData;

      try {
        // await this.$axios.patch(PATH, params);

        const currentStocks = getters.stocks
          .map((stock) => {
            if (stock.id === params.id) return { ...params };
            return stock;
          });

        commit('SET_STOCKS', currentStocks);
      } catch (error) {
        throw Error(error);
      }
    },

    async deleteStock({ getters, commit }, stockId) {
      if (!stockId) throw Error('Не указан ID акции.');

      try {
        // await this.$axios.delete(`${PATH}/delete/${stockId}`);

        const currentStocks = (getters.stocks || [])
          .filter((stock) => stock.id !== stockId) || [];

        commit('SET_STOCKS', currentStocks);
      } catch (error) {
        throw Error(error);
      }
    },
  },

  mutations: {
    SET_STOCKS(state, data) {
      state.stocks = data || null;
    },
  },
};
