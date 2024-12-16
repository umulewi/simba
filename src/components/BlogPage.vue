<template>
    <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img 
      src="@/assets/img/bg1.jpg" 
      alt="Logo" 
      class="zoom-in" 
      style="width: 100%; height: 100%; object-fit: cover;">
      <div class="overlay-text" style="">
        <p style="margin-top: 9px;font-size: 20px;">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>Our Blogs.
        </p>
      </div>
    </div>
    <section>
        <div class="container py-8">
            <div class="text-center mb-8">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="mt-2" style="color: #243163;">Our Blog</h1>
                </div>
                <p class="subtitle">At Simba Stationery, we embrace an agile methodology to continuously refine our offerings. By testing assumptions and actively engaging with our audience, we ensure that we meet the evolving needs of our customers efficiently and effectively.</p>

            </div>
            <div class="row" style="background: #EDF2F8;">
                <article class="col-md-6 mb-4">
                    <div class="card shadow-sm fixed-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-3 text-muted">
                                <span class="badge badge-success">Tutorial</span>
                                <span class="small">14 days ago</span>
                            </div>
                            <h5>How to organize your office supplies efficiently</h5>
                            <p class="card-text text-muted">At Simba Stationery, we believe in making your workspace both productive and organized. Here's how you can manage your office supplies with ease.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" width="30" height="30">
                                    <span class="ml-2 font-weight-medium text-dark">Jese Leos</span>
                                </div>
                                <router-link to="/open" class="btn btn-link text-primary font-weight-bold" style="font-weight:bold;">Read more</router-link>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="col-md-6 mb-4">
                    <div class="card shadow-sm fixed-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-3 text-muted">
                                <span class="badge badge-primary">Article</span>
                                <span class="small">14 days ago</span>
                            </div>
                            <h5>The best pens for writing in 2024</h5>
                            <p class="card-text text-muted">Choosing the right pen can make a huge difference in your writing experience. Here are some of the best pens you can find at Simba Stationery in 2024.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" width="30" height="30">
                                    <span class="ml-2 font-weight-medium text-dark">Bonnie Green</span>
                                </div>
                                
                                <router-link to="/open" class="btn btn-link text-primary font-weight-bold" style="font-weight:bold;">Read more</router-link>
                            </div>
                        </div>
                    </div>
                </article>
    
                <!-- Third Blog Article -->
                <article class="col-md-6 mb-4">
                    <div class="card shadow-sm fixed-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-3 text-muted">
                                <span class="badge badge-success">Guide</span>
                                <span class="small">7 days ago</span>
                            </div>
                            <h5>How to set up an efficient work environment with the right tools</h5>
                            <p class="card-text text-muted">At Simba Stationery, we provide the best office tools that can help you create a productive work environment. Learn how to set up your workspace for maximum efficiency.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" width="30" height="30">
                                    <span class="ml-2 font-weight-medium text-dark">Jese Leos</span>
                                </div>
                                <router-link to="/open" class="btn btn-link text-primary font-weight-bold" style="font-weight:bold;">Read more</router-link>
                            </div>
                        </div>
                    </div>
                </article>
    
                <!-- Fourth Blog Article -->
                <article class="col-md-6 mb-4">
                    <div class="card shadow-sm fixed-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-3 text-muted">
                                <span class="badge badge-primary">News</span>
                                <span class="small">5 days ago</span>
                            </div>
                            <h5>New eco-friendly products at Simba Stationery</h5>
                            <p class="card-text text-muted">Simba Stationery is excited to introduce a new range of eco-friendly office products, made to help reduce your environmental footprint while providing top-quality tools.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" width="30" height="30">
                                    <span class="ml-2 font-weight-medium text-dark">Bonnie Green</span>
                                </div>
                                <router-link to="/open" class="btn btn-link text-primary font-weight-bold" style="font-weight:bold;">Read more</router-link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    </template>
    
    <style scoped>
    a{
        text-decoration: none;
    }
    p{
        font-size: 18px;
    }
    .badge {
      display: inline-block;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    .badge-primary {
      background-color: #243163;
      color: white;
    }
    .badge-success {
      background-color: #28a745; /* Green color */
      color: white;
    }
    h5{
        color: #243163;
    }
    .text-primary{
        color: #243163; 
    }
    
    .card {
        display: flex;
        flex-direction: column;
        height: 250px; /* Static height */
    }
    
    .card-body {
        flex-grow: 1; /* Ensures the content fills available space */
    }

    .subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto; /* Center-align the subtitle */
  line-height: 1.6;
}
    </style>
    