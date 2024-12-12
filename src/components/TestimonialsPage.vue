<template>
  <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img 
      src="@/assets/img/bg1.jpg" 
      alt="Logo" 
      class="zoom-in" 
      style="width: 100%; height: 100%; object-fit: cover;">
      <div class="overlay-text" style="">
        <p style="margin-top: 9px;">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>Testimonial.
        </p>
      </div>
    </div>
<div class="container">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h1 class="mb-2 mt-5" style="color: #243163;">What our happy user says!</h1>
<p class="subtitle">Our satisfied users love the experience they've had with our product. Here's what they have to say about how it has helped them achieve their goals and improve their daily tasks.</p>

          
    </div>
</div>
<div class="outerdiv">
    <div class="innerdiv">
      <!-- div1 -->
      <div class="div1 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="">
          </div>
          
          <div class="detbox">
                    <p class="name">Emily Johnson</p>
                    <p class="designation">Verified Customer</p>
                </div>
        </div>
        <div class="review">
          <h2>High-quality products and exceptional service!</h2>
          
          <p>"I’ve been purchasing supplies from Simba Stationery for my office, and I’m consistently impressed by the quality and reliability of their products. Their team is always friendly and helpful, making the entire process smooth and enjoyable. The attention to detail and commitment to customer satisfaction truly sets them apart from other suppliers I’ve worked with."</p>
        </div>
      </div>
      <!-- div2 -->
      <div class="div2 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">Michael Brown</p>
            <p class="designation">Business Owner</p>
          </div>
        </div>
        <div class="review">
          <h5>Simba Stationery has everything I need for my business!</h5>
          <p>"From pens to printers, Simba Stationery is my go-to supplier. Their prices are competitive, and their delivery is always on time. I highly recommend them to anyone looking for quality stationery products."</p>
          

        </div>
      </div>
      <!-- div3 -->
      <div class="div3 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">Sophia Martinez</p>
            <p>Educator</p>
          </div>

        </div>
        <div class="review dark">
          <h3>Reliable and budget-friendly solutions for schools</h3>
         
          <p>"Simba Stationery has truly been a game-changer for our school. Their bulk pricing options and consistent reliability make it effortless to keep our classrooms fully equipped with the supplies our students require. What stands out the most is their personalized customer service, which ensures every order is handled with precision and delivered promptly. Their dedication to understanding our needs and providing tailored solutions has been instrumental in creating a seamless experience for our school operations..

"</p>


        </div>
      </div>
      <!-- div4 -->
      <div class="div4 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">David Williams</p>
            <p>Freelancer</p>
          </div>

        </div>
        <div class="review dark">
          <h3>Exceptional variety and customer support</h3>
                <p>"As a freelancer, I rely on Simba Stationery for my daily needs. They have everything I could possibly require, and their support team is always ready to help with any queries or special requests."</p>

        </div>
      </div>
      <!-- div5 -->
      <div class="div5 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="">
          </div>
          <div class="detbox">
                    <p class="name">Olivia Carter</p>
                    <p class="designation">Verified Customer</p>
                </div>

        </div>
        <div class="review">
          <h2>
            Simba Stationery exceeds expectations every time!
          </h2>
          <p>"Their wide selection of products and unbeatable customer service keep me coming back. I’ve recommended Simba Stationery to all my colleagues, and they’ve all been equally impressed. It’s refreshing to deal with a company that values its customers and goes above and beyond to ensure satisfaction."</p>


        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

</script>

<style>
.subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap');
body{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	
}
a:link,a:active,a:visited,a:hover{
	color:#3f51b5;
}

.outerdiv
{
	width: 100%;
    min-height: 100vh;
    background: #EDF2F8;
    display: flex;
    align-items: center;
    justify-content: center;
}
.innerdiv
{
	transform: scale(0.9);
	margin: 1rem;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-rows: repeat(2,22rem);
	grid-template-columns: repeat(4,17rem);
}
.eachdiv
{
	padding: 1rem 2rem;
    border-radius: 0.8rem;
    box-shadow: 5px 5px 20px #6d6b6b6b;
    color: white;
}
.div1
{
	background: #733FC8;
    grid-column: 1/3;
    grid-row: 1/2;
    background-image: url(https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/bg-pattern-quotation.svg);
    background-repeat: no-repeat;
    background-position-x: 25rem;
}
.div2
{
	background:#243163;
  
    grid-column: 3/4;
    grid-row: 1/2;
}
.div3
{
	background: white;
    grid-column: 4/5;
    grid-row: 1/3;
    color: black;
}
.div4
{
	background: white;
	grid-column: 1/2;
    grid-row: 2/3;
    color: black;
}
.div5
{
	background: #18202D;
	grid-column: 2/4;
    grid-row: 2/3;
}
.userdetails
{
	display: flex;
}
.imgbox
{
	margin-right: 1rem;
}
.imgbox img
{
	border-radius: 50%;
	width: 2rem;
	border: 2px solid #cec5c5;
}
.detbox
{
	display: flex;
    flex-direction: column;
    justify-content: center;
}
.detbox p
{
	margin: 0;
}
.detbox .name
{
	color: hsl(0, 0%, 81%);
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
    font-weight: 600;
}
.detbox .name.dark
{
	color: #49505A;
}
.detbox .designation
{
	color: hsl(0, 0%, 81%);
    opacity: 50%;
    font-size: 0.8rem;
}
.detbox .designation.dark
{
	color: #49505A;
}
.review h3
{
	font-size: 1.4rem;
	color: #F3DEFF;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 0.8rem;
}
.review.dark h3{
	color:#4B5258;
}
.review p
{
	font-size: 0.95rem;
    color: #F3DEFF;
    font-weight: 500;
    opacity: 50%;
    line-height: 1.5;
}
.review.dark p{
	color: #0e0e0e;
}
.attribution
{
	font-size: 1rem;
    line-height: 1.5;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    text-align: right;
}
.attribution a
{
	text-decoration: none;
}

@media only screen and (max-width: 1000px)
{
	.innerdiv
	{
		transform: scale(0.7);
	}
}
@media only screen and (max-width: 800px)
{
	.innerdiv
	{
		transform: scale(0.6);
	}
}
@media only screen and (max-width: 600px)
{
	.div1 {
		background-position-x: 10rem;
	}
	.innerdiv
	{
		display: flex; 
		flex-direction: column;
		transform: scale(1);
		margin: 2rem;
		margin-bottom: 5rem;
	}
	.attribution
	{
		position: relative;
	}
}
</style>