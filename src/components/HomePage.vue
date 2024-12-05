<!-- src/components/HomePage.vue -->
<template>
    <div>
      <AppHeader />
      <WhoWeare />
      <OurProducts />
      <OurTeam />
      <WhyChoose />
      <FrequentlyAsked />
    </div>
  </template>
  
  <script>
  import AppHeader from "./AppHeader.vue";
  import WhoWeare from "./WhoWeare.vue";
  import OurProducts from "./OurProducts.vue";
  import OurTeam from "./OurTeam.vue";
  import WhyChoose from "./WhyChoose.vue";
  import FrequentlyAsked from "./FrequentlyAsked.vue";
  
  export default {
    name: "HomePage",
    components: {
      AppHeader,
      WhoWeare,
      OurProducts,
      OurTeam,
      WhyChoose,
      FrequentlyAsked,
    },
  };
  </script>
  