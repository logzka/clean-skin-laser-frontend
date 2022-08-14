import { createStore } from 'vuex';

import services from './services';
import masters from './masters';
import schedule from './schedule';
import studio from './studio';

export default createStore({
  namespaced: true,
  modules: {
    services,
    masters,
    schedule,
    studio,
  },
});
