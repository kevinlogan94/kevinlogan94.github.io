<template>
  <section class="hero is-primary games">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>Games</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/story-animation.gif?alt=media&token=6be366e6-208a-45b3-8543-42b14050f504"
              alt="Xal at his desk"
              class="image"
              v-scroll-animation
            />
          </div>
          <div class="column">
            <p class="content" v-scroll-animation>
              Check out my latest game, Xal's Path, on Android and iOS.
            </p>
            <p class="content" v-scroll-animation>
              Xal's Path is a game where you, the stranger, strive to help Xal
              rid the realm of a terrible blight and uncover the deceitful truth
              behind it.
            </p>
            <o-button
              type=""
              @click="openTrailer"
              size="is-medium"
              v-scroll-animation
              >Launch Trailer
            </o-button>
            <o-button
              @click="openSourceCode"
              class="ml-2"
              variant="info"
              size="is-medium"
              v-scroll-animation
              >Source Code</o-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trailerLink = "https://www.youtube.com/watch?v=r0CQO2x3VGY";
const sourceCodeLink = "https://github.com/kevinlogan94/xals-path";

const openTrailer = () => {
  window.open(trailerLink, "_blank");
};
const openSourceCode = () => {
  window.open(sourceCodeLink, "_blank");
};
</script>

<style scoped>
.image {
  margin: auto;
  max-height: 500px;
}
</style>
