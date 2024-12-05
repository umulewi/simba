<template>
  <footer class="footer-container">
    <div class="footer-grid">
      <!-- Simba Description -->
      <div class="footer-section">
        <h3>Simba</h3>
        <p>
          Simba is a leading company offering quality products and services. Our goal is to provide the best solutions to our clients across various sectors.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-media-icons">
          <a href="https://linkedin.com" class="social-icon" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" class="social-icon" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" class="social-icon" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" class="social-icon" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>&copy; 2024 Simba. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-container {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-section p {
  font-size: 1rem;
  color: #ccc;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.social-media-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: inline-block;
  background-color: #444;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}

.social-icon:hover {
  background-color: #555;
}

.footer-bottom {
  text-align: center;
  font-size: 1rem;
  color: #ccc;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-media-icons {
    justify-content: center;
  }
}
</style>
