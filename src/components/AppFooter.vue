<template>


  <footer class="text-center text-lg-start text-white" style="background-color: #243163">
    <section class="d-flex justify-content-between p-4" style="background-color: #6351ce">
      <div class="me-5">
        <span>Get connected with Simba Stationery on social networks:</span>
      </div>
      <div>
        <a href="#" class="text-white me-4" target="">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-white me-4" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/simba.stationery/" class="text-white me-4" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        
      </div>
    </section>

    <section>
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <!-- Company Info Section -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold" style="color: white; font-weight: bold;">Simba Stationery</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
            <p>
              At Simba Stationery, we provide quality office supplies, stationery, and other essential tools to help you stay organized and productive.
            </p>
          </div>

          <!-- Products Section -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold" style="color: white; font-weight: bold;">Our Products</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
            <p class="text-white">Notebooks</p>
            <p class="text-white">Pens & Pencils</p>
            <p class="text-white">Office Furniture</p>
            <p class="text-white">Office Stationery</p>
          </div>

          <!-- Useful Links Section -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold" style="color: white; font-weight: bold;">Useful Links</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
            <p><a href="./" class="text-white">Home</a></p>
            <p><a href="about" class="text-white">About  Us</a></p>
            <p><a href="product" class="text-white">Our Products</a></p>
            <p><a href="contact" class="text-white">Contact</a></p>
            
          </div>

          <!-- Contact Information Section -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold" style="color: white; font-weight: bold;">Contact Us</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
            <p><i class="fas fa-home mr-3"></i> Kigali Special Economic Zone</p>
            <p><i class="fas fa-envelope mr-3"></i>info@simbastationery.com</p>
            <p><i class="fas fa-phone mr-3"></i> +250 788 490 089</p>
            <p><i class="fas fa-print mr-3"></i> +250 788 490 089</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright Section -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2024 Simba Stationery. All rights reserved.<label>Developed By <a href="https://sansongrp.com" target="_blank" style="color:#FFE338;">Sanson Group</a></label>
      

    </div>
  </footer>

  <!-- Back to Top Button -->
  <button @click="scrollToTop" class="back-to-top-btn">
    ↑
  </button>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.back-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #FFE338;
  color: #1a1a1a;
  border: none;
  padding: 1rem;
  border-radius: 10%;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  transition: background-color 0.3s ease;

}

.back-to-top-btn:hover {
  background-color: #6351ce;
}

body {
  scroll-behavior: smooth;
}

/* Show the button when the user scrolls down */
body {
  position: relative;
}

body.scrolled .back-to-top-btn {
  display: block;
}
</style>
