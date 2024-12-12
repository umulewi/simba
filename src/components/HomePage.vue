<template>
  <div>
    <!-- Exclude AppHeader from animations -->
    <AppHeader />

    <!-- Add animations to other sections -->
    <div
      v-for="section in sections"
      :key="section.id"
      :class="['section', section.animationClass]"
      ref="sections"
    >
      <component :is="section.component" />
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import WhoWeare from "./WhoWeare.vue";
import OurProducts from "./OurProducts.vue";
import OurTeam from "./OurTeam.vue";
import WhyChoose from "./WhyChoose.vue";
import FrequentlyAsked from "./FrequentlyAsked.vue";

export default {
  name: "HomePage",
  components: {
    AppHeader,
    WhoWeare,
    OurProducts,
    OurTeam,
    WhyChoose,
    FrequentlyAsked,
  },
  data() {
    return {
      sections: [
        { id: 1, component: WhoWeare, animationClass: "slide" },
        { id: 2, component: OurProducts, animationClass: "zoom" },
        { id: 3, component: OurTeam, animationClass: "bounce" },
        { id: 4, component: WhyChoose, animationClass: "fade" },
        { id: 5, component: FrequentlyAsked, animationClass: "zoom" },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    this.$refs.sections.forEach((section) => {
      observer.observe(section);
    });
  },
};
</script>

<style scoped>
/* General styles for all sections */
.section {
  width: 100%;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade Animation */
.fade {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.fade.visible {
  opacity: 1;
}

/* Slide Animation */
.slide {
  transform: translateX(-10%);
  transition: transform 0.5s ease-in-out;
}
.slide.visible {
  transform: translateX(0);
}

/* Zoom Animation */
.zoom {
  transform: scale(0.9);
  transition: transform 0.5s ease;
}
.zoom.visible {
  transform: scale(1);
}

/* Bounce Animation */
.bounce {
  animation: none;
}
.bounce.visible {
  animation: bounce-in 0.6s ease;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
