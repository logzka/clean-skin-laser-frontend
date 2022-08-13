import { createStore } from 'vuex';

import masters from './masters';
import schedule from './schedule';

export default createStore({
  namespaced: true,
  modules: {
    masters,
    schedule,
  },
});
