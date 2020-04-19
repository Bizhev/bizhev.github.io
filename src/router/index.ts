import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

const urls = {
  develop: '/',
  production: process.env.VUE_APP_BASE_URL,
};

const base = process.env.NODE_ENV === 'development' ? urls.develop : urls.production;
const mode = (process.env.NODE_ENV === 'production') ? 'hash' : 'history';

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode,
  base,
  routes,
});

export default router;
