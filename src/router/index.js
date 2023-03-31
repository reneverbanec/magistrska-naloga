import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Lestvica from '../views/Lestvica.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lestvica',
      name: 'lestvica',
      component: Lestvica,
    },
  ],
});

export default router;
