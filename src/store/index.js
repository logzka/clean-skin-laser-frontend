import { createStore } from 'vuex';

import services from './services';
import masters from './masters';
import schedule from './schedule';

export default createStore({
  namespaced: true,
  modules: {
    services,
    masters,
    schedule,
  },
});
