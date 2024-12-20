<template>
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <!-- Sidebar Component -->
      <IndexComponent />
  
      <div class="body-wrapper">
        <div class="container">
          <!-- Add About Content Section -->
          <h5 class="card-title fw-semibold mb-4">{{ editingAbout ? "Update About Us Content" : "Add About Us Content" }}</h5>
          <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="mb-4">
              <p v-if="message" :class="`alert ${messageType}`">{{ message }}</p>
            </div>
  
            <!-- Title Input -->
            
            <!-- Image Input -->
            <div class="form-group">
              <label for="image" class="form-label">Upload Image:</label>
              <input type="file" @change="handleFileUpload" class="form-control" id="image" />
              <div v-if="editingAbout && form.image && !image">
                <p>Current Image:</p>
                <img :src="`${globalVariable}/uploads/about/${form.image}`" alt="Current Image" style="width: 100px; height: auto; border-radius: 5px;" />
              </div>
            </div>
  
            <!-- Description Input -->
            <div class="form-group">
              <label for="description" class="form-label">Description:</label>
              <textarea v-model="form.description" class="form-control" id="description" rows="3" required></textarea>
            </div>
  
            <button type="submit" class="btn btn-primary">{{ editingAbout ? "Update About" : "Add About" }}</button>
          </form>
  
          <!-- View About Page Section -->
          <div style="text-align:center; margin-top:4rem">
            <h5 class="card-title fw-semibold mb-4"><u>View About Page</u></h5>
          </div>
          <div class="table-responsive">
            <table class="table mb-0 align-middle" id="aboutTable">
              <thead class="text-dark fs-4">
                <tr>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">ID</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">IMAGES</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">DESCRIPTION</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                
                <tr v-for="(about,index) in aboutUs" :key="about.id">
                    <td class="border-bottom-0">
                        <h6 class="fw-semibold mb-0">
                            <span class="badge rounded-3 fw-semibold" style="background-color:#003966;color:#ffe338;font-weight: bold;">
                                {{ index + 1 }}
                            </span>
                        </h6>
                    </td>
                  <td class="border px-4 py-2">{{ about.id }}</td>
                  <td class="border px-4 py-2">
                    <img v-if="about.image" :src="`${globalVariable}/uploads/about/${about.image}`" alt="Landing Image" style="width: 100px; height: auto; border-radius: 5px;" />
                  </td>
                  <td class="border px-4 py-2">{{ about.description }}</td>
                  <td class="border px-4 py-2">
                    <button class="btn btn-primary btn-sm" @click="editAbout(about)">
                      Edit
                    </button>
                    <button class="btn btn-primary btn-sm" style="background-color: yellow; color: blue;" @click="confirmDelete(about.id)">
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
          <h5>Are you sure you want to delete this About content?</h5>
          <div>
            <button class="btn btn-danger" @click="deleteAbout(selectedAboutId)">Yes, Delete</button>
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
    name: "AboutComponent",
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
        aboutUs: [], // Stores the fetched "About Us" data
        editingAbout: null,
        showModal: false,
        selectedAboutId: null,
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
        } else if (this.editingAbout && this.form.image) {
          formData.append("currentImage", this.form.image); // Retain current image
        }
  
        const url = this.editingAbout
          ? `${globalVariable}/update_about/${this.editingAbout.id}`
          : `${globalVariable}/upload/about`;
  
        try {
          const response = await fetch(url, {
            method: this.editingAbout ? "PUT" : "POST",
            body: formData,
          });
  
          const data = await response.json();
  
          if (response.ok) {
            this.message = this.editingAbout
              ? "About content updated successfully!"
              : "About content added successfully!";
            this.messageType = "alert-success";
            this.resetForm();
            this.fetchAboutPage();
          } else {
            this.message = data.message || "Something went wrong!";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          this.message = "Server error. Please try again later.";
          this.messageType = "alert-danger";
        }
      },
      editAbout(about) {
        this.form.title = about.title;
        this.form.description = about.description;
        this.form.image = about.image; 
        this.image = null; 
        this.editingAbout = about;
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
        this.editingAbout = null;
      },
      async fetchAboutPage() {
        try {
          const response = await fetch(`${globalVariable}/select_about`);
          const data = await response.json();
          if (response.ok) {
            this.aboutUs = data;
          } else {
            console.error("Error fetching About page data");
          }
        } catch (error) {
          console.error("Error fetching About page data:", error);
        }
      },
      confirmDelete(id) {
        this.selectedAboutId = id;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.selectedAboutId = null;
      },
      async deleteAbout(id) {
        try {
          const response = await fetch(`${globalVariable}/delete_about/${id}`, {
            method: "DELETE",
          });

          const data = await response.json();
  
          if (response.ok) {
            this.message = "About content deleted successfully!";
            this.messageType = "alert-success";
            this.fetchAboutPage();
            this.closeModal();
          } else {
            this.message = data.message || "Something went wrong!";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          this.message = "Error deleting About content. Please try again.";
          this.messageType = "alert-danger";
          this.closeModal();
        }
      },
    },
    mounted() {
      this.fetchAboutPage();
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
    