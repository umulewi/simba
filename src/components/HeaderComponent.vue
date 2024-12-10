<template>
  <div class="navbar navbar-expand-lg navbar-light sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/img/logo.png" alt="Logo" class="logo" style="width: 7rem;height: 109rem;">
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" @click="closeNavbar">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" @click="closeNavbar">
            <router-link to="/about" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item" @click="closeNavbar">
            <router-link to="/product" class="nav-link">Our Products</router-link>
          </li>
          <li class="nav-item" @click="closeNavbar">
            <router-link to="/buy" class="nav-link">Outlets</router-link>
          </li>
          <li class="nav-item" @click="closeNavbar">
            <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
          </li>
          <li class="nav-item" @click="closeNavbar">
            <router-link to="/blogs" class="nav-link">Blogs</router-link>
          </li>
          <li class="nav-item" @click="closeNavbar">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    closeNavbar() {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarToggler && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();  // Manually trigger the collapse
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #e6e7e8;
}

.navbar-brand img {
  max-height: 60px;
}

.navbar-nav {
  margin-left: auto;
}

.nav-link {
  font-size: 1rem;
  margin-right: 1rem;
  color: black;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s ease-in-out;
}


.nav-link:hover {
  background-color: #243163;
  color: #ffe338; 
  border-radius: 5px; 
}


.router-link-active {
  font-weight: bold;
  color:#ffe338;
  background-color:#243163;
  border-radius: 5px;
}
</style>

