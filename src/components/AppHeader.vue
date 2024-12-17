<template>
  <div class="container-fluid">
    <div class="slider-container">
      <!-- Slides -->
      <div
        class="slides"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div class="slide" v-for="(image, index) in images" :key="index">
          <img :src="image.src" alt="Slide" class="animated-image" />
          <div class="content-overlay">
            <h1 class="animated-content">{{ image.content }}</h1>
            <p>{{ image.description }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <button class="prev" @click="prevSlide">❮</button>
      <button class="next" @click="nextSlide">❯</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "AutoSlidingSlider",
  data() {
    return {
      currentSlide: 0,
      images: [
        {
          src: require("@/assets/img/DSC09527_1.jpg"),
          content: "Explore Premium Notebooks",
          description: "Top-quality notebooks for your office and school needs.",
        },
        {
          src: require("@/assets/img/DSC09560.jpg"),
          content: "Best Writing Instruments",
          description: "Pens, pencils, and markers that inspire creativity.",
        },
        {
          src: require("@/assets/img/DSC09625.jpg"),
          content: "Office Supplies Made Easy",
          description: "Everything you need to organize your workspace.",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide =
        (this.currentSlide + 1) % this.images.length; // Loop to the first slide
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length; // Loop to the last slide
    },
    startAutoSlide() {
      this.slideInterval = setInterval(this.nextSlide, 3000); // Slide every 3 seconds
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval); // Stop sliding
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>


<style scoped>

.container-fluid {
  width: 100%;
  padding: 0;
  margin: 0;
}


.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50%;
  
}

.animated-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures the entire image is visible within the container */
  background-color: #000; /* Optional: Set a background color to fill empty spaces */
}







.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}






.content-overlay {
  position: absolute;

  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  animation: slideUp 1s ease-in-out;
}

.animated-content {
  font-size: 1.6rem;
  margin: 0 0 1rem;
  animation: zoomIn 1s ease-in-out;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

@media (max-width: 768px) {
  .prev,
  .next {
    font-size: 10px;
    padding: 8px;
  }

  .slider-container {
    height: 20vh;
  }

  .content-overlay {
    font-size: 15px;
    padding: 10px;
    margin-top: 7rem;
    width: 20rem;
  }

  .animated-content {
    font-size: 1.2rem;
  }
}

/* Keyframe Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translate(-50%, 20%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>


