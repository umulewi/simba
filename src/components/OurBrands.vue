<template>
   
    <div class="brands-section container rounded mt-5 mb-5">
      <div class="text-center mb-4">
        <h1 class="fw-bold" style="color: #243163;">Our Brands</h1>
        <p class="subtitle">
          At Simba Stationery, we understand the importance of quality supplies for your everyday needs. Whether you're stocking up for school, the office, or home, we offer a wide variety of products to suit every need and budget.
        </p>
      </div>
      
      
  
      <div class="brands-container">
        <div
          v-for="(brand, index) in brands"
          :key="index"
          class="brand-card"
          :class="{ visible: isVisible[index] }"
          ref="brandCards"
        >
          <div class="card shadow-sm p-3 rounded">
            <img :src="brand.img" class="card-img-top" :alt="brand.alt" />
            <div class="card-body">
              <h5 class="card-title">{{ brand.title }}</h5>
              <p class="card-text">{{ brand.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        brands: [
          {
            
            img: require('@/assets/img/notebooks.jpg'),
            alt: "School Supplies",
            title: "School Supplies",
            description:
              "We offer a wide selection of school supplies, including notebooks, pens, backpacks, and art materials, ensuring students have everything they need to succeed in their studies.",
          },
          {
            img: require('@/assets/img/notebooks.jpg'),
            
            alt: "Office Supplies",
            title: "Office Supplies",
            description:
              "From pens to paper, binders to file organizers, our office supplies collection is perfect for businesses of all sizes. We provide everything you need to keep your workplace running smoothly.",
          },
          {
            img: require('@/assets/img/notebooks.jpg'),
            alt: "Creative Supplies",
            title: "Creative Supplies",
            description:
              "Whether you're into crafting or need materials for creative projects, our selection of markers, colored paper, and other craft supplies will spark your creativity and help you bring your ideas to life.",
          },
        ],
        isVisible: [true, false, false], // Initial state: only the first card is visible
      };
    },
    mounted() {
      const observerOptions = {
        threshold: 0.5, // Trigger animation when 50% of the section is visible
      };
  
      const observer = new IntersectionObserver(this.handleIntersection, observerOptions);
      this.$refs.brandCards.forEach((card) => {
        observer.observe(card);
      });
    },
    methods: {
      handleIntersection(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(this.$refs.brandCards).indexOf(entry.target);
            this.isVisible[index] = true; // Directly update the array in Vue 3
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
.subtitle {
  color: #666;
  margin-bottom: 2rem;
  font-size: 16px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto; /* Center-align the subtitle */
  line-height: 1.6;
}


h5 {
  color: #243163;
}

.container-fluid {
  padding: 0;
}

.container {
  margin-top: 30px;
}

.w-100 {
  width: 100%;
}

.mt-5 {
  margin-top: 3rem;
}

.fw-bold {
  font-weight: 700;
}

.fs-5 {
  font-size: 1.25rem;
}

.text-white {
  color: white;
}

.text-black {
  color: black;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-left: 1rem; /* Add left margin */
  display: flex;
  flex-direction: column; /* Align content vertically */
  justify-content: space-between; /* Distribute space evenly */
  min-height: 400px; /* Set a consistent minimum height */
  height: 100%; /* Allow it to fill parent height */
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.card-title {
  color: #243163;
  font-weight: bold;
  font-size: 1.25rem;
}

.card-text {
  color: #555;
  font-size: 1rem;
}

.shadow-sm {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.p-3 {
  padding: 1rem;
}

.h-100 {
  height: 100%;
}

.brands-container {
  display: flex;
  gap: 2rem;
  overflow: hidden;
  flex-wrap: wrap; /* Allow wrapping for small screens */
}

.brand-card {
  flex: 1;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
  height: auto; /* Let content dictate height */
}

.brand-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.zoom-row {
  transition: transform 0.3s ease-in-out; /* Smooth zoom transition for the entire row */
}

.zoom-row:hover {
  transform: scale(1.05); /* Zoom the entire row when hovered */
}

.slide-row {
  opacity: 0;
  transform: translateY(20px); /* Start from slightly below */
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-row:hover {
  opacity: 1;
  transform: translateY(0); /* Slide up to normal position */
}

.revel {
  transition: all ease 0.3s;
}

.revel:hover {
  background-color: #243163;
  color: white;
}

.dsply {
  display: none;
}

.displayPara {
  display: block;
  cursor: pointer;
  padding: 20px;
  border-radius: 20px;
  color: black;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 20%; /* Center horizontally */
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  width: 30%;
}

/* Media query for small devices */
@media screen and (max-width: 768px) {
  .overlay-text {
    font-size: 1rem; /* Reduce font size */
    width: 40%;
    left: 20%;
  }

  .image-container {
    height: 10px; /* Optional: Adjust the height of the container */
  }

  .brands-container {
    flex-direction: column; /* Stack cards vertically */
  }
}

@media screen and (max-width: 480px) {
  .overlay-text {
    top: 50%;
    left: 30%;
    font-size: 15px;
    width: 50%;
  }

  .image-container {
    height: 20px; /* Optional: Adjust the height for very small screens */
  }
}

  </style>
  

  

  