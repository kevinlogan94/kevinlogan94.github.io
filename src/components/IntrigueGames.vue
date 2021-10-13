<template>
  <section class="hero is-primary games">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Games</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <img
              :src="require('@/assets/story-animation.gif')"
              alt="Xal at his desk"
              class="image"
            />
          </div>
          <div class="column">
            <p class="content">
              Check out my latest game, Xal's Path, on Android and iOS.
            </p>
            <p class="content">
              Xal's Path is a game where you, the stranger, strive to help Xal
              rid the realm of a terrible blight and uncover the deceitful truth
              behind it.
            </p>
            <b-button type="" @click="OpenIntrigueGames" size="is-medium"
              >Launch Website
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class IntrigueGames extends Vue {
  soundtrackLink = "https://intrigue-games.com";

  OpenIntrigueGames() {
    window.open(this.soundtrackLink, "_blank");
  }
}
</script>

<style lang="scss" scoped>
.image {
  margin: auto;
  max-height: 500px;
}
</style>
