import masters from '../../api/masters';

export default {
  state: {
    masterForm: {
      id: null,
      first_name: '',
      last_name: '',
      skills: '',
      experience: '',
      photo: null,
    },
    loadingAdminMasters: false,
    activeMasters: masters,
  },

  getters: {
    masterForm: (state) => state.masterForm,
    loadingAdminMasters: (state) => state.loadingAdminMasters,
    activeMasters: (state) => state.activeMasters,
  },

  actions: {
    /**
     * Set Loading Masters Flag
     * @param {Boolean} flag
     */
    setLoadingAdminMasters({ commit }, flag) {
      commit('SET_LOADING_MASTERS', flag);
    },

    /**
     * Set Master Form
     * @param {Object} formData
     */
    setMasterForm({ commit }, formData) {
      commit('SET_MASTER_FORM', formData);
    },

    /**
     * Clear Master Form
     */
    clearMasterForm({ commit }) {
      commit('CLEAR_MASTER_FORM');
    },

    /**
     * Set Active Masters
     */
    setActiveMasters({ commit }, data) {
      commit('SET_ACTIVE_MASTERS', data);
    },
  },

  mutations: {
    SET_LOADING_MASTERS(state, flag) {
      state.loadingAdminMasters = flag || false;
    },

    SET_MASTER_FORM(state, formData) {
      state.masterForm = {
        ...state.masterForm,
        ...formData,
      };
    },

    CLEAR_MASTER_FORM(state) {
      state.masterForm = {
        id: null,
        first_name: '',
        last_name: '',
        skills: '',
        experience: '',
        photo: null,
      };
    },

    SET_ACTIVE_MASTERS(state, data) {
      state.activeMasters = data || [];
    },
  },
};
