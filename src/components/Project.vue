<template>
  <div class="tile is-parent">
    <article class="tile is-child box has-text-centered" v-scroll-animation>
      <div class="columns">
        <div class="column has-text-centered">
          <h4 class="title is-4 has-text-black">{{ title }}</h4>
          <p>{{timePeriod}}</p>
          <h5 class="subtitle has-text-black">{{ subtitle }}</h5>
          <p class="content">{{ description }}</p>
        </div>
        <div class="column">
          <figure class="image is-3by2">
            <img :src="props.img" :alt="props.imgAlt" />
          </figure>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  img: String,
  imgAlt: String,
  title: String,
  subtitle: String,
  description: String,
  timePeriod: String
});
</script>

<style scoped lang="scss">
.software .before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}
.software .enter {
  opacity: 1;
  transform: scale(1) rotateZ(0);
}
</style>
