<template>
    <div class="text-center wow fadeInUp mb-3" data-wow-delay="0.1s">
      <!-- Toggle button -->
      <label class="nav-button" style="margin-top: 1rem; cursor: pointer;" @click="toggleForm">
        Become Distributor
      </label>
    </div>
  
    <!-- Form Container -->
    <div v-if="showForm" class="d-flex justify-content-center align-items-center min-vh-100 mt-4 mb-2">
      <form method="post" class="container p-4 rounded" style="background-color: #243163; max-width: 100%; width: 100%; max-width: 600px;">
        <h2 class="text-center mb-4" style="color: white;">Become a Simba Stationery Distributor</h2>
        <div class="form-floating mb-3">
          <input type="text" class="form-control border-0" style="background-color: #ffcc00;" id="floating_company_name" placeholder="Company Name" required>
          <label for="floating_company_name">Company Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control border-0" style="background-color: #ffcc00;" id="floating_contact_person" placeholder="Contact Person" required>
          <label for="floating_contact_person">Contact Person</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control border-0" style="background-color: #ffcc00;" id="floating_email" placeholder="name@example.com" required>
          <label for="floating_email">Email Address</label>
        </div>
        <div class="form-floating mb-3">
          <textarea class="form-control border-0" id="floating_address" placeholder="Address" style="height: 100px;background-color: #ffcc00;" required></textarea>
          <label for="floating_address">Business Address</label>
        </div>
        <div class="form-floating mb-3">
          <textarea class="form-control border-0" id="floating_experience" placeholder="Experience" style="height: 100px;background-color: #ffcc00;" required></textarea>
          <label for="floating_experience">Experience in Distribution</label>
        </div>
        <button type="submit" class="btn w-40" style="background-color:#ff9900; color: black;" 
        onmouseover="this.style.backgroundColor='#ffcc00'; this.style.color='#243163';" 
        onmouseout="this.style.backgroundColor='#ff9900'; this.style.color='black';">
        Submit
      </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showForm: false, // Tracks form visibility
      };
    },
    methods: {
      toggleForm() {
        this.showForm = !this.showForm; // Toggle form visibility
      },
    },
  };
  </script>
  
  <style>
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
    color: #ffe338; 
    transform: scale(1.05); 
  }
  
  .nav-button:active {
    background-color: #243163;
    transform: scale(0.95); 
  }
  </style>
  