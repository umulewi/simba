<template>
    <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img 
      src="@/assets/img/bg1.jpg" 
      alt="Logo" 
      class="zoom-in" 
      style="width: 100%; height: 100%; object-fit: cover;">
      <div class="overlay-text" style="">
        <p style="margin-top: 9px;font-size: 20px;">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>Our Blogs.
        </p>
      </div>
    </div>
    <section>

        <div class="row" style="background: #EDF2F8;">
            <article class="col-md-6 mb-4" v-for="blog in blogs" :key="blog.id">
                <div class="card shadow-sm fixed-height">
            <div class="card-body">
                <div class="d-flex justify-content-between mb-3 text-muted">
                    <span class="badge badge-success" >{{ blog.category }}</span>
                    <span class="small">{{ blog.date }}</span>
                </div>
                <h5>{{ blog.name}}</h5>
                <p class="card-text text-muted">{{ blog.lead_paragraph }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <!-- Additional content can go here -->
                    </div>
                    <router-link 
                        :to="{ path: `/open/${blog.id}` }" 
                        class="btn btn-link text-primary font-weight-bold" 
                        style="font-weight:bold;"
                    >
                        Read more
                    </router-link>
                </div>
            </div>
        </div>
    </article>
</div>
    </section>
    </template>
    <script>
    import { ref, onMounted } from 'vue'; 
    import { globalVariable } from '@/global';
    
    export default {
      name: "BlogPage",
      setup() {
        const blogs = ref([]); 
    
        const fetchBlogs = async () => { // Renamed to fetchBlogs for consistency
          try {
            const response = await fetch(`${globalVariable}/select_blog`); 
            if (!response.ok) throw new Error("Failed to fetch blogs");
            const data = await response.json(); 
            blogs.value = data; 
          } catch (error) {
            console.error("Error fetching blogs:", error);
          }
        };
    
        onMounted(() => {
          fetchBlogs(); // Correctly call fetchBlogs
        });
    
        return { globalVariable, blogs }; // Return blogs to use in the template
      },
    };
    </script>
    
    
    <style scoped>
    a{
        text-decoration: none;
    }
    p{
        font-size: 18px;
    }
    .badge {
      display: inline-block;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    .badge-primary {
      background-color: #243163;
      color: white;
    }
    .badge-success {
      background-color: #28a745; /* Green color */
      color: white;
    }
    h5{
        color: #243163;
    }
    .text-primary{
        color: #243163; 
    }
    
    .card {
        display: flex;
        flex-direction: column;
        height: 250px; /* Static height */
    }
    
    .card-body {
        flex-grow: 1; /* Ensures the content fills available space */
    }

    .subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto; /* Center-align the subtitle */
  line-height: 1.6;
}
    </style>
    