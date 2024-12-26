<template>
  <header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item d-block d-xl-none">
          <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)" @click="toggleSidebar">
            <i class="ti ti-menu-2"></i>
          </a>
        </li>
      </ul>
      <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
        <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
          <li class="nav-item dropdown">
            <a class="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
              <img :src="require('@/assets/img/user-1.jpg')" width="35" height="35" class="rounded-circle"/>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
              <div class="message-body">
                <a href="" class="btn btn-outline-dark mx-3 mt-2 d-block">
                  <i class="ti ti-user fs-6"></i>
                  <p class="mb-0 fs-3">My Profile</p>
                </a>
                <a href="dashboard/change-password" class="btn btn-outline-dark mx-3 mt-2 d-block"><router-link to="/dashboard/change-password">Credentials</router-link></a>
                <a href="javascript:void(0)" @click="logout" class="btn btn-outline-dark mx-3 mt-2 d-block">Logout</a>
               
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      profileImage: "../assets/images/profile/user-1.jpg",
    };
  },
  methods: {
    toggleSidebar() {
      console.log("Sidebar toggled");
    },
    logout() {
      // Remove the auth token from localStorage
      localStorage.removeItem('authToken');
      
      // Redirect to login page after logout
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>
.app-header {
  width: 100%; /* Full width of the content area */
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.nav-icon-hover {
  cursor: pointer;
}
</style>
