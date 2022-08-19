import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import ru from 'element-plus/es/locale/lang/ru';
// import en from 'element-plus/es/locale/lang/en';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import Emitter from 'tiny-emitter';
import App from './App.vue';

import router from './router';
import store from './store';

import globalProperties from './global-properties';

// Global Components
import AppointmentButton from './global-components/AppointmentButton.vue';

const app = createApp(App);

app.config.globalProperties.$formatDate = globalProperties.formatDate;

/** Vue Emitter (for no $on, $off directives in Vue 3)
 * https://v3.ru.vuejs.org/ru/guide/migration/events-api.html#события-корневого-компонента
 */
const emitter = new Emitter();
app.config.globalProperties.$emitter = emitter;

const ElementPlusIconsVueEntries = Object.entries(ElementPlusIconsVue) || [];
ElementPlusIconsVueEntries.forEach((entry) => {
  const [key, component] = entry;
  app.component(key, component);
});

// Registration of Global Components
app.component('AppointmentButton', AppointmentButton);

app
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: ru,
  }).mount('#app');
