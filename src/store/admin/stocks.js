import stocks from '../../api/stocks';

export default {
  state: {
    stockForm: {
      id: null,
      name: '',
      image: null,
    },
    loadingAdminStocks: false,
    activeStocks: stocks,
  },

  getters: {
    stockForm: (state) => state.stockForm,
    loadingAdminStocks: (state) => state.loadingAdminStocks,
    activeStocks: (state) => state.activeStocks,
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

    /**
     * Set Active Stocks
     */
    setActiveStocks({ commit }, data) {
      commit('SET_ACTIVE_STOCKS', data);
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

    SET_ACTIVE_STOCKS(state, data) {
      state.activeStocks = data || [];
    },
  },
};
