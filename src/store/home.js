export default {
  state: {
    isCollapse: false,
    loading: false,
  },

  getters: {
    isCollapse: (state) => state.isCollapse,
    loading: (state) => state.loading,
  },

  actions: {
    setIsCollapse({ commit }, flag) {
      commit('SET_IS_COLLAPSE', flag);
    },

    setLoading({ commit }, flag) {
      commit('SET_LOADING', flag);
    },
  },

  mutations: {
    SET_IS_COLLAPSE(state, flag) {
      state.isCollapse = flag || false;
    },

    SET_LOADING(state, flag) {
      state.loading = flag || false;
    },
  },
};
