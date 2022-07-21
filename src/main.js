import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import ru from 'element-plus/es/locale/lang/ru';
import en from 'element-plus/es/locale/lang/en';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';

import router from './router';
import store from './store';

const app = createApp(App);

// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: process.env.LOCALE === 'ru' ? ru : en,
  })
  .mount('#app');
