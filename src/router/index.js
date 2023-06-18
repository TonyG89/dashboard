import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LogbookTable from '../views/LogbookTable.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/',
  },
  {
    path: '/logbook',
    name: 'logbook',
    component: LogbookTable,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




