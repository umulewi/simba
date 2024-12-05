import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import ProductPage from './components/ProductPage.vue';
import BuyPage from './components/BuyPage.vue';

// Define routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/product', component: ProductPage },
  {path: '/buy',component:BuyPage},
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
