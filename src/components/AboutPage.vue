<template>
  <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img 
      src="@/assets/img/bg1.jpg" 
      alt="Logo" 
      class="zoom-in" 
      style="width: 100%; height: 100%; object-fit: cover;">
  <!-- Overlay text -->
  <div class="overlay-text" style="
      
  ">
    <p style="margin-top: 9px;">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      
      About Us.
    </p>
  </div>
</div>

  <div>
    <!-- Hero Section -->
    

    <!-- About Us Section -->
    <div class="container mt-5">


<div class="row slide-row">
  <div class="col-lg-6 col-12">
    <img 
      src="@/assets/img/DSC09621.jpg" 
      alt="Logo" 
      class="zoom-in" 
      style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div class="col-lg-6 col-12 mt-3">
    <h1 class="fw-bold" style="color:#243163;">hyrdo stationery</h1> 
    <p style="display: justify;">
      Welcome to Simba Stationery, your one-stop shop for all things paper, pens, and office supplies. Whether you are a student, a teacher, or a business professional, we have everything you need to stay organized, creative, and productive.
    </p>
    <br />
    
    <br />
    <h5 style="color:#243163;" class="fw-bold">Our History</h5>
    <p>
      Simba Stationery was established in [Year of establishment], with a vision to bring quality stationery products to our local community. Over the years, we've expanded our product offerings, including a wide range of office supplies, school materials, and personalized stationery. As we continue to grow, we are committed to offering only the highest quality products and ensuring our customers receive the best service possible.
    </p>
    <br />
    <h5 style="color:#243163;" class="fw-bold">Our Mission</h5>
    <p>
      Our mission is to be the go-to provider for all your stationery needs, offering high-quality products at affordable prices. We are dedicated to delivering excellent customer service and ensuring that every purchase meets the needs of our customers. Our goal is to empower individuals, schools, and businesses by providing the tools necessary to succeed in their daily tasks and creative endeavors.
    </p>
  </div>
</div>

</div>

   <OurTeam></OurTeam>
<OurBrands></OurBrands>

    <!-- What We Offer Section -->
    
    <!-- Why Choose Us Section -->
    <div class="container mt-5">
      <div class="row zoom-row">
        <div class="col-lg-6 col-12">
          <h3 class="fw-bold" style="color:#243163;">Benefits</h3>
          <h1 class="fw-bold" style="color:#243163;">Why Choose Us</h1>
          <p>
            At Simba Stationery, we believe in providing the best products at the most affordable prices, all while ensuring excellent customer service. We are committed to meeting all your stationery needs.
          </p>
          <p
            style="cursor:pointer;background-color:  #243163;height:40px"
            class="revel w-100 text-white px-5 py-2 rounded"
          >
            <i class="mx-3 fa-solid fa-play"></i> QUALITY PRODUCTS
          </p>
          <p class="dsply">
            We only stock top-quality products from trusted brands, ensuring that every item meets high standards.
          </p>
          <p
            style="cursor:pointer;background-color:  #243163;height:40px"
            class="revel w-100 text-white px-5 py-2 rounded"
          >
            <i class="mx-3 fa-solid fa-play"></i> AFFORDABILITY
          </p>
          <p class="dsply">
            Our prices are competitive, giving you great value for your money without compromising on quality.
          </p>
          <p
            style="cursor:pointer;background-color:  #243163;height:40px"
            class="revel w-100 text-white px-5 py-2 rounded"
          >
            <i class="mx-3 fa-solid fa-play"></i> FAST DELIVERY
          </p>
          <p class="dsply">
            We offer fast and reliable delivery, ensuring your stationery products arrive on time and in perfect condition.
          </p>
          <p
            style="cursor:pointer;background-color: #243163;height:40px"
            class="revel w-100 text-white px-5 py-2 rounded"
          >
            <i class="mx-3 fa-solid fa-play"></i> CUSTOMER SATISFACTION
          </p>
          <p class="dsply">
            Your satisfaction is our top priority. We strive to provide exceptional service and support at all times.
          </p>
        </div>
        <div class="col-lg-6 col-12">
          <img
            src="@/assets/img/why3.jpg"
            class="w-100"
          />
        </div>
      </div>
    </div>
  </div><br>
</template>

<script>
// Import the Team component
import OurTeam from './OurTeam.vue';
import OurBrands from './OurBrands.vue';

export default {
  name: 'AboutPage',
  components: {
    OurTeam,OurBrands,  // Register the Team component
  },
  mounted() {
    const revel = document.querySelectorAll('.revel');
    const dsply = document.querySelectorAll('.dsply');
    revel.forEach((e, i) => {
      e.addEventListener('click', () => {
        dsply[i].classList.toggle('displayPara');
      });
    });
  },
};
//

document.addEventListener('DOMContentLoaded', () => {
  const textElements = document.querySelectorAll('#textElement, #textContent, #history, #mission');
  const imageElement = document.getElementById('imageElement');

  // Create an intersection observer to trigger animation on scroll
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after element comes into view
      }
    });
  }, {
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
  });

  // Observe text elements if they exist
  if (textElements.length) {
    textElements.forEach(element => observer.observe(element));
  }

  // Observe the image element if it exists
  if (imageElement) {
    observer.observe(imageElement);
  }
});


</script>

<style scoped>
.subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto; /* Center-align the subtitle */
  line-height: 1.6;
}
.zoom-row {
    transition: transform 0.3s ease-in-out; /* Smooth zoom transition for the entire row */
  }

  .zoom-row:hover {
    transform: scale(1.05); /* Zoom the entire row when hovered */
  }

  .slide-row {
    opacity: 0;
    transform: translateY(20px); /* Start from slightly below */
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .slide-row:hover {
    opacity: 1;
    transform: translateY(0); /* Slide up to normal position */
  }

h5{
  color:#243163;
}
.revel {
  transition: all ease 0.3s;
}

.dsply {
  display: none;
}

.displayPara {
  display: block;
  cursor: pointer;
  padding: 20px;
  border-radius: 20px;
  color: black;
  
}

.container-fluid {
  padding: 0;
}

.container {
  margin-top: 30px;
}

.w-100 {
  width: 100%;
}

.mt-5 {
  margin-top: 3rem;
}

.fw-bold {
  font-weight: 700;
}

.fs-5 {
  font-size: 1.25rem;

}
i{
  cursor:pointer 
}

.revel {
  transition: all ease 0.3s;
}

.revel:hover {
  background-color:#243163;
  color: white;
}

.dsply {
  display: none;
}

.displayPara {
  display: block;
  cursor: pointer;
}

.text-white {
  color: white;
}

.text-black {
  color: black;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.card-title {
  color: #243163;
  font-weight: bold;
  font-size: 1.25rem;
}

.card-text {
  color: #555;
  font-size: 1rem;
}

.shadow-sm {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.p-3 {
  padding: 1rem;
}

.h-100 {
  height: 100%;
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