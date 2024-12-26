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
      <SidebarComponent />
  
      <!-- Main Wrapper -->
      <div class="body-wrapper">
        <HeaderComponent />
        <div class="container-fluid">
          <!-- Page-specific content -->
          <div class="row">
            <!-- All Products Card -->
            <div class="col-xl-4 col-md-6 mb-4">
              <div class="card border-left-primary py-3 shadow-lg">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        All Products
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{ productsCount }}
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="ti ti-notebook fa-2x" style="color:#FFE338;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Blogs Card -->
            <div class="col-xl-4 col-md-6 mb-4">
              <div
                class="card border-right-success py-3"
                style="box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;"
              >
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Blogs
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{ blogsCount }}
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="ti ti-archive fa-2x" style="color:#FFE338;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Team Card -->
            <div class="col-xl-4 col-md-6 mb-4">
              <div class="card border-left-success py-3">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Team
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{ teamCount }}
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="ti ti-users fa-2x" style="color:#FFE338;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { globalVariable } from "@/global";
  import HeaderComponent from "./HeaderComponent.vue";
  import SidebarComponent from "./SidebarComponent.vue";
  import axios from "axios";
  
  export default {
    name: "MainWrapper",
    components: {
      SidebarComponent,
      HeaderComponent,
    },
    setup() {
    return { globalVariable };
  },
    data() {
      return {
        productsCount: 0, 
        blogsCount: 0,    
        teamCount: 0,     
      };
    },
    mounted() {
      // Fetch product count
      axios
        .get(`${globalVariable}/products/count`)
        .then((response) => {
          if (response.data.count !== undefined) {
            this.productsCount = response.data.count;
          } else {
            console.error("Error fetching product count:", response.data.error || "Unknown error");
          }
        })
        .catch((error) => {
          console.error("Error fetching product count:", error);
        });
  
      // Fetch blogs count
      axios
        .get(`${globalVariable}/blogs/count`)
        .then((response) => {
          if (response.data.count !== undefined) {
            this.blogsCount = response.data.count;
          } else {
            console.error("Error fetching blogs count:", response.data.error || "Unknown error");
          }
        })
        .catch((error) => {
          console.error("Error fetching blogs count:", error);
        });

        axios
        .get(`${globalVariable}/teams/count`)
        .then((response) => {
          if (response.data.count !== undefined) {
            this.teamCount = response.data.count;
          } else {
            console.error("Error fetching team count:", response.data.error || "Unknown error");
          }
        })
        .catch((error) => {
          console.error("Error fetching blogs count:", error);
        });
  
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-left: 5px solid #4e73df; /* Primary border color */
  }
  
  .shadow-lg {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  }
  </style>
  