import { createStore } from 'vuex';

import home from './home';
import banner from './banner';
import stocks from './stocks';
import services from './services';
import masters from './masters';
import schedule from './schedule';
import studio from './studio';
import lasers from './lasers';
import price from './price';

/** Admin */
import bannerStocks from './admin/banner';
import adminStocks from './admin/stocks';

export default createStore({
  namespaced: true,
  modules: {
    home,
    banner,
    stocks,
    services,
    masters,
    schedule,
    studio,
    lasers,
    price,

    bannerStocks,
    adminStocks,
  },
});
