<template>
  <header class="app-Why">
    <div class="container text-center mt-4">
      <div class="row">
        <h1 class="title">WHY CHOOSE US</h1>
        <p class="subtitle">We are committed to providing exceptional services and products that meet the needs of our customers. With a proven track record of success and a dedicated team of experts, we ensure that every interaction with us is seamless and rewarding. Our customers' satisfaction is our top priority, and we strive to exceed expectations by offering innovative solutions, unparalleled expertise, and a passion for excellence.</p>
      </div>
    </div>
    <div class="container-fluid mt-5">
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

.app-Why {
  background-color: #727dae; 
  color:white;
  
 
}
.app-Why h4 {
  margin-top: 10px;
  color: white;
}

.app-Why p {
  color:white;
  font-size: 1rem;
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

.title {
  color: #243163;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 2.5rem; /* Larger font size for the title */
}
</style>