<template>
    <header class="app-body">
      <h1>{{ title }}</h1>
      <div>body content</div>
    </header>
  </template>

<script>
export default {
  name: "AppBody",
  data() {
    return {
      title: "My Application body",
    };
  },
};
</script>

<style scoped>
.app-body {
  background-color: blue;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>

