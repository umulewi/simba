<template>
    <header class="app-footer">
      <h1>{{ title }}</h1>
      <div>footer content</div>
    </header>
  </template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      title: "footer content",
    };
  },
};
</script>

<style scoped>
.app-footer {
  background-color: teal;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>

