<template>
    <section class="bg-light text-dark py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="fw-bold" style="color: #243163;">Our Team</h1>
          <p class="text-muted">
            Meet the talented individuals behind our success.
          </p>
        </div>
        <div class="row g-4">
          <div v-for="member in teamMembers" :key="member.id" class="col-md-6 col-lg-4">
            <div class="card shadow-sm">
              <img :src="member.image" :alt="`${member.name} Avatar`" class="card-img-top" />
              <div class="card-body text-center">
                <h5 class="card-title mb-1">{{ member.name }}</h5>
                <p class="text-muted">{{ member.position }}</p>
                <p class="card-text">{{ member.description }}</p>
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
            description: "Bonnie drives the technical strategy of our platform and brand.",
            image:
              "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
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
            description: "Michael oversees product development and ensures quality delivery.",
            image:
              "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
            socialLinks: [
              { icon: "linkedin", url: "https://linkedin.com" },
              { icon: "twitter", url: "https://twitter.com" },
              { icon: "instagram", url: "https://instagram.com" },
            ],
          },
          {
            id: 3,
            name: "Michael Johnson",
            position: "Product Manager",
            description: "Michael oversees product development and ensures quality delivery.",
            image:
              "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
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
  }
  
  .card img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .card-title {
    font-weight: bold;
  }
  
  .card-text {
    font-size: 0.9rem;
    color: #6c757d;
  }
  </style>
  