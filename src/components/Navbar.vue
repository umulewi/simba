<!-- navbar.vue -->
<template>
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <a href="index.php" class="logo d-flex align-items-center me-auto me-xl-0">
          <img src="assets/img/logo.png" alt="">
        </a>
        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="index.php#home" class="active">Home</a></li>
            <li><a href="index.php#about">About</a></li>
            <li><a href="index.php#services">Services</a></li>
            <li><a href="index.php#contact">Contact</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list" @click="toggleMobileMenu"></i>
        </nav>
        <a class="btn-getstarted" href="https://drive.google.com/file/d/1qjr39P2WUZtolgBbRB22tsR4QXL-hmMC/view?usp=sharing">Download CV</a>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    methods: {
      toggleMobileMenu() {
        const navMenu = document.getElementById("navmenu");
        navMenu.classList.toggle("mobile-menu-open");
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    background-color: teal;
  }
  .logo img {
    height: 50px;
  }
  .navmenu ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  .navmenu ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  .navmenu ul li a.active {
    text-decoration: underline;
  }
  .btn-getstarted {
    background-color: #fff;
    color: teal;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
  }
  .mobile-nav-toggle {
    display: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .mobile-nav-toggle {
      display: block;
    }
    .navmenu ul {
      display: none;
      flex-direction: column;
      gap: 10px;
    }
    .navmenu.mobile-menu-open ul {
      display: flex;
    }
  }

  
  </style>
  