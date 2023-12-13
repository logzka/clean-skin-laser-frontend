export default {
  state: {
    stockForm: {
      id: null,
      name: '',
      image: null,
    },
    loadingAdminStocks: false,
  },

  getters: {
    stockForm: (state) => state.stockForm,
    loadingAdminStocks: (state) => state.loadingAdminStocks,
  },

  actions: {
    /**
     * Set Loading Stocks Flag
     * @param {Boolean} flag
     */
    setLoadingAdminStocks({ commit }, flag) {
      commit('SET_LOADING_STOCKS', flag);
    },

    /**
     * Set Stock Form
     * @param {Object} formData
     */
    setStockForm({ commit }, formData) {
      commit('SET_STOCK_FORM', formData);
    },

    /**
     * Clear Stock Form
     */
    clearStockForm({ commit }) {
      commit('CLEAR_STOCK_FORM');
    },
  },

  mutations: {
    SET_LOADING_STOCKS(state, flag) {
      state.loadingAdminStocks = flag || false;
    },

    SET_STOCK_FORM(state, formData) {
      state.stockForm = {
        ...state.stockForm,
        ...formData,
      };
    },

    CLEAR_STOCK_FORM(state) {
      state.stockForm = {
        id: null,
        name: '',
        image: null,
      };
    },
  },
};
