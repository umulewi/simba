<template>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <!-- Sidebar Component -->
    <IndexComponent />

    <div class="body-wrapper">
      <div class="container">
        <!-- Add Landing Content Section -->
        <h5 class="card-title fw-semibold mb-4">{{ editingLanding ? "Update Landing Content" : "Add Landing Content" }}</h5>

        <form @submit.prevent="submitForm" enctype="multipart/form-data">
          <div class="mb-4">
            <p v-if="message" :class="`alert ${messageType}`">{{ message }}</p>
          </div>

          <!-- Title Input -->
          <div class="form-group">
            <label for="title" class="form-label">Title:</label>
            <input type="text" v-model="form.title" class="form-control" id="title" required />
          </div>

          <!-- Image Input -->
          <div class="form-group">
            <label for="image" class="form-label">Upload Image:</label>
            <input type="file" @change="handleFileUpload" class="form-control" id="image" />
            <div v-if="editingLanding && form.image && !image">
              <p>Current Image:</p>
              <img :src="`${globalVariable}/uploads/landing/${form.image}`" alt="Current Image" style="width: 100px; height: auto; border-radius: 5px;" />
            </div>
          </div>

          <!-- Description Input -->
          <div class="form-group">
            <label for="description" class="form-label">Description:</label>
            <textarea v-model="form.description" class="form-control" id="description" rows="3" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary">{{ editingLanding ? "Update Landing" : "Add Landing" }}</button>
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
              <tr v-for="(landing,index) in landing_page" :key="landing.id">
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">
                    <span class="badge rounded-3 fw-semibold" style="background-color:#003966;color:#ffe338;font-weight: bold;">
                      {{ index + 1 }}
                    </span>
                  </h6>
                </td>
                
                <td class="border px-4 py-2">
                  <!-- Display Image -->
                  <img v-if="landing.image" :src="`${globalVariable}/uploads/landing/${landing.image}`" alt="Landing Image" style="width: 100px; height: auto; border-radius: 5px;" />
                </td>
                <td class="border px-4 py-2">{{ landing.title }}</td>
                <td class="border px-4 py-2">{{ landing.description }}</td>
                <td class="border px-4 py-2">
                  <button class="btn btn-primary btn-sm" style="width:53px" @click="editLanding(landing)">
                    Edit
                  </button>
                  <button class="btn btn-warning btn-sm" @click="confirmDelete(landing.id)">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h5>Are you sure you want to delete this landing content?</h5>
        <div>
          <button class="btn btn-danger" @click="deleteLanding(selectedLandingId)">Yes, Delete</button>
          <button class="btn btn-secondary" @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { globalVariable } from "@/global";
import IndexComponent from "./IndexComponent.vue";

export default {
  name: "LandingComponent",
  setup() {
    return { globalVariable };
  },
  components: {
    IndexComponent,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        image: null, // Holds the current image filename when editing
      },
      image: null, // Holds a new uploaded file (if any)
      message: "",
      messageType: "",
      landing_page: [],
      editingLanding: null,
      showModal: false,
      selectedLandingId: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.image = event.target.files[0]; // New image
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("title", this.form.title);
      formData.append("description", this.form.description);

      if (this.image) {
        formData.append("image", this.image); // Append new image
      } else if (this.editingLanding && this.form.image) {
        formData.append("currentImage", this.form.image); // Retain current image
      }

      const url = this.editingLanding
        ? `${globalVariable}/update_landing/${this.editingLanding.id}`
        : `${globalVariable}/upload/landing`;

      try {
        const response = await fetch(url, {
          method: this.editingLanding ? "PUT" : "POST",
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          this.message = this.editingLanding
            ? "Landing content updated successfully!"
            : "Landing content added successfully!";
          this.messageType = "alert-success";
          this.resetForm();
          this.fetchLandingPage();
        } else {
          this.message = data.message || "Something went wrong!";
          this.messageType = "alert-danger";
        }
      } catch (error) {
        this.message = "Server error. Please try again later.";
        this.messageType = "alert-danger";
      }
    },
    editLanding(landing) {
      this.form.title = landing.title;
      this.form.description = landing.description;
      this.form.image = landing.image; 
      this.image = null; 
      this.editingLanding = landing;
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    },
    
    resetForm() {
      this.form.title = "";
      this.form.description = "";
      this.form.image = null;
      this.image = null;
      this.editingLanding = null;
    },
    async fetchLandingPage() {
      try {
        const response = await fetch(`${globalVariable}/select_landing`);
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
    confirmDelete(id) {
      this.selectedLandingId = id; // Store the ID of the landing content to be deleted
      this.showModal = true; // Show the modal
    },
    closeModal() {
      this.showModal = false; // Close the modal
      this.selectedLandingId = null; // Clear the selected ID
    },
    async deleteLanding(id) {
      try {
        const response = await fetch(`${globalVariable}/delete_landing/${id}`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (response.ok) {
          this.message = "Landing content deleted successfully!";
          this.messageType = "alert-success";
          this.fetchLandingPage(); // Refresh the landing page data after deletion
          this.closeModal(); // Close the modal
        } else {
          this.message = data.message || "Something went wrong!";
          this.messageType = "alert-danger";
        }
      } catch (error) {
        this.message = "Error deleting landing content. Please try again.";
        this.messageType = "alert-danger";
        this.closeModal(); // Close the modal even if there is an error
      }
    },
  },
  mounted() {
    this.fetchLandingPage();
  },
};
</script>

<style scoped>
/* Modal overlay styling */
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

/* Modal buttons styling */
.modal-content button {
  margin-top: 10px;
  margin-right: 10px;
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
  