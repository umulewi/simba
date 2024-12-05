<template>
  <div class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container-fluid">
      <!-- Logo -->
      <img src="@/assets/img/simba2.jpg" class="logo" alt="Logo">

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
     
    </div>
  </div>
  <div class="carousel">
            <div class="container-fluid">
                <div class="owl-carousel">
                    <div class="carousel-item">
                      <div class="carousel-img">
                       
                            
                            <img :src="require('@/assets/img/logo.png')" class="logo" alt="Logo" />


                        </div>
                        <div class="carousel-text">
                            <h1> </h1>
                            <p>
                            </p>
                            <div class="carousel-btn">
                                <a class="btn custom-btn" href="">View Oup Products</a>
                                <a class="btn custom-btn" href="contact">Contact Us</a>
                            </div>
                        </div>
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


<!--  -->



