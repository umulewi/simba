<template>
  <header class="app-who-we-are">
    <div class="text-center">
      <h1 class="fw-bold" style="color: #243163;">WHO WE ARE</h1>
    </div>
    <div class="container d-flex justify-content-center align-items-center w-100">
      <div class="row align-items-center">
        <!-- Logo Section for Large Screens (First on large screens) -->
        <div class="col-lg-6 col-sm-12 text-center order-lg-first d-none d-lg-block">
          <img src="@/assets/img/who.jpg" class="logo img-fluid" alt="Logo">
        </div>

        <!-- About Us Section -->
        <div class="col-lg-6 col-sm-12 mt-5 text-center text-lg-start">
          <h1 class="display-5" style="color:#243163;">SIMBA STATION</h1>
          <p class="subtitle">
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

        <!-- Logo Section for Small Screens (Below the text on small screens) -->
        <div class="col-12 d-block d-lg-none order-last text-center mt-4">
          <img src="@/assets/img/who.jpg" class="logo img-fluid" alt="Logo">
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
  background-color: #243163;
  color: white;
  border-radius: 50%;
}

.logo {
  max-width: 100%; /* Ensure the image takes full width */
  height: auto;
}
.subtitle {
 
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto; /* Center-align the subtitle */
  line-height: 1.6;
}
</style>
