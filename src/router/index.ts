import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

const urls = {
  develop: '/',
  production: process.env.VUE_APP_BASE_URL,
};

const base = process.env.NODE_ENV === 'development' ? urls.develop : urls.production;
const mode = 'history';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = new VueRouter({
  mode,
  base,
  routes,
});

export default router;
