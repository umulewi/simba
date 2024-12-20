<template>
    <div
      class="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-description="fixed"
      data-header-description="fixed"
    >
      <!-- Sidebar Component -->
      <IndexComponent />
  
      <!-- Main Wrapper -->
      <div class="body-wrapper">
        <h5 class="card-title fw-semibold mb-4">{{ editingTeam ? "Update Product Content" : "Add Product Content" }}</h5>
        <form @submit.prevent="handleSubmit">
          <div v-if="message" :class="['alert', messageType]" role="alert">
            {{ message }}
          </div>
          <div class="form-group">
            <label for="name" class="form-label">Name:</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              id="name"
              required
            />
          </div>
          <div class="form-group">
            <label for="image" class="form-label">Upload Image: (N.B: not greater than 10MB)</label>
            <input
              type="file"
              @change="handleFileUpload"
              class="form-control"
              id="image"
              :required="!editingTeam"
            />
            <div v-if="editingTeam && editingTeam.image && !image">
              <p>Current Image:</p>
              <img
                :src="`${globalVariable}/uploads/product/${editingTeam.image}`"
                alt="Current Image"
                style="width: 100px; height: auto; border-radius: 5px;"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="description" class="form-label">description:</label>
            <input
              type="text"
              v-model="description"
              class="form-control"
              id="description"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            {{ editingTeam ? "Update Product" : "Add Product" }}
          </button>
        </form>
  
        <!-- Team Table -->
        <div style="text-align:center; margin-top:4rem">
          <h5 class="card-title fw-semibold mb-4"><u>View Product Page</u></h5>
        </div>
        <div class="table-responsive">
          <table class="table mb-0 align-middle" id="TeamTable">
            <thead class="text-dark fs-4">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            
              <tr v-for="(team, index) in TeamUs" :key="team.id">
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">
                    <span class="badge rounded-3 fw-semibold" style="background-color:#003966;color:#ffe338;font-weight: bold;">
                      {{ index + 1 }}
                    </span>
                  </h6>
                </td>
                <td>
                  <img
                    v-if="team.image"
                    :src="`${globalVariable}/uploads/product/${team.image}`"
                    alt="Landing Image"
                    style="width: 100px; height: auto; border-radius: 5px;"
                  />
                </td>
                <td>{{ team.name }}</td>
                <td>{{ team.description }}</td>
                <td>
                  <button
                    class="btn btn-primary btn-sm"
                    @click="editTeam(team)"
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-warning btn-sm"
                    @click="confirmDelete(team.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Delete Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h5>Are you sure you want to delete this product?</h5>
          <div>
            <button
              class="btn btn-danger"
              @click="deleteAbout(selectedAboutId)"
            >
              Yes, Delete
            </button>
            <button class="btn btn-secondary" @click="closeModal">
              Cancel
            </button>
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
        name: "",
        description: "",
        image: null,
        message: null,
        messageType: null,
        TeamUs: [],
        editingTeam: null,
        showModal: false,
        selectedAboutId: null,
      };
    },
    mounted() {
      this.fetchTeams();
    },
    methods: {
      async fetchTeams() {
        try {
          const response = await fetch(`${globalVariable}/select_product`);
          this.TeamUs = await response.json();
        } catch (error) {
          console.error("Error fetching team data:", error);
        }
      },
      handleFileUpload(event) {
        this.image = event.target.files[0];
      },
      async handleSubmit() {
        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("description", this.description);
        if (this.image) {
          formData.append("image", this.image);
        }
  
        const url = this.editingTeam
          ? `${globalVariable}/update_product/${this.editingTeam.id}`
          : `${globalVariable}/upload/product`;
  
        const method = this.editingTeam ? "PUT" : "POST";
  
        try {
          const response = await fetch(url, {
            method,
            body: formData,
          });
  
          if (response.ok) {
            this.message = this.editingTeam
              ? "Product updated successfully!"
              : "New product added successfully!";
            this.messageType = "alert-success";
            this.fetchTeams();
            this.resetForm();
          } else {
            this.message = "Failed to save product item.";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          this.message = "An error occurred.";
          this.messageType = "alert-danger";
        }
      },
      resetForm() {
        this.name = "";
        this.description = "";
        this.image = null;
        this.editingTeam = null;
        document.getElementById("image").value = "";
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
          const response = await fetch(
            `${globalVariable}/delete_product/${id}`,
            {
              method: "DELETE",
            }
          );
  
          if (response.ok) {
            this.message = "Product deleted successfully!";
            this.messageType = "alert-success";
            this.fetchTeams();
            this.closeModal();
          } else {
            this.message = "Failed to delete product.";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          console.error("Error deleting team member:", error);
          this.message = "An error occurred.";
          this.messageType = "alert-danger";
          this.closeModal();
        }
      },
      editTeam(team) {
        this.name = team.name;
        this.description = team.description;
        this.image = null; // Clear any previously selected file
        this.editingTeam = { ...team }; // Copy team data to avoid mutating original data
  
        // Scroll to the top to access the form
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
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
    