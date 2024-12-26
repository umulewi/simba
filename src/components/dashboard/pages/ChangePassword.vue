<template>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <!-- Sidebar Component -->
    <IndexComponent />
    <div class="body-wrapper">

      <h2>Change Password</h2>
    <form @submit.prevent="changePassword">
      <div class="form-group">
        <label for="current_password" class="form-label">Current password:</label>
        <input
          type="password"
          v-model="currentPassword"
          class="form-control"
          id="current_password"
          required
        />
      </div>
      <div class="form-group">
        <label for="new_password" class="form-label">New password:</label>
        <input
          type="password"
          v-model="newPassword"
          class="form-control"
          id="new_password"
          required
        />
      </div>
      <div class="form-group">
        <label for="confirm_password" class="form-label">Confirm New Password:</label>
        <input
          type="password"
          v-model="confirmPassword"
          class="form-control"
          id="confirm_password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Change</button>
    </form>
    <p v-if="message" :class="messageClass">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import IndexComponent from './IndexComponent.vue';


export default {
  name: "MainWrapper",
  components: {
    IndexComponent,
  
  },
};
</script>

<style scoped>
  .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    /* Modal content styling */
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      width: 300px;
    }
  
    .container-fluid {
      max-width: 800px;
      margin: auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
    
    h5 {
      color: #333;
      margin-bottom: 20px;
    }
    
    .form-control {
      width: 100%;
      padding: 15px;
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      transition: border-color 0.3s, box-shadow 0.3s;
      font-size: 16px;
    }
    
    .form-control:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      outline: none;
    }
    
    .form-label {
      font-weight: bold;
      margin-bottom: 5px;
      display: block;
    }
    
    .btn-primary {
      background-color: #003966;
      color: white;
      
    }
    
    .btn-primary:hover {
      background-color: #ffe338;
      color: #003966;
    }
    
    
    .form-group {
      margin-bottom: 15px;
    }
    
    
    </style>
    