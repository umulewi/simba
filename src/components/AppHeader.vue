<template>
  <div class="container-fluid">
    <div class="slider-container">
      <!-- Slides -->
      <div
        class="slides"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div class="slide" v-for="(image, index) in images" :key="index">
          <img :src="image.src" alt="Slide" />
          <div class="content-overlay">
            <h1>{{ image.content }}</h1>
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
        { src: require("@/assets/img/bg1.jpg"), content: "Content for Image 1" },
        { src: require("@/assets/img/bg1.jpg"), content: "Content for Image 2" },
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
      this.slideInterval = setInterval(this.nextSlide, 2000); // Slide every 2 seconds
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
  height: 100vh;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.slide {
  min-width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top:-10rem;
  transform: translate(-50%, -50%);
  text-align: center;
  color: red;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 10px;
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
    font-size: 20px; 
    padding: 8px;   
  }

  .slider-container {
    height: 30vh; 
  }
  .content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top:0rem;
  transform: translate(-50%, -50%);
  text-align: center;
  color: blue;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 10px;
}
}
</style>

