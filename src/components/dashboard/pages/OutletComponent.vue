<template>
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <!-- Sidebar Component -->
      <IndexComponent />
  
      <!-- Main Wrapper -->
      <div class="body-wrapper">
        <h5 class="card-title fw-semibold mb-4">{{ editingoutlet ? "Update Outlets Content" : "Add Outlets Content" }}</h5>
        <form @submit.prevent="handleSubmit">
          <div v-if="message" :class="['alert', messageType]" role="alert">
            {{ message }}
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for="name" class="form-label">Name of location:</label>
              <input type="text" v-model="name" class="form-control" id="name" required />
            </div>
            <div class="col-md-6">
              <label for="name" class="form-label">Description:</label>
              <textarea name="" v-model="description" id="" class="form-control" required></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for="image" class="form-label">Upload Image: (N.B: not greater than 10MB)</label>
              <input type="file" @change="handleFileUpload" class="form-control" id="image" :required="!editingoutlet" />
              <div v-if="editingoutlet && editingoutlet.image && !image">
                <p>Current Image:</p>
                <img :src="`${globalVariable}/uploads/outlet/${editingoutlet.image}`" alt="Current Image" style="width: 100px; height: auto; border-radius: 5px;" />
              </div>
            </div>
            <div class="col-md-6">
              <label for="name" class="form-label">Working Days:</label>
              <input type="text" v-model="working_days" class="form-control" id="working_days" required />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for="starting_date_1" class="form-label">Working Hours:</label>
              <input type="text" v-model="working_hours" class="form-control" id="working_hours" required />
            </div>
            <div class="col-md-6">
              <label for="ending_date" class="form-label">Telephone:</label>
              <input type="text" v-model="telephone" class="form-control" id="telephone" required />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            {{ editingoutlet ? "Update outlet" : "Add outlet" }}
          </button>
        </form>
  
        <!-- outlet Table -->
        <div style="text-align:center; margin-top:4rem">
          <h5 class="card-title fw-semibold mb-4"><u>View Outlets</u></h5>
        </div>
        <div class="table-responsive">
          <table class="table mb-0 align-middle" id="outletTable">
            <thead class="text-dark fs-4">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>W. days</th>
                <th>W. hrs</th>
                <th>W. telephone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(outlet, index) in outletUs" :key="outlet.id">
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">
                    <span class="badge rounded-3 fw-semibold" style="background-color:#003966;color:#ffe338;font-weight: bold;">
                      {{ index + 1 }}
                    </span>
                  </h6>
                </td>
                <td>
                  <img v-if="outlet.image" :src="`${globalVariable}/uploads/outlet/${outlet.image}`" alt="outlets image" style="width: 100px; height: auto; border-radius: 5px;" />
                </td>
                <td>{{ outlet.name }}</td>
                <td>{{ outlet.description }}</td>
                <td>{{ outlet.working_days }}</td>
                <td>{{ outlet.working_hours }}</td>
                <td>{{ outlet.telephone }}</td>
                <td>
                  <button class="btn btn-primary btn-sm" style="width:53px; margin-right:10px;" @click="editoutlet(outlet)">Edit</button>
                  <button class="btn btn-warning btn-sm" @click="confirmDelete(outlet.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Delete Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h5>Are you sure you want to delete this outlet member?</h5>
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
        name: "",
        description: "",
        working_hours: "",
        working_days: "",
        telephone: "",
        image: null,
        message: null,
        messageType: null,
        outletUs: [],
        editingoutlet: null,
        showModal: false,
        selectedAboutId: null,
      };
    },
    mounted() {
      this.fetchoutlets();
    },
    methods: {
      async fetchoutlets() {
        try {
          const response = await fetch(`${globalVariable}/select_outlet`);
          this.outletUs = await response.json();
        } catch (error) {
          console.error("Error fetching outlet data:", error);
        }
      },
      handleFileUpload(event) {
        this.image = event.target.files[0];
      },
      async handleSubmit() {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('description', this.description);
        formData.append('working_hours', this.working_hours);
        formData.append('working_days', this.working_days);
        formData.append('telephone', this.telephone);
  
        if (this.image) {
          formData.append("image", this.image);
        }
  
        const url = this.editingoutlet
          ? `${globalVariable}/update_outlet/${this.editingoutlet.id}`
          : `${globalVariable}/upload/outlet`;
  
        const method = this.editingoutlet ? "PUT" : "POST";
  
        try {
          const response = await fetch(url, {
            method,
            body: formData,
          });
  
          if (response.ok) {
            this.message = this.editingoutlet
              ? "Outlet member updated successfully!"
              : "Outlet member added successfully!";
            this.messageType = "alert-success";
            this.fetchoutlets();
            this.resetForm();
          } else {
            this.message = "Failed to save outlet content.";
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
        this.working_hours = "";
        this.working_days = "";
        this.telephone = "";
        this.image = null;
        this.editingoutlet = null;
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
            `${globalVariable}/delete_outlet/${id}`,
            {
              method: "DELETE",
            }
          );
  
          if (response.ok) {
            this.message = "Outlet member deleted successfully!";
            this.messageType = "alert-success";
            this.fetchoutlets();
            this.closeModal();
          } else {
            this.message = "Failed to delete outlet member.";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          console.error("Error deleting outlet member:", error);
          this.message = "An error occurred.";
          this.messageType = "alert-danger";
          this.closeModal();
        }
      },
      editoutlet(outlet) {
        this.name = outlet.name;
        this.description = outlet.description;
        this.working_hours = outlet.working_hours;
        this.working_days = outlet.working_days;
        this.telephone = outlet.telephone;
        this.image = null;
        this.editingoutlet = { ...outlet };
    
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
      
    }
    
    .btn-primary:hover {
      background-color: #ffe338;
      color: #003966;
    }
    
    
    .form-group {
      margin-bottom: 15px;
    }
    
    
    </style>
    