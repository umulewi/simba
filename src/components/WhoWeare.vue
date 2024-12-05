<template>
    <header class="app-who-we-are">
      <div class="container d-flex justify-content-center align-items-center w-100">
        <div class="row align-items-center">
          <!-- Logo Section -->
          <div class="col-lg-6 col-sm-12 text-center d-lg-block d-none">
            <img src="@/assets/img/logo.png" class="logo img-fluid" alt="Logo">
          </div>
  
          <!-- About Us Section -->
          <div class="col-lg-6 col-sm-12 mt-5 text-center text-lg-start">
            <h3 class="mt-5 fw-bold" style="color: rgb(71, 236, 137)">ABOUT US</h3>
            <h1 class="display-5">SIMBA STATION</h1>
            <p>
              At Simba Station, we bring the joy of creativity and productivity to life with our premium stationery. Discover the finest notebooks, high-quality paper, and essential tools to help you organize, create, and achieve your goals. From students to professionals, our products are designed to meet every need with affordability and style.
            </p>
  
            <!-- Features Section -->
            <div class="row mt-4">
              <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div class="d-flex align-items-center">
                  <i class="mx-2 fs-3 p-2 fa-solid fa-right-long feature-icon"></i>
                  <span>Quality notebooks</span>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div class="d-flex align-items-center">
                  <i class="mx-2 fs-3 p-2 fa-solid fa-right-long feature-icon"></i>
                  <span>Premium papers</span>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div class="d-flex align-items-center">
                  <i class="mx-2 fs-3 p-2 fa-solid fa-right-long feature-icon"></i>
                  <span>Essential stationery</span>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div class="d-flex align-items-center">
                  <i class="mx-2 fs-3 p-2 fa-solid fa-right-long feature-icon"></i>
                  <span>Affordable products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "WhoWeare",
  };
  </script>
  
  <style scoped>
  .app-who-we-are {
    padding: 2rem;
    text-align: center;
  }
  .feature-icon {
    background-color: green;
    color: white;
    border-radius: 50%;
  }
  .logo {
    max-width: 80%;
    height: auto;
  }
  </style>
  