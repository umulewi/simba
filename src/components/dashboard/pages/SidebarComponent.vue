<template>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <aside :class="['left-sidebar', { 'sidebar-collapsed': !sidebarVisible }]">
      <div>
        <div class="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" class="text-nowrap logo-img">
            <img :src="require('@/assets/img/logo.png')" height="100" alt="Logo" />

          </a>
          <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" @click="toggleSidebar" aria-label="Toggle sidebar">
            <i class="ti ti-x fs-8"></i>
          </div>
        </div>
        <nav class="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            <li v-for="item in menuItems" :key="item.name" :class="['sidebar-item', { active: isActive(item.link) }]">
              <router-link :to="item.link" class="sidebar-link">
                <span>
                  <i :class="item.icon"></i>
                </span>
                <span class="hide-menu">{{ item.name }}</span>
              </router-link>
            </li>
            <!-- AUTH Section -->
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">AUTH</span>
            </li>
            <li v-if="sessionEmail === 'umulewi@gmail.com'" class="sidebar-item">
              <router-link to="view_users" class="sidebar-link">
                <span>
                  <i class="ti ti-user-search"></i>
                </span>
                <span class="hide-menu">View Users</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <div class="body-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import '../../../assets/css/styles.min.css';


export default {
  name: "SidebarNavigation",
  data() {
    return {
      sidebarVisible: true, // Controls sidebar visibility
      sessionEmail: "", // Dynamic session email
      menuItems: [
        { name: "Dashboard", link: "/dashboard", icon: "ti ti-layout-dashboard" },
        { name: "Landing Page", link: "/dashboard/landing", icon: "ti ti-layout-dashboard" },
        { name: "About Us", link: "/dashboard/about", icon: "ti ti-layout-dashboard" },
        { name: "Our Team", link: "/dashboard/team", icon: "ti ti-users" },
        { name: "Our Products", link: "/dashboard/product", icon: "ti ti-users" },
        { name: "View Trainings", link: "/view_trainings", icon: "ti ti-device-desktop-analytics" },
        { name: "Register", link: "/register_user", icon: "ti ti-user-plus" },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    isActive(link) {
      return this.$route.path === link; // Check if the current route matches the menu item link
    },
  },

};
</script>

<style scoped>
/* Sidebar item styles */
.sidebar-link:hover {
  background-color: #003966 !important;
  color: #FFE338 !important;
  font-weight: bold;
}

.sidebar-item.active .sidebar-link {
  background-color: #003966 !important;
  color: #FFE338 !important;
  font-weight: bold;
}

/* Sidebar collapse transition */
.sidebar-collapsed {
  width: 0;
  overflow: hidden;
  transition: width 0.3s;
}

.sidebar-collapsed .sidebar-link {
  display: none;
}

/* For smaller screens, hide the sidebar by default */
@media (max-width: 768px) {
  .left-sidebar {
    display: none;
  }

  .left-sidebar.sidebar-collapsed {
    display: block;
  }

  .body-wrapper {
    margin-left: 0;
  }

  .close-btn {
    display: block;
  }
}
.sidebar-navigation .sidebar-link:hover {
  background-color: #003966 !important;
  color: #FFE338 !important;
  font-weight: bold;
}

.sidebar-navigation .sidebar-item.active .sidebar-link {
  background-color: #003966 !important;
  color: #FFE338 !important;
  font-weight: bold;
}

/* Sidebar collapse transition */
.sidebar-navigation .sidebar-collapsed {
  width: 0;
  overflow: hidden;
  transition: width 0.3s;
}

.sidebar-navigation .sidebar-collapsed .sidebar-link {
  display: none;
}

/* Smaller screens */
@media (max-width: 768px) {
  .sidebar-navigation .left-sidebar {
    display: none;
  }

  .sidebar-navigation .left-sidebar.sidebar-collapsed {
    display: block;
  }

  .sidebar-navigation .body-wrapper {
    margin-left: 0;
  }

  .sidebar-navigation .close-btn {
    display: block;
  }
}

/* Reset or override styles for other imports */
.sidebar-navigation {
  --bs-primary: #5D87FF;
  --bs-secondary: #49BEFF;
  --bs-success: #13DEB9;
  --bs-warning: #FFAE1F;
  --bs-danger: #FA896B;
}
</style>
