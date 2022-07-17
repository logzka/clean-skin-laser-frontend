import { createRouter, createWebHistory } from 'vue-router';
import Site from '../views/Site.vue';
import Admin from '../views/Admin.vue';

const routes = [
  {
    path: '/',
    name: 'site',
    component: Site,
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
