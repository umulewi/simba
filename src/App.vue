

<template>
  <div id="app">
    
    <HeaderComponent />

    <AppHeader />
    <WhoWeare />
    <OurProducts/>
    <!-- <TeamComponent/> -->
    <AppBody />
    <AppFooter />
    
   
    
    
  </div>
</template>


<script>
import "./assets/styles.css";
import HeaderComponent from "./components/HeaderComponent.vue";
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";
import AppFooter from "./components/AppFooter.vue";
import WhoWeare from "./components/WhoWeare.vue";
import OurProducts from "./components/OurProducts.vue";
// import TeamComponent from "./components/TeamComponent.vue";

// import AppFooter from "./components/HeaderComponent.vue";
// import HeaderComponent from "./components/HeaderComponent.vue";


export default {
  name: "App",
  components: {
    AppHeader,AppBody,AppFooter,HeaderComponent,WhoWeare,OurProducts,
    // HeaderComponent,
  },
};
</script>

<style>
/* Global styles here */
main {
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>
