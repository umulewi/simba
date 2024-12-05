<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/img/logo.png" alt="Logo" class="logo" />
      </router-link>

      <!-- Toggler for mobile view -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link">Our Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/buy" class="nav-link">Where to Buy</router-link>
          </li>
          <li class="nav-item">
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
};
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
}

.navbar-brand img {
  max-height: 50px;
}

.navbar-nav {
  margin-left: auto;
}

.nav-link {
  font-size: 1rem;
  margin-right: 1rem;
  color: #000;
}

.nav-link.active {
  color: #007bff;
}
</style>