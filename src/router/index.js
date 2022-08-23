import { createRouter, createWebHistory } from 'vue-router';

// import HomeMain from '../components/home/HomeMain.vue';
import HomeMainCalendar from '../components/home/home-main/HomeMainCalendar.vue';
import HomeMainMasters from '../components/home/home-main/HomeMainMasters.vue';
import HomeMainStudio from '../components/home/home-main/HomeMainStudio.vue';
import HomeMainLasers from '../components/home/home-main/HomeMainLasers.vue';
import HomeMainPrice from '../components/home/home-main/HomeMainPrice.vue';
import HomeMainContacts from '../components/home/home-main/HomeMainContacts.vue';

import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Manager from '../views/Manager.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/calendar',
        name: 'calendar',
        component: HomeMainCalendar,
      }, {
        path: '/masters',
        name: 'masters',
        component: HomeMainMasters,
      }, {
        path: '/studio',
        name: 'studio',
        component: HomeMainStudio,
      }, {
        path: '/lasers',
        name: 'lasers',
        component: HomeMainLasers,
      }, {
        path: '/price',
        name: 'price',
        component: HomeMainPrice,
      }, {
        path: '/contacts',
        name: 'contacts',
        component: HomeMainContacts,
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
