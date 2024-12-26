import { createRouter, createWebHistory } from 'vue-router';

// Import components for pages
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import ProductPage from './components/ProductPage.vue';
import BuyPage from './components/BuyPage.vue';
import BlogPage from './components/BlogPage.vue';
import OpenBlog from './components/OpenBlog.vue';
import TestimonialsPage from './components/TestimonialsPage.vue';
import NotFoundPage from './components/NotFoundPage.vue';


// Components for dashboard
import IndexComponent from './components/dashboard/pages/IndexComponent.vue'; 
import LandingPage from './components/dashboard/pages/LandingPage.vue';
import AboutComponent from './components/dashboard/pages/AboutComponent.vue';
import TeamComponent from './components/dashboard/pages/TeamComponent.vue';
import ProductComponent from './components/dashboard/pages/ProductComponent.vue';
import OutletComponent from './components/dashboard/pages/OutletComponent.vue';
import TestimonialsComponent from './components/dashboard/pages/TestimonialComponent.vue';
import BlogComponent from './components/dashboard/pages/BlogComponent.vue';

// Components for login
import LoginComponent from './components/dashboard/LoginComponent.vue';

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Home - Simba Stationery' } },
  { path: '/about', component: AboutPage, meta: { title: 'About Us - Simba Stationery' } },
  { path: '/contact', component: ContactPage, meta: { title: 'Contact Us - Simba Stationery' } },
  { path: '/product', component: ProductPage, meta: { title: 'Products - Simba Stationery' } },
  { path: '/outlets', component: BuyPage, meta: { title: 'Our outlets - Simba Stationery' } },
  { path: '/blogs', component: BlogPage, meta: { title: 'Blogs - Simba Stationery' } },
  { path: '/open', component: OpenBlog, meta: { title: 'Open Blog - Simba Stationery' } },
  { 
    path: '/open/:id', 
    component: OpenBlog, 
    meta: { 
      title: 'Open Blog - Simba Stationery' 
    } 
  },


  // Protected routes for dashboard
  { 
    path: '/dashboard/', 
    component: IndexComponent, 
    meta: { 
      title: 'Dashboard - Simba Stationery', 
      noHeaderFooter: true,
      requiresAuth: true // This route is protected
    }
  },
  { 
    path: '/dashboard/Landing', 
    component: LandingPage, 
    meta: { 
      title: 'Landing - Simba Stationery', 
      noHeaderFooter: true,
      requiresAuth: true 
    }
  },
  { 
    path: '/dashboard/about', 
    component: AboutComponent, 
    meta: { 
      title: 'About - Simba Stationery', 
      noHeaderFooter: true,
      requiresAuth: true 
    }
  },
  { 
    path: '/dashboard/team', 
    component: TeamComponent, 
    meta: { 
      title: 'Team - Simba Stationery', 
      noHeaderFooter: true,
      requiresAuth: true 
    }
  },

  { 
    path: '/dashboard/product', 
    component: ProductComponent, 
    meta: { 
      title: 'product - Simba Stationery', 
      noHeaderFooter: true,
      requiresAuth: true 
    }
  },

  { 
    path: '/dashboard/outlet', 
    component: OutletComponent, 
    meta: { 
      title: 'Outlets - Simba Stationery', 
      noHeaderFooter: true,
      requiresAuth: true 
    }
  },

  { 
    path: '/dashboard/testimonial', 
    component: TestimonialsComponent, 
    meta: { 
      title: 'Testimonials - Simba Stationery', 
      noHeaderFooter: true,
      requiresAuth: true 
    }
  },

  { 
    path: '/dashboard/Blog', 
    component: BlogComponent, 
    meta: { 
      title: 'Blog - Simba Stationery', 
      noHeaderFooter: true,
      
    }
  },

  // Login page (accessible without authentication)
  { 
    path: '/login', 
    component: LoginComponent, 
    meta: { 
      title: 'Login - Simba Stationery',
      noHeaderFooter: true 
    }
  },

  { 
    path: '/:pathMatch(.*)*', 
    component: NotFoundPage, 
    meta: { 
      title: '404 - Page Not Found - Simba Stationery',
      noHeaderFooter: true,
    } 
  },

  // Other public pages
  { path: '/Testimonials', component: TestimonialsPage, meta: { title: 'Testimonials - Simba Stationery' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // Check if there's an auth token in localStorage
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Redirect to login page if the user is not authenticated
      next({ path: '/login' });
    } else {
      next(); // Allow the navigation if the user is authenticated
    }
  } else {
    next(); // Allow navigation to routes that don't require authentication
  }
});

// Set document title after each navigation
router.afterEach((to) => {
  document.title = to.meta.title || 'not found';
});

export default router;
