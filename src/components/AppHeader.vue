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

      <!-- Navigation -->
      <button class="prev" @click="prevSlide">❮</button>
      <button class="next" @click="nextSlide">❯</button>
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
    nextSlide() {
      this.currentSlide++;
      this.isAnimating = true;
      if (this.currentSlide === this.slides.length + 1) {
        // Transition back to the first slide without animation
        setTimeout(() => {
          this.isAnimating = false;
          this.currentSlide = 1;
        }, 500);
      }
    },
    prevSlide() {
      this.currentSlide--;
      this.isAnimating = true;
      if (this.currentSlide === 0) {
        // Transition back to the last slide without animation
        setTimeout(() => {
          this.isAnimating = false;
          this.currentSlide = this.slides.length;
        }, 500);
      }
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
  height: 30rem;
  
}

.animated-image {
  width: 100%;
  height: 100%;
  object-fit: contain; 
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
}

.animated-content {
  font-size: 1.6rem;
  color: #FFE338;
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


