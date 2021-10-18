<template>
  <section class="hero banner is-fullheight bg-image">
    <div class="hero-body">
      <div class="columns banner-content mt-6">
        <div class="column is-one-fifth"></div>
        <div class="column mt-6">
          <h1 class="title">
            <img
              src="../assets/img/signature.png"
              alt="Xal title"
              class="image"
            />
          </h1>
          <h2 class="subtitle has-text-black has-text-weight-bold">
            Software Engineer, Meditator, Philomath, Video Game Designer
          </h2>
        </div>
        <div class="column is-one-quarter"></div>
        <div class="column is-one-quarter"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<style lang="scss" scoped>
.bg-image {
  background-image: url("../assets/img/BackCover.jpeg");
  background-size: 100% 100%;
}
.banner-content {
  width: 100%;
}

//@media only screen and (max-width: 600px) {
//  .bg-image {
//    background-image: url("../assets/img/BackCover.jpeg");
//    background-size: cover;
//  }
//}
</style>
