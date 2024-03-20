<template>
  <section id="passions" class="hero passions">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>Passions</h1>
        <h2 class="subtitle has-text-centered" v-scroll-animation>What I do at a glance.</h2>
        <div class="columns">
          <o-carousel :items-to-show="2" :items-to-list="1" :repeat="true" v-scroll-animation>
            <o-carousel-item v-for="(passion, i) in passions" :key="i">
              <div class="has-text-centered column">
                <div class="container content">
                  <o-icon
                      :icon="passion.icon"
                      size="large"
                      variant="primary"
                  ></o-icon>
                  <p>{{ passion.title }}</p>
                </div>
                <p class="content">
                  {{ passion.description }}
                </p>
              </div>
            </o-carousel-item>
          </o-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const passions = ref([
  {
    icon: "cloud",
    title: "Software Engineering",
    description:
        "I build creative and engaging products as a passionate software engineer. My experience includes front-end development at established companies and full-stack development in the startup world, even leading a team of 4.",
  },
  {
    icon: "home",
    title: "Real Estate",
    description:
        "In 2022, I took a leap into real estate ownership, successfully acquiring my first property and stepping into the role of a landlord. This experience honed valuable project management and financial planning skills.",
  },
  {
    icon: "book-open-variant",
    title: "Personal Development",
    description:
        "I am a lifelong learner, constantly exploring new personal development books. Believing understanding diverse experiences fuel creativity and problem-solving skills.",
  },
  {
    icon: "google-controller",
    title: "Video Game Design",
    description:
        "Giving Entrepreneurship a shot! I founded Intrigue Games in 2021 and developed my first mobile game.",
  },
  {
    icon: "instagram",
    title: "Social Media",
    description:
        "Actively exploring the ever-evolving landscape of social media content creation.",
  },
]);

const triggerCarouselTransition = () => {
  // Simulate click event on right arrow (consider alternative approach)
  const chevron = document.getElementsByClassName("has-icons-right")[0];
  const clickEvent = new Event("click");
  chevron.dispatchEvent(clickEvent);
};

onMounted(() => {
  setInterval(triggerCarouselTransition, 7500);
});
</script>

