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
    icon: "web",
    title: "Web Development",
    description:
        "My first love, I have a burning passion for web development. I have built several Web Applications used by millions of users across the country.",
  },
  {
    icon: "google-controller",
    title: "Video Game Design",
    description:
        "To fulfill a promise I made when I was five years old, You can find me building video games to offer a break from reality while also providing a story with lessons people can use to better their own lives.",
  },
  {
    icon: "flower",
    title: "Mindfulness",
    description:
        "After surviving a traumatic event in my early twenties, I use mindfulness every day to constantly be in a state of calm and control over the present moment.",
  },
  {
    icon: "cloud",
    title: "Cloud Services",
    description:
        "To bring my Web Applications to life, I create a steam line between applications and data by building cloud solutions.",
  },
  {
    icon: "book-open-variant",
    title: "Personal Development",
    description:
        "I genuinely love to learn. With this, I am constantly reading and studying from the greatest minds of our time in my relentless self-reliance pursuit.",
  },
  {
    icon: "currency-usd",
    title: "Finance",
    description:
        "After making it through the 2020 quarantine, I developed a passion for financial independence. To do this, you can find me constantly looking for new avenues for investing.",
  },
  {
    icon: "auto-fix",
    title: "Art",
    description:
        "I use pixel art to bring video games to life and offer an immersive animated experience.",
  },
  {
    icon: "home",
    title: "Real Estate",
    description:
        "I currently lease out rental property to provide a quality living experience to some of the best renters around.",
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

