<template>
  <div class="image-container" style="position: relative; width: 100%; height: 250px;">
    <img 
      src="@/assets/img/bg1.jpg" 
      alt="Logo" 
      class="zoom-in" 
      style="width: 100%; height: 100%; object-fit: cover;">
      <div class="overlay-text" style="">
        <p style="margin-top: 9px;">
          <i class="fa-solid fa-arrow-right-from-bracket" style="color:#FFE338"></i>&nbsp;
          <label style="color:#FFE338">Testimonial.</label>
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
      <!-- Loop through testimonials dynamically -->
      <div v-for="(testimonial, index) in testimonials" :key="index" :class="'div' + (index + 1) + ' eachdiv'">
        <div class="userdetails">
          <div class="imgbox">

            <img :src="`${globalVariable}/uploads/testimonial/${testimonial.image}`" alt="Slide" class="animated-image" />

          </div>
          
          <div class="detbox">
            <p class="name">{{ testimonial.name }}</p>
            <p class="designation">{{ testimonial.position }}</p>
          </div>
        </div>
        
        <div class="review" :class="{ dark: testimonial.dark }">
          <h5>{{ testimonial.topic }}</h5>
          <p>{{ testimonial.description }}</p>
        </div>
      </div>
    </div>
  </div>


  
</template>

<script>
import { ref, onMounted } from 'vue'; 
import { globalVariable } from '@/global';

export default {
  name: "TestimonialsPage",
  setup() {
    const testimonials = ref([]); 
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${globalVariable}/select_testimonial`); 
        if (!response.ok) throw new Error("Failed to fetch testimonials");
        const data = await response.json(); 
        testimonials.value = data; 
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    onMounted(() => {
      fetchTestimonials();
    });

    return { globalVariable, testimonials };
  },
};
</script>




<style>

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  max-width: 1000px;
  font-size: 16px;
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
	background: gray;
    grid-column: 4/5;
    grid-row: 1/3;
    color: black;
}
.div4
{
	background: gray;
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