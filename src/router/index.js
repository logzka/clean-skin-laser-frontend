import { createRouter, createWebHistory } from 'vue-router';

import MainCalendar from '../components/site/main/MainCalendar.vue';
import MainMasters from '../components/site/main/MainMasters.vue';
import MainStudio from '../components/site/main/MainStudio.vue';
import MainLasers from '../components/site/main/MainLasers.vue';
import MainPrice from '../components/site/main/MainPrice.vue';
import MainContacts from '../components/site/main/MainContacts.vue';

import Site from '../views/Site.vue';
import Admin from '../views/Admin.vue';

const routes = [
  {
    path: '/',
    name: 'site',
    component: Site,
    children: [
      {
        path: '/calendar',
        name: 'calendar',
        component: MainCalendar,
      }, {
        path: '/masters',
        name: 'masters',
        component: MainMasters,
      }, {
        path: '/studio',
        name: 'studio',
        component: MainStudio,
      }, {
        path: '/lasers',
        name: 'lasers',
        component: MainLasers,
      }, {
        path: '/price',
        name: 'price',
        component: MainPrice,
      }, {
        path: '/contacts',
        name: 'contacts',
        component: MainContacts,
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
