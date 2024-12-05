<template>
  <section id="faq" class="faq">
  <div class="container" data-aos="fade-up">

    
    <div class="container text-center mt-4">
        <div class="row">
        
          <h1 class="fw-bold" style="color: #243163;">Frequently Asked Questions</h1>
        </div>
      </div>

    <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div class="col-lg-10">

        <div class="accordion accordion-flush" id="faqlist">

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                <i class="bi bi-question-circle question-icon"></i>
                What types of school supplies does Simba School Supplies offer?
              </button>
            </h3>
            <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div class="accordion-body">
                Simba School Supplies offers a wide range of high-quality notebooks, premium papers, and essential stationery items designed to support both students and educators in their educational journey.
              </div>
            </div>
          </div><!-- # Faq item-->

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                <i class="bi bi-question-circle question-icon"></i>
                Are the products at Simba School Supplies affordable?
              </button>
            </h3>
            <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div class="accordion-body">
                Yes! At Simba School Supplies, we believe in making quality school supplies affordable and accessible to everyone. We offer competitive prices to empower students and educators alike.
              </div>
            </div>
          </div><!-- # Faq item-->

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                <i class="bi bi-question-circle question-icon"></i>
                How does Simba School Supplies ensure product quality?
              </button>
            </h3>
            <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div class="accordion-body">
                We source our products from trusted manufacturers who prioritize quality. Our range includes premium notebooks, high-quality papers, and stationery designed to withstand daily use in educational settings.
              </div>
            </div>
          </div><!-- # Faq item-->

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                <i class="bi bi-question-circle question-icon"></i>
                Does Simba School Supplies offer custom stationery options?
              </button>
            </h3>
            <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div class="accordion-body">
                Yes! We offer customizable stationery options, allowing you to add a personal touch to notebooks and other school supplies for both individuals and schools.
              </div>
            </div>
          </div><!-- # Faq item-->

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                <i class="bi bi-question-circle question-icon"></i>
                How can Simba School Supplies contribute to the educational experience?
              </button>
            </h3>
            <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div class="accordion-body">
                Simba School Supplies provides essential tools that support learning and creativity. Our high-quality notebooks, papers, and stationery empower students and educators to achieve academic success and express their ideas effectively.
              </div>
            </div>
          </div><!-- # Faq item-->
          
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                <i class="bi bi-question-circle question-icon"></i>
                Does Simba School Supplies offer bulk purchasing options for schools?
              </button>
            </h3>
            <div id="faq-content-6" class="accordion-collapse collapse" data-bs-parent="#faqlist">
              <div class="accordion-body">
                Yes! We provide bulk purchasing options for schools and institutions. This allows educational establishments to purchase supplies in large quantities at discounted rates, making it more cost-effective for them.
              </div>
            </div>
          </div><!-- # Faq item-->

        </div>

      </div>
    </div>

  </div>
</section>


  </template>
  
  <script>
  export default {
    name: "AppFrequently",
    data() {
      return {
        faqItems: [
          {
            question: "Can I order directly from SIMBA?",
            answer: `
              Yes, through either our email address
              <a href="mailto:simba@gmail.com" target="_blank">contactsimba@gmail.com</a>
              or call us
              <a href="tel:250798971109" target="_blank">+250 79 897 1109</a>.
            `,
          },
          {
            question: "How do I become an official distributor?",
            answer: `
              Email us at
              <a href="mailto:contactsimba@gmail.com" target="_blank">contactsimba@gmail.com</a>
              and receive a sign-up sheet for the official distributors.
            `,
          },
          {
            question: "Is there a minimum order to be eligible as an official distributor?",
            answer: `Yes, 1,000 products per item.`,
          },
          {
            question: "What payment methods are accepted?",
            answer: `
              We accept all major credit cards including Visa, Discover, and
              American Express. We also accept Momo Payment at
              <strong>*123456#</strong>. You are welcome to submit your order as a purchase order. We will send you an invoice.
            `,
          },
        ],
        isAnswerVisible: [false, false, false, false], // Visibility state for each answer
      };
    },
    methods: {
      toggleAnswer(index) {
        // Toggle the visibility of the selected answer
        this.isAnswerVisible[index] = !this.isAnswerVisible[index];
      },
    },
  };
  </script>
  
  <style scoped>
  .faq {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100%;
    background-color: #fafafa;
  }
  
  .f-container {
    width: 100%;
    max-width: 800px;
    padding: 20px;
  }
  
  .f-title h3 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .f-cards {
    width: 100%;
  }
  
  .fc {
    width: 100%;
    margin-bottom: 15px;
  }
  
  .fc-question {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background-color: #f1f1f1;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
  }
  
  .fc-question h5 {
    margin: 0;
  }
  
  .fc-answer {
    display: none;
    padding: 10px 15px;
    background-color: #fafafa;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  .arrow-symbol {
    font-size: 24px;
    color: #007bff;
  }
  
  /* Responsive design for small devices */
  @media (max-width: 1023px) {
    .faq {
      padding: 20px;
    }
  
    .f-container {
      width: 100%;
      max-width: 600px;
    }
  
    .fc-answer {
      display: none; /* Initially hidden */
    }
  
    .fc-question h5 {
      flex-grow: 1;
      text-align: left;
    }
  
    .fc-answer {
      display: block; /* Revealed on small devices when clicked */
      background-color: #fff;
      border: 1px solid #ddd;
      margin-top: 10px;
    }
  }
  
  @media (min-width: 1024px) {
    /* For large screens, show the answers by default */
    .fc-answer {
      display: block;
    }
  }
  </style>
  