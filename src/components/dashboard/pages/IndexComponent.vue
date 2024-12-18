<template>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <!-- Sidebar Component -->
    <SidebarComponent />

    <!-- Main Wrapper -->
    <div class="body-wrapper">
      <HeaderComponent/>
      <div class="container-fluid">
        <!-- Add your page-specific content here -->
        <div class="row">
          <!-- Example row content -->
        </div>

        <!-- <div class="py-6 px-6 text-center">
          <p class="mb-0 fs-4">
           index contents
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";

export default {
  name: "MainWrapper",
  components: {
    SidebarComponent,
    HeaderComponent,
  },
};
</script>
