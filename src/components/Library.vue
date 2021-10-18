<template>
  <section class="hero library">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">My Library</h1>
        <h2 class="subtitle has-text-centered">
          The Personal-Development books that have molded who I am today.
        </h2>
        <b-carousel-list
          :data="items"
          :items-to-show="3"
          :items-to-list="1"
          :arrow-hover="false"
          :repeat="true"
        ></b-carousel-list>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Library extends Vue {
  items = [
    {
      title: "The Power of your Subconscious Mind",
      image: "https://m.media-amazon.com/images/I/51X3H9IMgmL.jpg",
    },
    {
      title: "Peak Performance",
      image: "https://m.media-amazon.com/images/I/41ssxrhLwCL.jpg",
    },
    {
      title: "Start Where You Are",
      image: "https://m.media-amazon.com/images/I/51WVBVDl4cL.jpg",
    },
    {
      title: "Range",
      image: "https://m.media-amazon.com/images/I/41OjnXiiB1L.jpg",
    },
    {
      title: "How to be a 3% Man",
      image: "https://m.media-amazon.com/images/I/51nZECMYKsL.jpg",
    },
    {
      title: "Mastering Yourself",
      image: "https://m.media-amazon.com/images/I/51bjykpGDfL.jpg",
    },
    {
      title: "The Way of the Superior Man",
      image: "https://m.media-amazon.com/images/I/61pqlNBnmQL.jpg",
    },
    {
      title: "How to Win Friends & Influence People",
      image: "https://m.media-amazon.com/images/I/51PWIy1rHUL.jpg",
    },
    {
      title: "Letting Go: The Pathway of Surrender",
      image: "https://m.media-amazon.com/images/I/41BoLINwhQL.jpg",
    },
    {
      title: "The Art of Seduction",
      image: "https://m.media-amazon.com/images/I/41+FfYVLnEL.jpg",
    },
    {
      title: "Heart of the Soul",
      image: "https://m.media-amazon.com/images/I/51kqjUwGBrL.jpg",
    },
    {
      title: "The Seat of the Soul",
      image: "https://m.media-amazon.com/images/I/51Em8qZ9mqL.jpg",
    },
  ];

  mounted() {
    setInterval(this.triggerCarouselTransition, 7500);
  }

  triggerCarouselTransition() {
    const rightIcons = document.getElementsByClassName("has-icons-right");
    const chevron = rightIcons[rightIcons.length - 1];
    const clickEvent = new Event("click");
    chevron.dispatchEvent(clickEvent);
  }
}
</script>

<style scoped></style>
