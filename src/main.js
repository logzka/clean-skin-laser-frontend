import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import ru from 'element-plus/es/locale/lang/ru';
// import en from 'element-plus/es/locale/lang/en';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';

import router from './router';
import store from './store';

import globalProperties from './global-properties';

const app = createApp(App);

app.config.globalProperties.$formatDate = globalProperties.formatDate;

// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: ru,
  }).mount('#app');
