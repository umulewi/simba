<template>
  <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img src="@/assets/img/bg1.jpg" alt="Logo" style="width: 100%; height: 100%; object-fit: cover;">
    <div class="overlay-text" style="">
      <p style="margin-top: 9px;">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        Get Our Product.
      </p>
    </div>
  </div><br>
  
  <header class="app-who-we-are">
    <div class="text-center mb-4">
      <h1 class="fw-bold" style="color: #243163;">WHERE TO FIND OUR PRODUCTS</h1>
      <p class="text-muted">Discover our products at various locations conveniently located for you!</p>
    </div>
    
    <div class="container d-flex flex-column align-items-center w-100">
      <!-- Kigali Special Economic Zone -->
      <div class="row align-items-center mb-5">
        <div class="col-lg-7 col-sm-12 text-center text-lg-start order-1 order-lg-2">
          <h1 style="color:#243163;">KIGALI SPECIAL ECONOMIC ZONE</h1>
          <p class="subtitle" style="text-align: justify;">
            Located opposite AFRI, our store at Kigali Special Economic Zone is your go-to spot for high-quality stationery and office supplies. Experience premium service and discover our wide range of products suited for every need.
          </p>
          <p style="text-align: justify;">
            <strong>Opening Hours:</strong> Monday to Saturday, 8:00 AM - 7:00 PM. <br>
            <strong>Contact:</strong> +250 784 824 410
          </p>
        </div>
        <div class="col-lg-5 col-sm-6 text-center order-2 order-lg-1">
          <img src="@/assets/img/buy1.jpg" class="logo img-fluid" alt="Kigali Special Economic Zone Store" style="height: 25rem;">
        </div>
      </div>
      
      <!-- Downtown Location -->
      <div class="row align-items-center mb-5">
        <div class="col-lg-5 col-sm-12 mt-5 text-center text-lg-start order-1 order-lg-1">
          <h1 style="color:#243163;">DOWN TOWN</h1>
          <p class="subtitle" style="text-align: justify;">
            Our downtown location near Nyarugenge Market is perfect for quick access to our wide range of products. Whether you’re shopping for home, school, or office needs, we’ve got you covered!
          </p>
          <p style="text-align: justify;">
            <strong>Opening Hours:</strong> Monday to Sunday, 9:00 AM - 8:00 PM. <br>
            <strong>Contact:</strong> +250 784 824 410
          </p>
        </div>
        <div class="col-lg-7 col-sm-12 text-center order-2 order-lg-2">
          <img src="@/assets/img/buy2.jpg" class="logo img-fluid" alt="Downtown Store" style="height:25rem;">
        </div>
      </div>
      
      <!-- Additional Location Example -->
      
    </div>
  </header>
</template>

  
  <script>
  export default {
    name: 'BuyPage',
  };
  </script>
  