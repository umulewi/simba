<template>
    <div class="image-container" style="position: relative; width: 100%; height: 250px;">
      <img src="@/assets/img/bg1.jpg" alt="Logo" style="width: 100%; height: 100%; object-fit: cover;">
    <div class="overlay-text" style="">
    <p style="margin-top: 9px;">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      Our contact.
    </p>
  </div>
</div>
<div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="mb-5" style="color: #243163;">Contact For Any Query</h1>
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
                            <form action="message.php" id="contact_form" method="POST">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" name="name" id="name" placeholder="Your Name" required>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" name="message" id="message" style="height: 150px" required></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn w-100 py-3" type="submit" name="submit" style="background-color: #243163;color: aliceblue;font-size: 1rem;">Send Message</button>
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
  export default {
    name: 'ContactPage',
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

}

/* Media query for tablets and small devices */
@media screen and (max-width: 768px) {
  .overlay-text {
    font-size: 1rem; /* Reduce font size */
    width: 40%; /* Increase width for readability */
  }

  .image-container {
    height: 200px; /* Adjust height */
  }
}

/* Media query for very small screens */
@media screen and (max-width: 480px) {
  .overlay-text {
    font-size: 0.9rem; /* Smaller font for small screens */
    width: 70%; /* Wider text box */
    padding: 8px 15px; /* Adjust padding */
  }

  .image-container {
    height: 150px; /* Further reduce height */
  }
}

</style>