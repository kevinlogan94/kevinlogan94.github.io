<template>
  <section class="hero banner is-fullheight bg-image">
    <div class="hero-body">
      <div class="columns is-vcentered banner-content">
        <div class="column is-one-quarter"></div>
        <div class="column has-background-green">
          <h1 class="has-text-white">Test</h1>
          <h2 class="subtitle has-text-white">A story driven clicker game</h2>
        </div>
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
  background-image: url("../assets/img/Cover.jpg");
  background-size: auto 100%;
}
.banner-content {
  width: 100%;
}
</style>
