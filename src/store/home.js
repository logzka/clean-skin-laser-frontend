export default {
  state: {
    loading: false,
  },

  getters: {
    loading: (state) => state.loading,
  },

  actions: {
    setLoading({ commit }, flag) {
      commit('SET_LOADING', flag);
    },
  },

  mutations: {
    SET_LOADING(state, flag) {
      state.loading = flag || false;
    },
  },
};
