<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">My Library</h1>
        <h2 class="subtitle has-text-centered"></h2>
        <b-carousel-list
          :data="items"
          items-to-show="3"
          items-to-list="1"
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
      title: "test",
      image: "https://m.media-amazon.com/images/I/51X3H9IMgmL.jpg",
    },
    {
      title: "test",
      image: "https://m.media-amazon.com/images/I/41ssxrhLwCL.jpg",
    },
    {
      title: "test",
      image: "https://m.media-amazon.com/images/I/51nZECMYKsL.jpg",
    },
    {
      title: "test",
      image: "https://m.media-amazon.com/images/I/51bjykpGDfL.jpg",
    },
    {
      title: "test",
      image: "https://m.media-amazon.com/images/I/61pqlNBnmQL.jpg",
    },
    {
      title: "test",
      image: "https://m.media-amazon.com/images/I/51PWIy1rHUL.jpg",
    },
    {
      title: "Letting Go: The Pathway of Surrender",
      image: "https://m.media-amazon.com/images/I/41BoLINwhQL.jpg",
    },
    {
      title: "test",
      image: "https://m.media-amazon.com/images/I/51Em8qZ9mqL.jpg",
    },
  ];
}
</script>

<style scoped></style>
