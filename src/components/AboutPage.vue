<template>
  <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img src="@/assets/img/bg1.jpg" alt="Logo" class="zoom-in" style="width: 100%; height: 100%; object-fit: cover;">
    <!-- Overlay text -->
    <div class="overlay-text">
      <p style="margin-top: 9px;">
        <i class="fa-solid fa-arrow-right-from-bracket" style="color:#FFE338"></i>&nbsp;
        <label style="color:#FFE338">  About Us..</label>
      </p>
    </div>
  </div>


  <div>
    <div class="container mt-5">
      <div class="row slide-row">
        <div class="col-lg-6 col-12 position-relative">
          <div class="image-frame" style="border-radius: 12px;"></div>
          <img v-if="about_us.length > 0 && about_us[0].image" :src="`${globalVariable}/uploads/about/${about_us[0].image}`" alt="Slide" class="image" style="width: 100%; height: 95%; object-fit: cover; border-radius: 1rem;"/>
          <div class="background-overlay"></div> 
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <h1 class="fw-bold" style="color:#243163;">HYDRO STATIONERY</h1>
          <p class="subtitle"></p>
          <p style="display: justify;">
            Welcome to Simba Stationery, your one-stop shop for all things paper, pens, and office supplies. Whether you are a student, a teacher, or a business professional, we have everything you need to stay organized, creative, and productive.
          </p>

          <h5 class="fw-bold history-title" ref="historyTitle" style="color:#243163;">Our History</h5>
          <p class="history-content" ref="historyContent">
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
  </div>

  <OurTeam></OurTeam>
  
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
        <img src="@/assets/img/why3.jpg" class="w-100" style="border-radius: 1rem;"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import OurTeam from './OurTeam.vue';
import { globalVariable } from '@/global';

export default {
  name: 'AboutPage',

  setup() {
    const about_us = ref([]);
    const textElements = ref([]);
    const imageElement = ref(null);

    const fetchAboutUs = async () => {
      try {
        const response = await fetch(`${globalVariable}/select_about`);
        if (!response.ok) throw new Error("Failed to fetch data");
        about_us.value = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const initObserver = () => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      // Observe text and image elements
      textElements.value.forEach((element) => observer.observe(element));
      if (imageElement.value) observer.observe(imageElement.value);
    };

    onMounted(() => {
      fetchAboutUs();
      initObserver();
    });

    return { globalVariable, about_us, textElements, imageElement };
  },

  components: {
    OurTeam,
  },

  mounted() {
    const revel = document.querySelectorAll('.revel');
    const dsply = document.querySelectorAll('.dsply');
    revel.forEach((e, i) => {
      e.addEventListener('click', () => {
        dsply[i]?.classList.toggle('displayPara');
      });
    });
  },
};
</script>

<style scoped>

.section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      max-width: 1200px;
      margin: auto;
      padding: 20px;
    }
.column {
      flex: 1;
    }
    .text-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .text-column h1 {
      margin: 0 0 15px 0;
      font-size: 2rem;
      color: #333;
    }
    .text-column p {
      margin: 0;
      font-size: 1rem;
      color: #666;
      line-height: 1.5;
    }
    .image-column {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image-frame {
      position: absolute;
      top: 20px;
      right: 30px;
      width: 20%;
      height: 20%;
      border-radius: 10px;
      z-index: 1;
    }
    .image {
      position: relative;
      z-index: 2;
      max-width: 100%;
      border-radius: 12px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .image-frame {
      position: absolute;
      top: 20px;
      right: 30px;
      width: 100%;
      height: 100%;
      background-color: #243163; 
      border-radius: 15px; 
      z-index: 1;
    }



.subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto; /* Center-align the subtitle */
  line-height: 1.6;
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