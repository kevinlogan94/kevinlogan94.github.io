<template>
  <section class="hero is-primary games">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Games</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/story-animation.gif?alt=media&token=6be366e6-208a-45b3-8543-42b14050f504"
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
            <o-button type="" @click="OpenIntrigueGames" size="is-medium"
              >Launch Website
            </o-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
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
