<template>
  <header class="app-who-we-are">
    <div class="text-center fade-in">
      <h1 class="fw-bold" style="color: #243163;">Who we are</h1>
    </div>
    <div class="container d-flex justify-content-center align-items-center w-100">
      <div class="row align-items-center" style="height: 600px;">
        <!-- Image Section uploads/about -->
        <div class="col-lg-6 col-sm-12 text-center order-lg-first d-none d-lg-block slide-in-left">
          <img
            v-if="about_us.length > 0 && about_us[0].image"
            :src="`${globalVariable}/uploads/about/${about_us[0].image}`"
            alt="Slide"
            class="animated-image"
           style="width: 100%; height: 100%; object-fit: cover;"/>
        </div>
        <div class="col-lg-6 col-sm-12 mt-5 text-center text-lg-start slide-in-right">
          <!-- Overview Section -->
          <h1 class="display-5" style="color:#243163;">OVER VIEW</h1>
          <p class="subtitle">
            {{ about_us.length > 0 ? about_us[0].description : "Loading..." }}
          </p>
          
          <!-- Features Section -->
          <div class="row mt-4 fade-in">
            <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="d-flex align-items-center">
                <i class="mx-2 fs-0 p-2 fa-solid fa-right-long feature-icon bounce" style="font-size: 10px;"></i>
                <span>Quality notebooks</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="d-flex align-items-center">
                <i class="mx-2 p-2 fa-solid fa-right-long feature-icon bounce" style="font-size: 10px;"></i>
                <span>Premium papers</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="d-flex align-items-center">
                <i class="mx-2 p-2 fa-solid fa-right-long feature-icon bounce" style="font-size: 10px;"></i>
                <span>Essential stationery</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="d-flex align-items-center">
                <i class="mx-2 p-2 fa-solid fa-right-long feature-icon bounce" style="font-size: 10px;"></i>
                <span>Affordable products</span>
              </div>
            </div>
          </div>

          <!-- Link to Learn More -->
          <router-link to="/about" class="nav-button" style="margin-top: 3rem;">
            Discover More About Us
          </router-link>
        </div>
      </div>
    </div>
    <br /><br />
  </header>
</template>

<script>
import { globalVariable } from "@/global";
import { ref, onMounted } from "vue";

export default {
  name: "WhoWeare",
  setup() {
    const about_us = ref([]);

    const fetchAboutUs = async () => {
      try {
        const response = await fetch("http://localhost:3000/select_about");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        about_us.value = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchAboutUs();
    });

    return { globalVariable, about_us };
  },
};
</script>

<style scoped>
/* Add any additional styles you may need */
</style>


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
  font-size: 18px;
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




