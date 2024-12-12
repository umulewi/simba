<template>
  <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img 
      src="@/assets/img/bg1.jpg" 
      alt="Logo" 
      class="" 
      style="width: 100%; height: 100%; object-fit: cover;">
    <!-- Overlay text -->
    <div class="overlay-text zoom-in">
      <p>
        <i class="fa-solid fa-arrow-right-from-bracket" ></i>
        PRODUCTS.
      </p>
    </div>
  </div>

  <section class="app-OurProducts">
    <div class="container">
      <!-- Title -->
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">
        Explore our carefully curated range of premium stationery, designed to elevate your creativity, productivity, and organizational skills. Whether you're a student, professional, or creative, we have something for you!
      </p>
      
      <div class="text-center mx-auto mb-5" style="max-width: 700px;">
        <!-- Search Input -->
        <div class="mb-3" style="margin-bottom: 15px;">
          <input
            type="text"
            id="searchInput"
            v-model="searchQuery"
            class="form-control"
            placeholder="Search by Name..."
            style="
              width: 100%; 
              padding: 15px; 
              height: 50px; 
              border: 1px solid #ccc; 
              border-radius: 5px; 
              box-sizing: border-box; 
              transition: border-color 0.3s, box-shadow 0.3s; 
              font-size: 16px;
            "
          />
        </div>
        
        <!-- Category Dropdown -->
        <div class="mb-3" style="margin-bottom: 15px;">
          <select v-model="selectedCategory" class="form-control" style="width: 100%; padding: 15px; height: 50px; border: 1px solid #ccc; border-radius: 5px;">
            <option value="">All Categories</option>
            <option value="simba">Simba</option>
            <option value="dova">Dova</option>
            <option value="keto">Keto</option>
          </select>
        </div>
      </div>

      <!-- Products Section -->
      <div class="row">
        <div v-for="(product, index) in filteredProducts" :key="index" class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="product-card">
            <img :src="product.image" class="product-image" :alt="product.name" />
            <div class="product-info">
              <h3 class="product-name">
                {{ product.name }}
                <span v-if="product.isNew" class="new-label">NEW</span>
              </h3>
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
      searchQuery: "", // Bind the input field to this data
      selectedCategory: "", // For category selection
      products: [
        {
          name: "Classic Notebook",
          description: "The perfect companion for your thoughts and ideas. This premium notebook offers smooth pages and a durable cover, ideal for note-taking, journaling, or sketching.",
          image: require('@/assets/img/bg1.jpg'),
          category: "simba",
          isNew: true, // Mark as new product
        },
        {
          name: "High-Quality Paper",
          description: "Crafted for a smooth writing experience, our high-quality paper ensures that your ink flows effortlessly. Perfect for students, professionals, and creatives alike.",
          image: require('@/assets/img/simba_notebooks.jpeg'),
          category: "simba",
          isNew: false, // Not a new product
        },
        {
          name: "Essential Stationery Kit",
          description: "Everything you need in one kit. From notebooks to pens, our essential stationery kit is designed to meet all your organizational and creative needs.",
          image: require('@/assets/img/papers.jpg'),
          category: "dova",
          isNew: true, // Mark as new product
        },
        {
          name: "Affordable Pens",
          description: "A set of reliable pens that write smoothly and last long. Whether you're writing notes, signing documents, or making lists, our pens offer great value without compromising on quality.",
          image: require('@/assets/img/pens.jpg'),
          category: "dova",
          isNew: false, // Not a new product
        },
        {
          name: "Organizational Planners",
          description: "Stay on top of your schedule with our stylish planners. Designed to help you plan, organize, and track your goals with ease, making every day productive.",
          image: require('@/assets/img/papers.jpg'),
          category: "keto",
          isNew: true, // Mark as new product
        },
        {
          name: "Colorful Markers",
          description: "Add a splash of color to your projects with our vibrant markers. These markers are perfect for both professional presentations and creative artwork.",
          image: require('@/assets/img/papers.jpg'),
          category: "keto",
          isNew: false, // Not a new product
        },
      ],
    };
  },
  computed: {
    // Computed property for filtering products based on search query and selected category
    filteredProducts() {
      return this.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
        return matchesSearch && matchesCategory;
      });
    }
  }
};
</script>

<style scoped>
.app-OurProducts {
  background-color: #f9f9f9; 

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

.new-label {
  background-color: yellow;
  color: #333;
  font-weight: bold;
  padding: 5px 10px;
  margin-left: 10px;
  font-size: 1.1rem;
  border-radius: 5px;
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

.overlay-text {
  position: absolute;
  top: 50%;
  left: 20%; /* Center horizontally */
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  width: 30%;
  animation: zoomEffect 0.6s ease-out;
}

/* Zoom effect */
@keyframes zoomEffect {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

/* Media query for small devices */
@media screen and (max-width: 768px) {
  .overlay-text {
    font-size: 1rem; /* Reduce font size */
    width: 40%;
    left: 20%;
  }

  .image-container {
    height: 10px; /* Optional: Adjust the height of the container */
  }
}

@media screen and (max-width: 480px) {
  .overlay-text {
    position: absolute;
    top: 50%;
    left: 30%; 
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    width: 50%;
  }

  .image-container {
    height: 20px; /* Optional: Adjust the height for very small screens */
  }
}
</style>
