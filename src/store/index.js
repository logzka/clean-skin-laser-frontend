import { createStore } from 'vuex';

import schedule from './schedule';

export default createStore({
  namespaced: true,
  modules: {
    schedule,
  },
});
