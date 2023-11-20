// import price from '../api/price';

/** Utils */
import {
  // addCollectionAndDocuments,
  getCollection,
} from '../utils/firebase';

export default {
  state: {
    price: null,
  },

  getters: {
    price: (state) => state.price,
  },

  actions: {
    async getPrice({ commit }) {
      try {
        // const price = await this.$axios.get('/getPrice', { params });
        // addCollectionAndDocuments('price', price);
        const price = await getCollection('price');

        commit('SET_PRICE', price);
      } catch (error) {
        throw Error(error);
      }
    },
  },
  mutations: {
    SET_PRICE(state, data) {
      state.price = data || null;
    },
  },
};
