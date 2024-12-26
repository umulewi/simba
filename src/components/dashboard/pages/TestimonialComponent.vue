<template>
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <!-- Sidebar Component -->
      <IndexComponent />
  
      <!-- Main Wrapper -->
      <div class="body-wrapper">
        <h5 class="card-title fw-semibold mb-4">{{ editingtestimonial ? "Update  Testimonials Content" : "Add Testimonials Content" }}</h5>
        <form @submit.prevent="handleSubmit">
          <div v-if="message" :class="['alert', messageType]" role="alert">
            {{ message }}
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for="name" class="form-label">Name:</label>
              <input type="text" v-model="name" class="form-control" id="name" required />
            </div>
            <div class="col-md-6">
              <label for="topic" class="form-label">Description:</label>
              <input type="text" v-model="topic" class="form-control" id="topic" required />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for="image" class="form-label">Profiles: (N.B: not greater than 10MB)</label>
              <input type="file" @change="handleFileUpload" class="form-control" id="image" :required="!editingtestimonial" />
              <div v-if="editingtestimonial && editingtestimonial.image && !image">
                <p>Current Image:</p>
                <img :src="`${globalVariable}/uploads/testimonial/${editingtestimonial.image}`" alt="Current Image" style="width: 100px; height: auto; border-radius: 5px;" />
              </div>
            </div>
            <div class="col-md-6">
              <label for="position" class="form-label">Position:</label>
              <input type="text" v-model="position" class="form-control" id="position" required />
            </div>
          </div>
          <div class="form-group row">
           
            <div class="col-md-12">
              <label for="description" class="form-label">topic:</label>
              <textarea v-model="description" class="form-control" id="description" style="height: 12rem;"></textarea>
              
            </div>


            
          </div>
          <button type="submit" class="btn btn-primary">
            {{ editingtestimonial ? "Update testimonial" : "Add testimonial" }}
          </button>
        </form>
  
        <!-- testimonial Table -->
        <div style="text-align:center; margin-top:4rem">
          <h5 class="card-title fw-semibold mb-4"><u>View Testimonial</u></h5>
        </div>
        <div class="table-responsive">
          <table class="table mb-0 align-middle" id="testimonialTable">
            <thead class="text-dark fs-4">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Position</th>
                <th>Topic</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(testimonial, index) in testimonialUs" :key="testimonial.id">
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">
                    <span class="badge rounded-3 fw-semibold" style="background-color:#003966;color:#ffe338;font-weight: bold;">
                      {{ index + 1 }}
                    </span>
                  </h6>
                </td>
                <td>
                  <img v-if="testimonial.image" :src="`${globalVariable}/uploads/testimonial/${testimonial.image}`" alt="testimonials image" style="width: 100px; height: auto; border-radius: 5px;" />
                </td>
                <td>{{ testimonial.name }}</td>
                <td>{{ testimonial.position }}</td>
                <td>{{ testimonial.topic }}</td>
                <td>{{ testimonial.description }}</td>
                <td>
                  <button style="width: 3rem;" class="btn btn-primary btn-sm" @click="edittestimonial(testimonial)">Edit</button>
                  <button class="btn btn-warning btn-sm" @click="confirmDelete(testimonial.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Delete Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h5>Are you sure you want to delete this testimonial member?</h5>
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
        topic: "",
        description: "",
        position: "",
        image: null,
        message: null,
        messageType: null,
        testimonialUs: [],
        editingtestimonial: null,
        showModal: false,
        selectedAboutId: null,
      };
    },
    mounted() {
      this.fetchtestimonials();
    },
    methods: {
      async fetchtestimonials() {
        try {
          const response = await fetch(`${globalVariable}/select_testimonial`);
          this.testimonialUs = await response.json();
        } catch (error) {
          console.error("Error fetching testimonial data:", error);
        }
      },
      handleFileUpload(event) {
        this.image = event.target.files[0];
      },
      async handleSubmit() {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('topic', this.topic);
        formData.append('description', this.description);
        formData.append('position', this.position);
  
        if (this.image) {
          formData.append("image", this.image);
        }
  
        const url = this.editingtestimonial
          ? `${globalVariable}/update_testimonial/${this.editingtestimonial.id}`
          : `${globalVariable}/upload/testimonial`;
  
        const method = this.editingtestimonial ? "PUT" : "POST";
  
        try {
          const response = await fetch(url, {
            method,
            body: formData,
          });
  
          if (response.ok) {
            this.message = this.editingtestimonial
              ? "Testimonial updated successfully!"
              : "Testimonial added successfully!";
            this.messageType = "alert-success";
            this.fetchtestimonials();
            this.resetForm();
          } else {
            this.message = "Failed to save testimonial content.";
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
  this.topic = "";
  this.description = "";
  this.position = "";
  this.image = null;
  this.editingtestimonial = null;
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
            `${globalVariable}/delete_testimonial/${id}`,
            {
              method: "DELETE",
            }
          );
  
          if (response.ok) {
            this.message = "Testimonial member deleted successfully!";
            this.messageType = "alert-success";
            this.fetchtestimonials();
            this.closeModal();
          } else {
            this.message = "Failed to delete testimonial member.";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          console.error("Error deleting testimonial member:", error);
          this.message = "An error occurred.";
          this.messageType = "alert-danger";
          this.closeModal();
        }
      },
      edittestimonial(testimonial) {
        this.name = testimonial.name;
        this.topic = testimonial.topic;
        this.description = testimonial.description;
        this.position = testimonial.position;
        this.image = null;
        this.editingtestimonial = { ...testimonial };
  
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
    