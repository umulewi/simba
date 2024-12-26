<template>
<main class="py-5 bg-light text-dark">
    <div class="container-fluid">
      <article class="mx-auto w-100" style="max-width: 900px;">
        <header class="mb-4">
          <address class="d-flex align-items-center mb-4">
            <div>
              <a href="#" class="text-dark fw-bold fs-4">{{ blog.author }}</a>
              <p class="mb-0 text-muted">{{ blog.tagline }}</p>
              <p class="mb-0 text-muted">
                <time :datetime="blog.date" :title="blog.date">{{ blog.dateFormatted }}</time>
              </p>
            </div>
          </address>
          <h1 class="mb-4 display-5 fw-bold">{{ blog.name }}</h1>
        </header>
        <p class="lead">{{ blog.content_image1 }}</p>
        <p>{{ blog.content }}</p>
        <figure class="my-4">
          <img :src="`${globalVariable}/uploads/blog/${blog.image1}`" class="img-fluid" :alt="blog.name"/>
        </figure>
        <p>{{ blog.content_image1 }}</p>

        <figure class="my-4">
          <img :src="`${globalVariable}/uploads/blog/${blog.image2}`" class="img-fluid" :alt="blog.name"/>
        </figure>
        <p>{{ blog.content_image1 }}</p>
        <figure class="my-4">
          <img :src="`${globalVariable}/uploads/blog/${blog.image3}`" class="img-fluid" :alt="blog.name"/>
        </figure>
        <p>{{ blog.content_image1 }}</p>
        <p>{{ blog.content_image1 }}</p>
      </article>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { globalVariable } from '@/global';

export default {
  name: "OpenPage",
  setup() {
    const route = useRoute(); // Access the route parameter (blog ID)
    const blog = ref({
      title: '',
      author: '',
      tagline: '',
      date: '',
      dateFormatted: '',
      lead: '',
      content: '',
      image: '',
      imageCaption: '',
      benefits: [],
      dealsLink: '',
      communityMessage: ''
    });

    const fetchBlog = async () => {
      const blogId = route.params.id; // Extract the blog ID from the route
      try {
        const response = await fetch(`${globalVariable}/select_blog/${blogId}`);
        if (!response.ok) throw new Error("Failed to fetch blog details");
        const data = await response.json();
        blog.value = data; // Assign the fetched blog data
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    onMounted(() => {
      fetchBlog(); // Fetch the blog details on component mount
    });

    return { blog, globalVariable }; // Return the blog data and global variable to bind in the template
  }
};
</script>


