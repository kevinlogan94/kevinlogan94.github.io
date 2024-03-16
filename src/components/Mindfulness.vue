<template>
  <section class="hero meditation">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>Meditation</h1>
        <h2 class="subtitle has-text-centered" v-scroll-animation>
          The best platforms that I use for calm and mental programming.
        </h2>
        <o-carousel
            :items-to-show="3"
            :items-to-list="1"
            :indicators="false"
            class="is-flex-centered"
            v-scroll-animation
        >
          <o-carousel-item v-for="(item, i) in items" :key="i">
            <figure
                class="image"
                @click="openMindfulnessPlatform(item.location)"
            >
              <img :src="item.image" :alt="item.title" :title="item.title" />
            </figure>
          </o-carousel-item>
        </o-carousel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    title: "Calm",
    location: "https://calm.com",
    image:
        "https://enrichmentcentre.ca/wp-content/uploads/2021/08/calm_logo.png",
  },
  {
    title: "Balance",
    location: "https://balanceapp.com",
    image:
        "https://mindoverlatte.com/wp-content/uploads/2020/05/A-Balance.png",
  },
  {
    title: "Jason Stephenson",
    location: "https://www.youtube.com/c/JasonStephensonSleepMeditationMusic",
    image:
        "https://yt3.ggpht.com/ytc/AKedOLQDcNwpiqi0OEZb7ZZOw8jJLTUpPt1JaSoWHmLn9w=s900-c-k-c0x00ffffff-no-rj",
  }
]);

const openMindfulnessPlatform = (location: string) => {
  window.open(location, "_blank");
};
</script>

<style scoped>
.meditation figure {
  cursor: pointer;
}
.is-flex-centered > div {
  display: flex;
  justify-content: center;
}
</style>
