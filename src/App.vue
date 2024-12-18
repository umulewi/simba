<template>
  <div id="app">
    <!-- Header (Only visible if noHeaderFooter is not true) -->
    <HeaderComponent v-if="!isDashboard" />

    <!-- NavComponent (Always included across all routes) -->
    <NavComponent v-if="!isDashboard" />

    <!-- Scroll Progress Bar (Visible across all routes when scrolling) -->
    <div class="scroll-bar" :style="{ width: progressBarWidth + '%' }"></div>

    <!-- Dynamic Route View -->
    <router-view />

    <!-- Footer (Only visible if noHeaderFooter is not true) -->
    <AppFooter v-if="!isDashboard" />
  </div>
</template>

<script>
import "./assets/styles.css";
import HeaderComponent from "./components/HeaderComponent.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    AppFooter,
  },
  data() {
    return {
      scrollPosition: 0,
      scrollHeight: 0,
    };
  },
  computed: {
    // Check if the current route has the 'noHeaderFooter' meta flag
    isDashboard() {
      return this.$route.meta.noHeaderFooter;
    },
    progressBarWidth() {
      return (this.scrollPosition / (this.scrollHeight - window.innerHeight)) * 100;
    },
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      this.scrollHeight = document.documentElement.scrollHeight;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
.scroll-bar {
  height: 5px;
  background-color: blue;
  position: fixed;
  top: 64px; /* Adjust this value based on your header height */
  left: 0;
  z-index: 999;
  transition: width 0.1s ease-in-out;
}
</style>
