<template>
  <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img 
      src="@/assets/img/bg1.jpg" 
      alt="Logo" 
      class="" 
      style="width: 100%; height: 100%; object-fit: cover;">
    <div class="overlay-text">
      <p style="margin-top: 9px;">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        Outlets.
      </p>
    </div>
  </div><br>
  
  <header class="app-who-we-are">
    <div class="text-center mb-4">
      <h1 class="fw-bold" style="color: #243163;">Locations Where Our products are available</h1>
      <p class="subtitle" style="transition-delay: 0.5s;">Our products are accessible at various locations, ensuring convenience and accessibility for all our valued customers. Please explore the nearest store or partner to make your purchase.</p>
    </div>

    <div class="container d-flex flex-column align-items-center w-100">
      <!-- Kigali Special Economic Zone -->
      <div class="row align-items-center mb-5">
        <div class="col-lg-7 col-sm-12 text-center text-lg-start order-1 order-lg-2">
          <h1 style="color:#243163;">Kigali Special Economic Zone</h1>
          <p style="text-align: justify;">
            Located opposite AFRI, our store at Kigali Special Economic Zone is your go-to spot for high-quality stationery and office supplies. Experience premium service and discover our wide range of products suited for every need.
          </p>
          <p style="text-align: justify;">
            <strong>Opening Hours:</strong> Monday to Saturday, 8:00 AM - 7:00 PM. <br>
            <strong>Contact:</strong> +250 784 824 410
          </p>
        </div>
        <div class="col-lg-5 col-sm-6 text-center order-2 order-lg-1">
          <img 
            src="@/assets/img/buy1.jpg" 
            class="logo img-fluid" 
            alt="Kigali Special Economic Zone Store" 
            style="height: 25rem;">
        </div>
      </div>
   
      
      <!-- Downtown Location -->
      <div class="row align-items-center mb-5">
        <div class="col-lg-5 col-sm-12 mt-5 text-center text-lg-start order-1 order-lg-1">
          <h1 style="color:#243163;">Downtown</h1>
          <p style="text-align: justify;">
            Our downtown location near Nyarugenge Market is perfect for quick access to our wide range of products. Whether you’re shopping for home, school, or office needs, we’ve got you covered!
          </p>
          <p style="text-align: justify;">
            <strong>Opening Hours:</strong> Monday to Sunday, 9:00 AM - 8:00 PM. <br>
            <strong>Contact:</strong> +250 784 824 410
          </p>
        </div>
        <div class="col-lg-7 col-sm-12 text-center order-2 order-lg-2">
          <img 
            src="@/assets/img/buy2.jpg" 
            class="logo img-fluid" 
            alt="Downtown Store" 
            style="height:25rem;">
        </div>
      </div>

      <!-- Distributors Section -->
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h1 class="mb-5" style="color: #243163;">Our Distributors</h1>
      </div>
      <div class="row">
        <!-- Distributor 1 -->
        <div class="col-md-4 mb-4">
          <div class="card shadow">
            <img src="@/assets/img/distributors.png" class="card-img-top distributor-animation" alt="Distributor 1" style="height: 15rem; object-fit: cover;">
            <div class="card-body text-center">
              <h5 class="card-title" style="color:#243163;">Distributor 1</h5>
              <p class="card-text" style="text-align: justify;">
                Distributor 1 offers our full product range at competitive prices. Located in key areas, they provide excellent service and a wide variety of products.
              </p>
              <p><strong>Contact:</strong> +250 123 456 789</p>
            </div>
          </div>
        </div>

        <!-- Distributor 2 -->
        <div class="col-md-4 mb-4">
          <div class="card shadow">
            <img src="@/assets/img/distributors.png" class="card-img-top distributor-animation" alt="Distributor 2" style="height: 15rem; object-fit: cover;">
            <div class="card-body text-center">
              <h5 class="card-title" style="color:#243163;">Distributor 2</h5>
              <p class="card-text" style="text-align: justify;">
                Located in various parts of the city, Distributor 2 ensures quick deliveries and an extensive range of products for all our customers.
              </p>
              <p><strong>Contact:</strong> +250 987 654 321</p>
            </div>
          </div>
        </div>

        <!-- Distributor 3 -->
        <div class="col-md-4 mb-4">
          <div class="card shadow">
            <img src="@/assets/img/distributors.png" class="card-img-top distributor-animation" alt="Distributor 3" style="height: 15rem; object-fit: cover;">
            <div class="card-body text-center">
              <h5 class="card-title" style="color:#243163;">Distributor 3</h5>
              <p class="card-text" style="text-align: justify;">
                Distributor 3 specializes in delivering our premium products to different regions, ensuring your needs are always met promptly and efficiently.
              </p>
              <p><strong>Contact:</strong> +250 112 233 445</p>
            </div>
          </div>
        </div>
      </div>
      <BecomeDistributor></BecomeDistributor>

    


    </div>
  </header>
</template>
<script>
import BecomeDistributor from './BecomeDistributor.vue';

export default {
  name: 'BuyPage',
  components: {
   BecomeDistributor,  
 },
};

</script>

<style scoped>
/* New animation for distributors */
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%); /* Start off-screen */
    opacity: 0;
  }
  100% {
    transform: translateX(0); /* End at original position */
    opacity: 1;
  }
}

/* Apply the slide-in animation to distributor images */
.distributor-animation {
  animation: slideInFromLeft 1s ease-out forwards;
}

/* Apply hover effect to card container, not image */
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Ensure distributor images fit properly */
.card-img-top {
  object-fit: cover; /* Ensure the image covers the container without distortion */
  height: 15rem;
  width: 100%; /* Ensure the width is 100% to fit the container */
}

/* Additional Styling for Cards */
.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
}

.card-body {
  padding: 1.25rem;
}

.card-title {
  font-weight: bold;
  color: #243163;
}

.card-text {
  color: #6c757d;
}

.card-img-top {
  border-bottom: 1px solid #ddd;
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
