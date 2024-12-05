<template>
  <div id="app">
    <!-- Header -->
    <HeaderComponent />

    <!-- Dynamic Route View -->
    <router-view />

    <!-- Footer -->
    <AppFooter />
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
};
</script>
