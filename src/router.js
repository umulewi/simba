import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import ProductPage from './components/ProductPage.vue';
import BuyPage from './components/BuyPage.vue';


const routes = [
  { path: '/', component: HomePage, meta: { title: 'Home - Simba Stationery' } },
  { path: '/about', component: AboutPage, meta: { title: 'About Us - Simba Stationery' } },
  { path: '/contact', component: ContactPage, meta: { title: 'Contact Us - Simba Stationery' } },
  { path: '/product', component: ProductPage, meta: { title: 'Products - Simba Stationery' } },
  { path: '/buy', component: BuyPage, meta: { title: 'Buy Now - Simba Stationery' } },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title - My App';
});

export default router;
