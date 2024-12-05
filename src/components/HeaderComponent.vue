<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <!-- Logo -->
      <a href="index.html" class="navbar-brand">
        <img src="@/assets/img/logo.png" alt="Logo" class="logo" />
      </a>

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
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">About</a>
          </li>
        
          <li class="nav-item">
            <a href="our_products" class="nav-link">Our products</a>
          </li>
          <li class="nav-item">
            <a href="where_to_buy" class="nav-link">Where to Buy</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">Contact</a>
           
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StickyNavbar",
};
</script>

<style scoped>
/* Add your custom CSS here if needed */
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
}

.nav-link.active {
  color: #007bff;
}
</style>


