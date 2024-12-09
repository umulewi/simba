<template>
  <div class="image-container" style="position: relative; width: 100%; height: 250px;">
  <img src="@/assets/img/bg1.jpg" alt="Logo" style="width: 100%; height: 100%; object-fit: cover;">
  <!-- Overlay text -->
  <div class="overlay-text" style="
      
  ">
    <p style="margin-top: 9px;">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      
      ABOUT US.
    </p>
  </div>
</div>

  <div>
    <!-- Hero Section -->
    

    <!-- About Us Section -->
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6 col-12">
          <img src="@/assets/img/about2.jpg" alt="Logo" class="w-100" />
        </div>
        <div class="col-lg-6 col-12 mt-4">
          <h3 class="fw-bold">About</h3>
          <h1 class="fw-bold" style="color:#243163;">Simba Stationery</h1> 
          <p style="display: justify;">
            Welcome to Simba Stationery, your one-stop shop for all things paper, pens, and office supplies. Whether you are a student, a teacher, or a business professional, we have everything you need to stay organized, creative, and productive.
          </p>
          <br />
          <h5 style="color:#243163;" class="fw-bold">Our Story</h5>
          <p>
            Founded with a passion for providing high-quality stationery products, Simba Stationery has been serving the community for years. Our mission is simple: to offer the best in school and office supplies with exceptional customer service. From humble beginnings, we've grown into one of the leading stationery suppliers, serving customers across the region.
          </p>
        </div>
      </div>
    </div>
   <OurTeam></OurTeam>
    <div class="container rounded mt-5">
      <div class="text-center mb-4">
        <h1 class="fw-bold" style="color: #243163;">Why Choose Us</h1>
        <p class="mt-3 text-muted">At Simba Stationery, we understand the importance of quality supplies for your everyday needs. Whether you're stocking up for school, the office, or home, we offer a wide variety of products to suit every need and budget.</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card shadow-sm p-3 rounded h-100">
            <img src="@/assets/img/notebooks.jpg" class="card-img-top" alt="School Supplies">
            <div class="card-body">
              <h5 class="card-title">School Supplies</h5>
              <p class="card-text">
                We offer a wide selection of school supplies, including notebooks, pens, backpacks, and art materials, ensuring students have everything they need to succeed in their studies.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card shadow-sm p-3 rounded h-100">
            <img src="@/assets/img/notebooks.jpg" class="card-img-top" alt="Office Supplies">
            <div class="card-body">
              <h5 class="card-title">Office Supplies</h5>
              <p class="card-text">
                From pens to paper, binders to file organizers, our office supplies collection is perfect for businesses of all sizes. We provide everything you need to keep your workplace running smoothly.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card shadow-sm p-3 rounded h-100">
            <img src="@/assets/img/notebooks.jpg" class="card-img-top" alt="Creative Supplies">
            <div class="card-body">
              <h5 class="card-title">Creative Supplies</h5>
              <p class="card-text">
                Whether you're into crafting or need materials for creative projects, our selection of markers, colored paper, and other craft supplies will spark your creativity and help you bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What We Offer Section -->
    
    <!-- Why Choose Us Section -->
    <div class="container mt-5">
      <div class="row">
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
            src="@/assets/img/about1.jpg"
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

export default {
  name: 'AboutPage',
  components: {
    OurTeam,  // Register the Team component
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
</script>

<style scoped>
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