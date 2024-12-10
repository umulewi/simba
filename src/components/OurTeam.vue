<template>
  <section class="bg-light text-dark py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h1 class="fw-bold" style="color: #243163;"> MEET OUR TALENTED TEAM</h1>
        <p class="text-muted">
          Our team is composed of skilled professionals dedicated to driving innovation and delivering excellence in every project we undertake. Get to know the people who make it all happen.
        </p>
      </div>
      <div class="row g-4">
        <div v-for="member in teamMembers" :key="member.id" class="col-md-6 col-lg-4">
          <div class="card shadow-sm d-flex flex-column">
            <img :src="member.image" :alt="`${member.name} Avatar`" class="card-img-top" />
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title mb-1">{{ member.name }}</h5>
                <p class="text-muted">{{ member.position }}</p>
                <p class="card-text">{{ member.description }}</p>
              </div>
              <div class="d-flex justify-content-center gap-3">
                <a
                  v-for="link in member.socialLinks"
                  :key="link.icon"
                  :href="link.url"
                  class="text-secondary fs-5"
                  target="_blank"
                >
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
export default {
  name: "OurTeam",
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "Bonnie Green",
          position: "CEO & Web Developer",
          description: "Bonnie is the visionary behind our platform, driving the technical strategy and spearheading innovation at every step. Her passion for web development ensures our brand remains at the forefront of the industry.",
          image: require('@/assets/img/team1.png'),
          socialLinks: [
            { icon: "linkedin", url: "https://linkedin.com" },
            { icon: "twitter", url: "https://twitter.com" },
            { icon: "instagram", url: "https://instagram.com" },
          ],
        },
        {
          id: 2,
          name: "Michael Johnson",
          position: "Product Manager",
          description: "Michael ensures the seamless development and delivery of our products, balancing innovation with user needs. His strategic approach guarantees that we deliver high-quality, impactful solutions.",
          image: require('@/assets/img/team2.png'),
          socialLinks: [
            { icon: "linkedin", url: "https://linkedin.com" },
            { icon: "twitter", url: "https://twitter.com" },
            { icon: "instagram", url: "https://instagram.com" },
          ],
        },
        {
          id: 3,
          name: "Sarah Lee",
          position: "Lead Designer",
          description: "Sarah’s creative expertise shapes the visual identity of our platform. She combines artistic vision with user-centered design principles to craft intuitive and engaging user interfaces.",
          image: require('@/assets/img/team1.png'),
          socialLinks: [
            { icon: "linkedin", url: "https://linkedin.com" },
            { icon: "twitter", url: "https://twitter.com" },
            { icon: "instagram", url: "https://instagram.com" },
          ],
        },
        // Add more team members as needed
      ],
    };
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
}

.card img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  height: 350px; /* Set fixed height for image to keep consistency */
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
</style>
