<template>
    <div class="navbar navbar-expand-lg bg-light navbar-light">
      <div class="container-fluid">
        <!-- Logo -->
    
       
        <img :src="require('@/assets/img/logo.png')" class="logo" alt="Logo" />
  
        <!-- Toggler for mobile view -->
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Navigation Links -->
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav ml-auto">
            <a
              href="./"
              class="nav-item nav-link"
              :class="{ active: isActive('home') }"
              @click.prevent="setActive('home')"
            >Home</a>
            <a
              href="about"
              class="nav-item nav-link"
              :class="{ active: isActive('about') }"
              @click.prevent="setActive('about')"
            >About</a>
            <a
              href="product"
              class="nav-item nav-link"
              :class="{ active: isActive('product') }"
              @click.prevent="setActive('product')"
            >Product</a>
            <a
              href="training"
              class="nav-item nav-link"
              :class="{ active: isActive('training') }"
              @click.prevent="setActive('training')"
            >Coffee Training</a>
            <a
              href="contact"
              class="nav-item nav-link"
              :class="{ active: isActive('contact') }"
              @click.prevent="setActive('contact')"
            >Contact</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
    data() {
      return {
        activePage: "home", // Default active page
      };
    },
    methods: {
      setActive(page) {
        this.activePage = page;
      },
      isActive(page) {
        return this.activePage === page;
      },
    },
  };
  </script>
  