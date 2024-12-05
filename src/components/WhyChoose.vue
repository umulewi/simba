<template>
    <header class="app-Why">
      
      <div class="container text-center mt-4">
        <div class="row">
        
          <h1 class="fw-bold" style="color: #243163;">Why Choose Us</h1>
        </div>
      </div>
  
      <div class="container-fluid mt-3">
        <div class="row justify-content-around">
          <!-- Happy Customers -->
          <div class="col-lg-4 col-sm-12 text-center">
            <i class="fas fa-users fa-4x text-primary"></i>
            <h1 class="team">{{ happyCustomers }}</h1>
            <h4>Happy Customers</h4>
          </div>
  
          <!-- Expert Team -->
          <div class="col-lg-4 col-sm-12 text-center">
            <i class="fas fa-user-friends fa-4x text-success"></i>
            <h1 class="team1">{{ expertTeam }}</h1>
            <h4>Expert Team</h4>
          </div>
  
          <!-- Years in Business -->
          <div class="col-lg-4 col-sm-12 text-center">
            <i class="fas fa-calendar-alt fa-4x text-warning"></i>
            <h1 class="team2">{{ yearsInBusiness }}</h1>
            <h4>Years in Business</h4>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppWhy",
    data() {
      return {
       
        happyCustomers: 0,
        expertTeam: 0,
        yearsInBusiness: 0,
      };
    },
    mounted() {
      this.animateCounter("happyCustomers", 1000, 17);
      this.animateCounter("expertTeam", 120, 60);
      this.animateCounter("yearsInBusiness", 12, 700);
    },
    methods: {
      animateCounter(counterKey, targetValue, interval) {
        let currentValue = 0;
        const increment = () => {
          if (currentValue < targetValue) {
            currentValue++;
            this[counterKey] = currentValue;
            setTimeout(increment, interval);
          }
        };
        increment();
      },
    },
  };
  </script>
  
  <style scoped>
  .team,
  .team1,
  .team2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #243163;
  }
  
  .app-Why h4 {
    margin-top: 10px;
    color: #6c757d;
  }
  
  .fa-users {
    color: #007bff;
  }
  
  .fa-user-friends {
    color: #28a745;
  }
  
  .fa-calendar-alt {
    color: #ffc107;
  }
  </style>
  