<template>
  <header class="app-who-we-are">
    <div class="text-center fade-in">
      <h1 class="fw-bold" style="color: #243163;">Who we are </h1>
    </div>
    <div class="container d-flex justify-content-center align-items-center w-100">
      <div class="row align-items-center" style="height: 600px;">
        <!-- Logo Section for Large Screens (First on large screens) -->
        <div class="col-lg-6 col-sm-12 text-center order-lg-first d-none d-lg-block slide-in-left">
          <img src="@/assets/img/DSC09621.jpg" class="logo img-fluid" alt="Logo">
        </div>
        <!-- About Us Section -->
        <div class="col-lg-6 col-sm-12 mt-5 text-center text-lg-start slide-in-right">
          <h1 class="display-5" style="color:#243163;">OVER VIEW</h1>
          <p class="subtitle">
            At Simba Station, we bring the joy of creativity and productivity to life with our premium stationery. Discover the finest notebooks, high-quality paper, and essential tools to help you organize, create, and achieve your goals. From students to professionals, our products are designed to meet every need with affordability and style.
          </p>

          <!-- Features Section -->
          <div class="row mt-4 fade-in">
            <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="d-flex align-items-center">
                <i class="mx-2 fs-0 p-2 fa-solid fa-right-long feature-icon bounce"></i>
                <span>Quality notebooks</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="d-flex align-items-center">
                <i class="mx-2 p-2 fa-solid fa-right-long feature-icon bounce"></i>
                <span>Premium papers</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="d-flex align-items-center">
                <i class="mx-2  p-2 fa-solid fa-right-long feature-icon bounce"></i>
                <span>Essential stationery</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="d-flex align-items-center">
                <i class="mx-2 p-2 fa-solid fa-right-long feature-icon bounce"></i>
                <span>Affordable products</span>
              </div>
            </div>
            <router-link to="/about" class="nav-button" style="margin-top: 3rem;">Discover More About Us</router-link>

          </div>
        </div>
        

       
      </div>
    </div><br><br>
  </header>
</template>

<script>
export default {
  name: "WhoWeare",
};
</script>

<style scoped>

.nav-button {
  display: block; 
  width: 20rem; 
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #243163; 
  color: #fff; 
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none; 
  border-radius: 5px; 
  transition: background-color 0.3s ease, transform 0.2s ease; 
}

.nav-button:hover {
  background-color: #243163; 
  color: yellow;
  transform: scale(1.05); 
}

.nav-button:active {
  background-color: #243163;
  transform: scale(0.95); 
}




.feature-icon {
  background-color: #243163;
  color: white;
  border-radius: 50%;
  animation: bounce 2s infinite;
}

.logo {
  max-width: 100%;
  height: auto;
  animation: fade-in 1.5s ease-in;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.fade-in {
  animation: fade-in 1.5s ease-in;
}

.slide-in-left {
  animation: slide-in-left 1s ease-out;
}

.slide-in-right {
  animation: slide-in-right 1s ease-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>




