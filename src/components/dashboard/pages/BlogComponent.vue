<template>
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <!-- Sidebar Component -->
      <IndexComponent />
    
      <!-- Main Wrapper -->
      <div class="body-wrapper">
        <h5 class="card-title fw-semibold mb-4">{{ editingblog ? "Update blogs Content" : "Add blogs Content" }}</h5>
        <form @submit.prevent="handleSubmit">
          <div v-if="message" :class="['alert', messageType]" role="alert">
            {{ message }}
          </div>
          <div class="form-group row">
            <div class="col-md-6">
              <label for="name" class="form-label">Blog Title:</label>
              <input type="text" v-model="name" class="form-control" id="name" required />
            </div>
            <div class="col-md-6">
              <label for="category" class="form-label">Category:</label>
              <input type="text" v-model="category" class="form-control" id="category" required />
            </div>
          </div>
          <div class="form-group">
            <label for="lead_paragraph" class="form-label">Lead Paragraph:</label>
            <input type="text" v-model="lead_paragraph" class="form-control" id="lead_paragraph" required />
          </div>
          
          <!-- Image Fields -->
          <div class="form-group row">
            <div class="col-md-6">
              <label for="content_image1" class="form-label">Content Image 1 URL:</label>
              <input type="text" v-model="content_image1" class="form-control" id="content_image1" required />
              <input type="file" @change="handleFileChange1" class="form-control mt-2" id="image1" :required="!editingblog" />
              <div v-if="editingblog && editingblog.image1 && !image1">
                <p>Current Image:</p>
                <img :src="`${globalVariable}/uploads/blog/${editingblog.image1}`" alt="Current Image 1" style="width: 100px; height: auto; border-radius: 5px;" />
              </div>
            </div>
            <div class="col-md-6">
              <label for="content_image2" class="form-label">Content Image 2 URL:</label>
              <input type="text" v-model="content_image2" class="form-control" id="content_image2" required />
              <input type="file" @change="handleFileChange2" class="form-control mt-2" id="image2" :required="!editingblog" />
              <div v-if="editingblog && editingblog.image2 && !image2">
                <p>Current Image:</p>
                <img :src="`${globalVariable}/uploads/blog/${editingblog.image2}`" alt="Current Image 2" style="width: 100px; height: auto; border-radius: 5px;" />
              </div>
            </div>
          </div>
  
          <div class="form-group row">
            <div class="col-md-6">
              <label for="content_image3" class="form-label">Content Image 3 URL:</label>
              <input type="text" v-model="content_image3" class="form-control" id="content_image3" required />
              <input type="file" @change="handleFileChange3" class="form-control mt-2" id="image3" :required="!editingblog" />
              <div v-if="editingblog && editingblog.image3 && !image3">
                <p>Current Image:</p>
                <img :src="`${globalVariable}/uploads/blog/${editingblog.image3}`" alt="Current Image 3" style="width: 100px; height: auto; border-radius: 5px;" />
              </div>
            </div>
          </div>
  
          <div class="form-group">
            <label for="closing_paragraph" class="form-label">Closing Paragraph:</label>
            <input type="text" v-model="closing_paragraph" class="form-control" id="closing_paragraph" required />
          </div>
    
          <button type="submit" class="btn btn-primary">
            {{ editingblog ? "Update blog" : "Add blog" }}
          </button>
        </form>
    
        <!-- Blog Table -->
        <div style="text-align:center; margin-top:4rem">
          <h5 class="card-title fw-semibold mb-4"><u>View blogs</u></h5>
        </div>
        <div class="table-responsive">
          <table class="table mb-0 align-middle" id="blogTable">
            <thead class="text-dark fs-4">
              <tr>
                <th>id</th>
                <th>title</th>
                <th>category</th>
                <th>L paragraph</th>
                <th>Image1</th>
                <th>Content image1</th>
                <th>Image2</th>
                <th>Content image2</th>
                <th>Image3</th>
                <th>Content image3</th>
                <th>closing paragraph</th>
              
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(blog, index) in blogUs" :key="blog.id">
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">
                    <span class="badge rounded-3 fw-semibold" style="background-color:#003966;color:#ffe338;font-weight: bold;">
                      {{ index + 1 }}
                    </span>
                  </h6>
                </td>
                <td>{{ blog.name }}</td>
                <td>{{ blog.category }}</td>
                <td>{{ blog.lead_paragraph }}</td>
                <td>
                  <img v-if="blog.image1" :src="`${globalVariable}/uploads/blog/${blog.image1}`" alt="blogs image 1" style="width: 100px; height: auto; border-radius: 5px;" />
                </td>
                <td>{{ blog.content_image1 }}</td>
                <td>
                  <img v-if="blog.image1" :src="`${globalVariable}/uploads/blog/${blog.image2}`" alt="blogs image 1" style="width: 100px; height: auto; border-radius: 5px;" />
                </td>
                <td>{{ blog.content_image2 }}</td>
                <td>
                  <img v-if="blog.image1" :src="`${globalVariable}/uploads/blog/${blog.image3}`" alt="blogs image 1" style="width: 100px; height: auto; border-radius: 5px;" />
                </td>
                <td>{{ blog.content_image2 }}</td>
                <td>{{ blog.closing_paragraph }}</td>
                
               
                <td>
                  <button class="btn btn-primary btn-sm" style="width:53px; margin-right:10px;" @click="editblog(blog)">Edit</button>
                  <button class="btn btn-warning btn-sm" @click="confirmDelete(blog.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
      <!-- Delete Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h5>Are you sure you want to delete this blog member?</h5>
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
        name: '',
        category: '',
        lead_paragraph: '',
        content_image1: '',
        content_image2: '',
        content_image3: '',
        closing_paragraph: '',
        image1: null,
        image2: null,
        image3: null,
        message: null,
        messageType: null,
        blogUs: [],
        editingblog: null,
        showModal: false,
        selectedAboutId: null,
      };
    },
    mounted() {
      this.fetchblogs();
    },
    methods: {
      async fetchblogs() {
        try {
          const response = await fetch(`${globalVariable}/select_blog`);
          this.blogUs = await response.json();
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      },
      handleFileChange1(event) {
        this.image1 = event.target.files[0];
      },
      handleFileChange2(event) {
        this.image2 = event.target.files[0];
      },
      handleFileChange3(event) {
        this.image3 = event.target.files[0];
      },
      async handleSubmit() {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('category', this.category);
        formData.append('lead_paragraph', this.lead_paragraph);
        formData.append('content_image1', this.content_image1);
        formData.append('content_image2', this.content_image2);
        formData.append('content_image3', this.content_image3);
        formData.append('closing_paragraph', this.closing_paragraph);
  
        if (this.image1) {
          formData.append("image1", this.image1);
        }
        if (this.image2) {
          formData.append("image2", this.image2);
        }
        if (this.image3) {
          formData.append("image3", this.image3);
        }
  
        const url = this.editingblog
          ? `${globalVariable}/update_blog/${this.editingblog.id}`
          : `${globalVariable}/upload/blog`;
  
        const method = this.editingblog ? "PUT" : "POST";
  
        try {
          const response = await fetch(url, {
            method,
            body: formData,
          });
  
          if (response.ok) {
            this.message = "Blog content successfully submitted!";
            this.messageType = "alert-success";
            this.clearForm();
            this.fetchblogs();
          } else {
            this.message = "An error occurred while submitting the form.";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          console.error("Error during form submission:", error);
          this.message = "Error occurred. Please try again.";
          this.messageType = "alert-danger";
        }
      },
      clearForm() {
        this.name = "";
        this.category = "";
        this.lead_paragraph = "";
        this.content_image1 = "";
        this.content_image2 = "";
        this.content_image3 = "";
        this.closing_paragraph = "";
        this.image1 = null;
        this.image2 = null;
        this.image3 = null;
      },
      editblog(blog) {
        this.editingblog = blog;
        this.name = blog.name;
        this.category = blog.category;
        this.lead_paragraph = blog.lead_paragraph;
        this.content_image1 = blog.content_image1;
        this.content_image2 = blog.content_image2;
        this.content_image3 = blog.content_image3;
        this.closing_paragraph = blog.closing_paragraph;
      },
      confirmDelete(blogId) {
        this.showModal = true;
        this.selectedAboutId = blogId;
      },
      async deleteAbout(blogId) {
        try {
          const response = await fetch(`${globalVariable}/delete_blog/${blogId}`, {
            method: "DELETE",
          });
          if (response.ok) {
            this.message = "Blog deleted successfully!";
            this.messageType = "alert-success";
            this.showModal = false;
            this.fetchblogs();
          } else {
            this.message = "Failed to delete blog.";
            this.messageType = "alert-danger";
          }
        } catch (error) {
          console.error("Error deleting blog:", error);
          this.message = "Error occurred while deleting the blog.";
          this.messageType = "alert-danger";
        }
      },
      closeModal() {
        this.showModal = false;
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
    