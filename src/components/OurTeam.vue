<template>
  <section class="bg-light text-dark py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h1 class="fw-bold" style="color: #243163;"> Meet Our Talented Team</h1>
        <p class="subtitle">
          Our team is composed of skilled professionals dedicated to driving innovation and delivering excellence in every project we undertake. Get to know the people who make it all happen.
        </p>
      </div>
      <div class="row g-4">
        <div v-for="member in teamMembers" :key="member.id" class="col-md-6 col-lg-4">
          <div class="card shadow-sm d-flex flex-column artwork-background">
            <!-- Image source debugging -->
            <img :src="`${globalVariable}/uploads/team/${member.image}`" class="team-image" :alt="member.name" />
            
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title mb-1">{{ member.name }}</h5>
               
                <p class="text-muted">{{ member.position }}</p>
              </div>
              <div class="d-flex justify-content-center gap-3">
                <a v-for="link in member.socialLinks"
                  :key="link.icon"
                  :href="link.url"
                  class="text-secondary fs-5"
                  target="_blank" >
                  <i :class="`fa-${link.icon} fab`"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { globalVariable } from '@/global';

export default {
  name: "OurTeam",
  setup() {
    return { globalVariable };
  },
  data() {
    return {
      teamMembers: [], // Empty array to store team members fetched from API
    };
  },
  methods: {
    // Method to fetch team members from the API
    fetchTeamMembers() {
      axios.get(`${globalVariable}/select_team`)
        .then(response => {
          // Assuming the API returns an array of team members
          this.teamMembers = response.data;
          this.teamMembers.forEach(member => {
            console.log(`Image URL: ${globalVariable}/uploads/product/${member.image}`); // Log the full URL
          });
        })
        .catch(error => {
          console.error("Error fetching team members:", error);
        });
    },
  },
  created() {
    this.fetchTeamMembers(); // Fetch team members when the component is created
  },
};
</script>



<style scoped>
.card {
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.card img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
 
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  height: 100%;
}

.card-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #243163;
}

.card-text {
  font-size: 0.9rem;
  color: #6c757d;
}

.d-flex a {
  color: #495057;
  transition: color 0.3s;
}

.d-flex a:hover {
  color: #243163;
}

.card-body p {
  margin-bottom: 1rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 1200px;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto; 
  line-height: 1.6;
}
.bg-light::before,
.bg-light::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 150px; 
  background-image: url('https://simba.iremborigali.com/img/logo11111.6ac04e2b.png');
  background-size: contain;
  background-repeat: no-repeat;
  filter: blur(10px);
  opacity: 0.5; 
  z-index: 0; 
}

.bg-light::before {
  left: 0;
  background-position: left center;
}

.bg-light::after {
  right: 0;
  background-position: right center;
}

.bg-light {
  position: relative; 
  z-index: 1; 
  overflow: hidden; 
}

</style>
