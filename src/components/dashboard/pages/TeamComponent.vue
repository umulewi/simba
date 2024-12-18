<template>
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <!-- Sidebar Component -->
      <IndexComponent />
  
      <!-- Main Wrapper -->
      <div class="body-wrapper">
    
        <div class="container">
          <!-- Add your page-specific content here -->
          <div class="row">
            <!-- Example row content -->
          </div>
  
          
        
          <h5 class="card-title fw-semibold mb-4">Add Team content</h5>

            
            <form method="post" enctype="multipart/form-data">
            <div class="mb-4">
             
            </div>
            <div class="form-group">
              <label for="names" class="form-label">Title:</label>
              <input type="text" name="names" class="form-control" id="names" required />
            </div> 
            <div class="form-group">
              <label for="service" class="form-label">Upload image: (N.B: not greater than 10MB)</label>
              <input type="file" name="image" class="form-control" id="service" required />
            </div>
            <div class="form-group">
              <label for="description" class="form-label">Description:</label>
              <input type="text" name="description" class="form-control" id="description" required />
            </div>
            <button type="submit" class="btn-primary">Add Landing</button>
          </form> 
          </div>
        </div>
      </div>
    
  </template>
  
  <script>
  import IndexComponent from "./IndexComponent.vue";
  
  export default {
    name: "MainWrapper",
    components: {
      IndexComponent,
    },
  };
  </script>
  
  <style scoped>
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
    width: 50%;
    padding: 5px;
    background-color: #003966;
    color: #ffe338;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 17px;
  }
  
  .btn-primary:hover {
    background-color: #ffe338;
    color: #003966;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  
  </style>
  