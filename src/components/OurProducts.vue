



<template>
    <header class="app-OurProducts">
      <h1>{{ title }}</h1>
      <div>Our products Contents</div>
    </header>
  </template>





<script>
export default {
  name: "Our-products",
  data() {
    return {
      title: "Our Products",
    };
  },
};
</script>
<style scoped>
.app-OurProducts {
  background-color: green;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>

