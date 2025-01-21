<template>
  <div class="navbar navbar-expand-lg navbar-light sticky-top" style="border: 1rem;">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" style="background-color: #e6e7e8;">
        <img src="@/assets/img/logo11111.png" alt="Logo" class="logo" style="width: 7rem; height: 109rem; margin-left: 1rem;">
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
            <router-link to="/outlets" class="nav-link">Outlets</router-link>
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
          <!-- Updated "Become a Distributor" Button -->
          <li
            class="distributor-button"
            @click="closeNavbar"
          >
            <router-link
              to="/distributor"
              class="nav-link distributor-link"
            >
              &nbsp; Become a Distributor
            </router-link>
            <span class="hover-effect"></span>
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
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarToggler && navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Manually trigger the collapse
      }
    },
  },
};
</script>

<style scoped>
/* Navbar styles */
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
  color: #ffe338;
  background-color: #243163;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .nav-link:hover {
    background-color: #243163;
    width: 10rem;
    color: #ffe338;
    border-radius: 0px;
  }

  .router-link-active {
    font-weight: bold;
    color: #ffe338;
    background-color: #243163;
    width: 10rem;
    border-radius: 5px;
  }
}

/* Distributor Button */
.distributor-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: black;
  font-size: 13px;
  border: 3px solid #243163;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden; /* Prevents background effect from spilling */
}

.distributor-link {
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 10px;
  width: 12rem; /* Adjust width for better fit */
}

.hover-effect {
  position: absolute;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100%; /* Start off-screen */
  opacity: 0.6;
  transition: left 1.5s ease-out; /* Smooth transition */
}

.distributor-button:hover .hover-effect {
  left: 100%; /* Animate to the right edge */
}

/* Hover background color to blue */
.distributor-button:hover {
  background-color: #243163;
  border: none;
  color: white; /* Change text color to white for contrast */
}

/* Hover text color */
.distributor-button:hover .distributor-link {
  color: white;
}


@media (max-width: 768px) {

  .distributor-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto; 
    padding: 0.5rem 0.8rem; 
    font-size: 0.875rem; 
    border-radius: 50px; 
    margin: 0.5rem 0; 
  }


  .distributor-link {
    font-size: 0.875rem; 
    text-align: center; 
    color: inherit;
    font-weight: inherit;
    display: inline-flex; 
    gap: 5px;
  }
}
</style>
