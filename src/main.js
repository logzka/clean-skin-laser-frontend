import { createApp } from 'vue';

// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';

import router from './router';
import store from './store';

const app = createApp(App);
app
  .use(store)
  .use(router)
//   .use(ElementUI)
  .mount('#app');
