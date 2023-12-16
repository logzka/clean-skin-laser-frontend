import banners from '../../api/banners';

export default {
  state: {
    bannerForm: {
      services: [],
      image: null,
    },
    loadingAdminBanner: false,
    banners: null,
  },

  getters: {
    bannerForm: (state) => state.bannerForm,
    loadingAdminBanner: (state) => state.loadingAdminBanner,
    banners: (state) => state.banners,
  },

  actions: {
    setLoadingAdminBanner({ commit }, flag) {
      commit('SET_LOADING_ADMIN_BANNER', flag);
    },

    /**
     * Get Banners
     */
    async getBanners({ commit }) {
      try {
        // const banners = await this.$axios.get(PATH);

        commit('SET_BANNERS', banners);
      } catch (error) {
        throw Error(error);
      }
    },

    /**
     * Set Banners
     */
    setBanners({ commit }, data) {
      commit('SET_BANNERS', data);
    },

    /**
     * Set Banner Form
     * @param {Object} formData
     */
    setBannerForm({ commit }, formData) {
      commit('SET_BANNER_FORM', formData);
    },

    /**
     * Clear Banner Form
     */
    clearBannerForm({ commit }) {
      commit('CLEAR_BANNER_FORM');
    },

    /**
     * Create Banner
     * @param {Object} bannerData
     */
    async createBanner({ getters, commit }, bannerData) {
      if (!bannerData) throw Error('Не получены данные баннера.');

      const params = bannerData;
      params.id = Math.random();

      try {
        // await this.$axios.post(PATH, params);

        const currentBanners = [
          { ...params },
          ...getters.banners || banners,
        ];

        commit('SET_BANNERS', currentBanners);
      } catch (error) {
        throw Error(error);
      }
    },

    /**
     * Update Banner
     * @param {Object} bannerData
     */
    async updateBanner({ getters, commit }, bannerData) {
      if (!bannerData) throw Error('Не получены данные баннера.');

      const params = bannerData;

      try {
        // await this.$axios.patch(PATH, params);

        const currentBanners = getters.banners
          .map((banner) => {
            if (banner.id === params.id) return { ...params };
            return banner;
          });

        commit('SET_BANNERS', currentBanners);
      } catch (error) {
        throw Error(error);
      }
    },

    /**
     * Delete Banner
     * @param {String} bannerId
     */
    async deleteBanner({ getters, commit }, bannerId) {
      if (!bannerId) throw Error('Не указан ID баннера.');

      try {
        // await this.$axios.delete(`${PATH}/delete/${bannerId}`);

        const currentBanners = (getters.banners || [])
          .filter((banner) => banner.id !== bannerId) || [];

        commit('SET_BANNERS', currentBanners);
      } catch (error) {
        throw Error(error);
      }
    },
  },

  mutations: {
    SET_LOADING_ADMIN_BANNER(state, flag) {
      state.loadingAdminBanner = flag || false;
    },

    SET_BANNERS(state, data) {
      state.banners = data || null;
    },

    SET_BANNER_FORM(state, formData) {
      state.bannerForm = {
        ...state.bannerForm,
        ...formData,
      };
    },

    CLEAR_BANNER_FORM(state) {
      state.bannerForm = {
        services: [],
        image: null,
      };
    },
  },
};
