<template>
    <div
      class="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <!-- Sidebar Component -->
      <IndexComponent />
    
      <div class="body-wrapper">
        <div class="container">
          <!-- Add Landing Content Section -->
          <h5 class="card-title fw-semibold mb-4">Add Landing Content</h5>
    
          <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="mb-4">
              <!-- Display the message here -->
              <p v-if="message" :class="`alert ${messageType}`">{{ message }}</p>
            </div>
            <div class="form-group">
              <label for="title" class="form-label">Title:</label>
              <input
                type="text"
                v-model="form.title"
                class="form-control"
                id="title"
                required
              />
            </div>
            <div class="form-group">
              <label for="image" class="form-label">
                Upload Image: (N.B: not greater than 10MB)
              </label>
              <input
                type="file"
                @change="handleFileUpload"
                class="form-control"
                id="image"
                required
              />
            </div>
            <div class="form-group">
              <label for="description" class="form-label">Description:</label>
              <textarea
                v-model="form.description"
                class="form-control"
                id="description"
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Add Landing</button>
          </form>
    
          <!-- View Landing Page Section -->
          <div style="text-align:center; margin-top:4rem">
            <h5 class="card-title fw-semibold mb-4"><u>View Landing Page</u></h5>
          </div>
          <div class="table-responsive">
            <table class="table mb-0 align-middle" id="trainingTable">
              <thead class="text-dark fs-4">
                <tr>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">ID</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">IMAGES</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">TITLE</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">DESCRIPTION</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">ACTION</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="landing in landing_page" :key="landing.id">
                  <td class="border px-4 py-2">{{ landing.id }}</td>
                  <td class="border px-4 py-2">
                    <!-- Display Image -->
                    <img
                      v-if="landing.image"
                      :src="`http://localhost:3000/uploads/landing/${landing.image}`"
                      alt="Landing Image"
                      style="width: 100px; height: auto; border-radius: 5px;"
                    />
                  </td>
                  <td class="border px-4 py-2">{{ landing.title }}</td>
                  <td class="border px-4 py-2">{{ landing.description }}</td>
                  <td class="border px-4 py-2">
                    <button
                      class="btn btn-primary btn-sm"
                      @click="editLanding(landing)"
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-primary btn-sm" style="background-color: yellow; color: blue;"
                      @click="confirmDelete(landing.id)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  import IndexComponent from "./IndexComponent.vue";
  
  export default {
    name: "LandingComponent",
    components: {
      IndexComponent,
    },
    data() {
      return {
        form: {
          title: "",
          description: "",
        },
        image: null,
        message: "",
        messageType: "", // alert-success or alert-danger
        landing_page: [], // Holds the fetched landing page data
        editingLanding: null, // Holds data for the landing content being edited
      };
    },
    methods: {
      handleFileUpload(event) {
        this.image = event.target.files[0];
      },
      async submitForm() {
        if (!this.image) {
          this.message = "Please upload an image.";
          this.messageType = "alert-danger";
          return;
        }
  
        const formData = new FormData();
        formData.append("title", this.form.title);
        formData.append("description", this.form.description);
        formData.append("image", this.image);
  
        try {
          const response = await fetch("http://localhost:3000/upload/landing", {
            method: "POST",
            body: formData,
          });
  
          const data = await response.json();
  
          if (response.ok) {
            this.message = "Landing content added successfully!";
            this.messageType = "alert-success";
            this.form.title = "";
            this.form.description = "";
            this.image = null;
            this.fetchLandingPage(); // Refresh landing page data
          } else {
            this.message = data.message || "Something went wrong!";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          this.message = "Server error. Please try again later.";
          this.messageType = "alert-danger";
        }
      },
      async fetchLandingPage() {
        try {
          const response = await fetch("http://localhost:3000/select_landing");
          const data = await response.json();
          if (response.ok) {
            this.landing_page = data;
          } else {
            console.error("Error fetching landing page data");
          }
        } catch (error) {
          console.error("Error fetching landing page data:", error);
        }
      },
      editLanding(landing) {
        // Set the form to the current landing content for editing
        this.form.title = landing.title;
        this.form.description = landing.description;
        this.image = null; // Set image if needed (or leave as is for update)
        this.editingLanding = landing; // Store the landing data being edited
      },
      confirmDelete(id) {
        if (window.confirm("Are you sure you want to delete this landing content?")) {
          this.deleteLanding(id);
        }
      },
      async deleteLanding(id) {
        try {
          const response = await fetch(`http://localhost:3000/delete_landing/${id}`, {
            method: "DELETE",
          });
  
          const data = await response.json();
  
          if (response.ok) {
            this.message = "Landing content deleted successfully!";
            this.messageType = "alert-success";
            this.fetchLandingPage(); // Refresh the landing page data after deletion
          } else {
            this.message = data.message || "Something went wrong!";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          this.message = "Error deleting landing content. Please try again.";
          this.messageType = "alert-danger";
        }
      },
    },
    mounted() {
      this.fetchLandingPage();
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
  