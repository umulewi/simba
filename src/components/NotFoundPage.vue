<template>
    <div class="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/">Go Back Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage',
  };
  </script>
  
  <style>
  .not-found-page {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  