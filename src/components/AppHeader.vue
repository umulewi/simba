<template>
  <div class="container-fluid">
    <div class="slider-container" @mouseover="stopAutoSlide" @mouseleave="startAutoSlide">
      <!-- Slides -->
      <div
        class="slides"
        :style="{ transform: `translateX(-${currentSlide * 100}%)`, transition: isAnimating ? 'transform 0.5s ease' : 'none' }"
      >
        <!-- Duplicate the slides for seamless transition -->
        <div class="slide" v-for="(slide, index) in loopedSlides" :key="index">
          <img
            :src="`${globalVariable}/uploads/landing/${slide.image}`"
            alt="Slide"
            class="animated-image"
          />
          <div class="content-overlay">
            <h1 class="animated-content">{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>

      <!-- Radio buttons for navigation below the image -->
      <div class="radio-controls">
        <input
          v-for="(slide, index) in loopedSlides"
          :key="index"
          type="radio"
          :id="'slide-' + index"
          name="slider"
          :checked="currentSlide === index + 1"
          @change="setSlide(index + 1)"
          class="radio-button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { globalVariable } from "@/global";
export default {
  name: "AutoSlidingSlider",
  setup() {
    return { globalVariable };
  },
  data() {
    return {
      currentSlide: 1, // Start from the first actual slide (not the clone)
      slides: [],
      isAnimating: true,
    };
  },
  computed: {
    loopedSlides() {
      if (this.slides.length === 0) return [];
      // Create the loop by adding clones of the last and first slides
      return [
        this.slides[this.slides.length - 1],
        ...this.slides,
        this.slides[0],
      ];
    },
  },
  methods: {
    async fetchSlides() {
      try {
        const response = await fetch(`${globalVariable}/select_landing`);
        if (!response.ok) {
          throw new Error("Failed to fetch slides data.");
        }
        this.slides = await response.json();
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    },
    setSlide(index) {
      this.currentSlide = index;
      this.isAnimating = true;
    },
    startAutoSlide() {
      this.slideInterval = setInterval(this.nextSlide, 3000); // Slide every 3 seconds
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
  },
  mounted() {
    this.fetchSlides();
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
  height: 35rem; /* Height of the slider */
}

.animated-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #000;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
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
  z-index: 5; /* Ensure the content is behind the radio buttons */
}

.animated-content {
  font-size: 1.6rem;
  color: #FFE338;
  margin: 0 0 1rem;
  animation: zoomIn 1s ease-in-out;
}

/* Radio controls below the images */
.radio-controls {
  position: absolute;
  bottom: 10px; /* Ensures the radio buttons are at the bottom */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Ensure the radio buttons are on top of the content */
}

.radio-controls input[type="radio"] {
  margin: 0 5px;
  cursor: pointer;
  width: 25px;
  height: 35px;
  border-radius: 50%;
  background-color: #ddd;
  transition: background-color 0.3s ease;
}

.radio-controls input[type="radio"]:checked {
  background-color: #FFE338;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .slider-container {
    height: 20vh; /* Adjust height on smaller screens */
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

  .radio-controls input[type="radio"] {
    width: 12px;
    height: 12px;
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
