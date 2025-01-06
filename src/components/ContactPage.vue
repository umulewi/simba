<template>
 <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img 
      src="@/assets/img/bg1.jpg" 
      alt="Logo" 
      class="" 
      style="width: 100%; height: 100%; object-fit: cover;">
    <!-- Overlay text -->
    <div class="overlay-text zoom-in">
      
      <p style="margin-top: 9px;">
        <i class="fa-solid fa-arrow-right-from-bracket" style="color:#FFE338"></i>&nbsp;
        <label style="color:#FFE338">Contact Us.</label>
      </p>
    </div>
  </div>
<div class="container-xxl py-5">
  <div class="container">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h1 class="mb-5" style="color: #243163;">Contact For Any Query</h1>
      <p class="subtitle" style="font-size: 16px; color: #555;">
        Have any questions or need assistance? Reach out to us, and our team will be happy to provide the information or support you need. We're here to help!
      </p>
    </div>
    <div class="row g-4">
      <div class="col-12">
        <div class="row gy-4">

        </div>
      </div>
      <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.542874436121!2d30.147405373961465!3d-1.9351514980472833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca71157394f89%3A0x706132a337192890!2sHYDRO%20STATIONERS%20LIMITED!5e0!3m2!1sen!2srw!4v1733735037762!5m2!1sen!2srw" width="100%" height="370" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
      </div>
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                          <form @submit.prevent="sendEmail">
                            <div class="row g-3">
                              <div class="col-md-6">
                                <div class="form-floating">
                                  <input type="text" class="form-control" v-model="name" id="name" placeholder="Your Name" required>
                                  <label for="name">Your Name</label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-floating">
                                  <input type="email" class="form-control" v-model="email" id="email" placeholder="Your Email" required>
                                  <label for="email">Your Email</label>
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="form-floating">
                                  <input type="text" class="form-control" v-model="subject" id="subject" placeholder="Subject">
                                  <label for="subject">Subject</label>
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="form-floating">
                                  <textarea class="form-control" v-model="message" id="message" placeholder="Leave a message here" style="height: 150px" required></textarea>
                                  <label for="message">Message</label>
                                </div>
                              </div>
                              <div v-if="responseMessage" :class="`alert mt-3 ${responseClass}`" role="alert">{{ responseMessage }}

                              </div>
                              <div class="col-12 text-center">
                                
                                <div v-if="isLoading" class="spinner-border text-primary" role="status">
                                  <span class="visually-hidden">Loading...</span>
                                </div>
                                <button v-else class="nav-button btn w-100 py-3" type="submit" style="background-color: #243163; color: aliceblue; font-size: 1rem;"
                                 @mouseover="hoverButton" @mouseout="resetButton">Send Message</button>
                                </div>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </template>

<script>
import { globalVariable } from '@/global';
export default {
  setup() {
    return { globalVariable };
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      isLoading: false, 
      responseMessage: '', 
      responseClass: '' 
    };
  },
  methods: {
    hoverButton(event) {
      event.target.style.backgroundColor = '#FFE338';
      event.target.style.color = 'black';
    },
    resetButton(event) {
      event.target.style.backgroundColor = '#243163';
      event.target.style.color = 'aliceblue';
    },
    async sendEmail() {
      this.isLoading = true; // Show loading spinner
      try {
        const response = await fetch(`${globalVariable}/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
          })
        });

        const result = await response.json();

        if (response.ok) {
          this.responseMessage = result.message;
          this.responseClass = 'alert-success';
          this.resetForm();
        } else {
          this.responseMessage = result.message;
          this.responseClass = 'alert-danger';
        }
      } catch (error) {
        this.responseMessage = 'An error occurred. Please try again later.';
        this.responseClass = 'alert-danger';
      } finally {
        this.isLoading = false; // Hide loading spinner
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
};
</script>
<style>
.image-container {
  position: relative;
  width: 100%;
  height: 250px;
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
    height: 10px;
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

