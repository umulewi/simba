<template>
    <div class="page-wrapper" id="main-wrapper">
      <div class="container-fluid">
        <div class="logo-img">
          <img :src="require('@/assets/img/logo11111.png')" />
        </div>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <p class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</p>
            <p class="alert alert-info" v-if="successMessage">{{ successMessage }}</p>
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="email" class="form-control" id="email" name="email" required />
          </div>
          <button type="submit" class="btn-primary" name="submit">Reset Link</button><br /><br />
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        email: "",
        errorMessage: "",
        successMessage: "",
      };
    },
    methods: {
      async submitForm() {
        this.errorMessage = "";
        this.successMessage = "";
        try {
          const response = await axios.post("http://localhost:3000/reset-password", {
            email: this.email,
          });
          if (response.data.success) {
            this.successMessage = "A password reset link has been sent to your email.";
          } else {
            this.errorMessage = response.data.message;
          }
        } catch (error) {
          this.errorMessage = "An error occurred. Please try again later.";
        }
      },
    },
  };
  </script>
  

  

  <style scoped>

  body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
  }

  .page-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%; /* Full width */
      background-color: #f9f9f9;
  }

  .container-fluid {
      max-width: 500px;
      width: 100%;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      max-height: 90vh; /* Limits the height to 90% of the viewport */
      overflow-y: auto; /* Makes the container scrollable if needed */
  }

  .logo-img {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
  }

  .logo-img img {
     
      height: 100px;
  }

  .form-control {
      border: 1px solid #ccc;
      border-radius: 5px;
      transition: border-color 0.3s, box-shadow 0.3s;
      font-size: 16px;
  }

  .form-control:focus {
      border-color: #003966;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      outline: none;
  }

  .form-label {
      font-weight: bold;
      margin-bottom: 5px;
      display: block;
  }

  .btn-primary {
    /* background-color: #003966 !important;
    color: #FFE338 !important; */
      width: 100%;
      background-color:  #003966; 
      color: white; 
      border: 2px solid  #003966;
      border-radius: 8px; 
      padding: 10px 16px; 
      font-size: 16px; 
      font-weight: 600; 
      text-align: center; 
      cursor: pointer;
      transition: all 0.3s ease; 
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  }
  .btn-primary:hover {
      background-color: #003966 ; 
      color: #FFE338 ; 
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2); 
      transform: translateY(-2px); 
      font-weight: bold;
  }
  .btn-primary:active {
      background-color: #003966; 
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15); 
      transform: translateY(0); 
  }


  .btn-secondary {
      width: 100%;
      background-color: #6c757d;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      font-size: 16px;
      margin-top: 10px;
  }

  .btn-secondary:hover {
      background-color: #5a6268;
  }

  .form-group {
      margin-bottom: 15px;
  }

  .form-check-label {
      font-size: 14px;
  }

  @media (max-width: 768px) {
      .container-fluid {
          padding: 15px;
          max-height: 100vh; /* Adjusts for smaller screens */
      }
  }
</style>
