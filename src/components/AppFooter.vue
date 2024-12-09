<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <!-- Address Section -->
        <div class="col-lg-7">
          <div class="row">
            <div class="col-md-6">
              <div class="footer-contact">
                <h2>Our Address</h2>
                <p><i class="fa fa-map-marker-alt"></i>Phase 2,  Kigali Special Economic Zone</p>
                <p><i class="fa fa-phone-alt"></i> +250 788 490 089</p>
                <p><i class="fa fa-envelope"></i> info@simbastationary.com</p>
                <div class="footer-social">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <!-- Quick Links Section -->
            <div class="col-md-6">
              <div class="footer-link">
                <h2>Quick Links</h2>
                <a href="index">Home</a>
                <a href="about">About Us</a>
                <a href="product">Products</a>
                <a href="contact">Contact</a>
                <a href="FQAs">FAQs</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Newsletter Section -->
        <div class="col-lg-5">
          <div class="footer-newsletter">
            <h2>Newsletter</h2>
            <p>Simba is a leading company offering quality products and services. Our goal is to provide the best solutions to our clients across various sectors. </p>
           
            <form method="POST" class="subscribe-form">
              <input name="email" class="form-control" placeholder="Enter your email">
              <button type="submit" name="subscription" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Bottom -->
    <div class="copyright">
      <div class="container">
        <p>Copyright &copy; 2024 <a href="">SIMBA STATIONERY</a>, All Rights Reserved.</p>
        <p>Developed By <a href="https://sansongrp.com" target="_blank">Sanson Group</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background-color:#243163;
  color: #ffffff;
  padding: 2rem 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer h2 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.footer p {
  font-size: 0.9rem;
  color: #cccccc;
  margin: 0.5rem 0;
}

.footer a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-social a {
  color: #ffffff;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  transition: color 0.3s ease;
}

.footer-social a:hover {
  color: #ffcc00;
}

.footer-link a {
  display: block;
  margin-bottom: 0.5rem;
}

.footer-newsletter {
  text-align: center;
}

.footer-newsletter .form-control {
  padding: 0.7rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
}

.footer-newsletter .btn {
  background-color: #ffcc00;
  color: #1a1a1a;
  border: none;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.footer-newsletter .btn:hover {
  background-color: #ffffff;
  color: #ffcc00;
}



.copyright p {
  margin: 0.3rem 0;
  font-size: 0.8rem;
  color: #cccccc;
}

@media (max-width: 768px) {
  .footer h2 {
    font-size: 1.2rem;
  }

  .footer p {
    font-size: 0.8rem;
  }

  .footer-newsletter {
    margin-top: 2rem;
  }

  .footer-newsletter .form-control {
    width: 90%;
  }

  .row {
    flex-direction: column;
  }
}
</style>
