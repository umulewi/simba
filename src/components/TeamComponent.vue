



<template>
    <header class="app-TeamComponent">
      <h1>{{ title }}</h1>
      <div>Who we are content</div>
    </header>
  </template>





<script>
export default {
  name: "TeamComponent",
  data() {
    return {
      title: "who we are",
    };
  },
};
</script>
<style scoped>
.app-TeamComponent {
  background-color: teal;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>

