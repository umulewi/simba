<template>
    <section class="app-OurProducts">
      <div class="container">
        <!-- Title -->
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">
          Discover our wide range of premium stationery products designed to meet all your creative and organizational needs.
        </p>
  
        <!-- Products Section -->
        <div class="row">
          <div v-for="(product, index) in products" :key="index" class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="product-card">
              <img :src="product.image" class="product-image" :alt="product.name" />
              <div class="product-info">
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-description">{{ product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "OurProducts",
    data() {
      return {
        title: "Our Products",
        products: [
          {
            name: "Classic Notebook",
            description: "A premium notebook for all your notes and creative ideas.",
            image: require('@/assets/img/simba_notebooks.jpeg'),
          },
          {
            name: "High-Quality Paper",
            description: "Smooth, durable, and perfect for all types of writing.",
            image: require('@/assets/img/simba_notebooks.jpeg'),
          },
          {
            name: "Essential Stationery Kit",
            description: "Everything you need to organize and create in one kit.",
            image: require('@/assets/img/papers.jpg'),
          },
          {
            name: "Affordable Pens",
            description: "Reliable and affordable pens for daily use.",
            image: require('@/assets/img/pens.jpg'),
          },
          {
            name: "Organizational Planners",
            description: "Stay organized with stylish and practical planners.",
            image: require('@/assets/img/papers.jpg'),
          },
          {
            name: "Colorful Markers",
            description: "Vibrant markers perfect for both creative and professional work.",
            image: require('@/assets/img/papers.jpg'),
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .app-OurProducts {
    background-color: #f4f4f4;
    padding: 2rem 1rem;
    color: #333;
    text-align: center;
  }
  
  .title {
    color: #243163;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .subtitle {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: #555;
    text-align: center;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .product-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .product-image {
    width: 100%; /* Uniform width */
    height: 200px; /* Fixed height */
    object-fit: cover; /* Maintain aspect ratio, crop edges if needed */
    margin-bottom: 1rem;
    border-radius: 5px; /* Optional: Add rounded corners */
  }
  
  .product-info {
    padding: 0.5rem;
  }
  
  .product-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #243163;
    margin-bottom: 0.5rem;
  }
  
  .product-description {
    font-size: 0.9rem;
    color: #555;
  }
  </style>
  