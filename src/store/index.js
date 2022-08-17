import { createStore } from 'vuex';

import stocks from './stocks';
import services from './services';
import masters from './masters';
import schedule from './schedule';
import studio from './studio';
import lasers from './lasers';

export default createStore({
  namespaced: true,
  modules: {
    stocks,
    services,
    masters,
    schedule,
    studio,
    lasers,
  },
});
