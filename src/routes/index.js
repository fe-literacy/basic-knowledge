import { createRouter, createWebHistory } from 'vue-router';

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/svg',
    name: 'svg',
    component: () => import('../views/svg/index.vue'),
  }
];

export default function initRouter() {
  const router = createRouter({
    history: createWebHistory(),
    routes: baseRoutes,
  });
  return router;
}
