<template>
  <section class="app-OurProducts">
    <div class="container">
      <!-- Title -->
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">
        Explore our carefully curated range of premium stationery, designed to elevate your creativity, productivity, and organizational skills. Whether you're a student, professional, or creative, we have something for you!
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
          description: "The perfect companion for your thoughts and ideas. This premium notebook offers smooth pages and a durable cover, ideal for note-taking, journaling, or sketching.",
          image: require('@/assets/img/bg1.jpg'),
        },
        {
          name: "High-Quality Paper",
          description: "Crafted for a smooth writing experience, our high-quality paper ensures that your ink flows effortlessly. Perfect for students, professionals, and creatives alike.",
          image: require('@/assets/img/simba_notebooks.jpeg'),
        },
        {
          name: "Essential Stationery Kit",
          description: "Everything you need in one kit. From notebooks to pens, our essential stationery kit is designed to meet all your organizational and creative needs.",
          image: require('@/assets/img/papers.jpg'),
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.app-OurProducts {
  background-color: #f9f9f9; 
  padding: 3rem 1rem; 
  color: #333;
  text-align: center;
}

.title {
  color: #243163;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 2.5rem; /* Larger font size for the title */
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto; /* Center-align the subtitle */
  line-height: 1.6;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* Product Card Styles */
.product-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%; 
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); 
}

.product-image {
  width: 100%; 
  height: 250px; 
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.product-info {
  padding: 1rem;
}

.product-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #243163;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.product-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}


@media (max-width: 768px) {
  .product-card {
    margin-left: 0 !important; 
    margin-right: 0 !important; 
    width: 100%; 
  }

  .row {
    display: block; 
  }

  .product-name {
    font-size: 1.2rem;
  }

  .product-description {
    font-size: 0.9rem;
  }

  .col-sm-12 {
    padding-left: 0; 
    padding-right: 0; 
  }
}
</style>
