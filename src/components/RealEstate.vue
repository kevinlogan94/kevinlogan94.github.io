<template>
  <section class="hero is-success">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>Real Estate</h1>
        <h2 class="subtitle has-text-centered" v-scroll-animation>Want me as your landlord? Make sure you apply when the next spot opens!</h2>
        <div class="columns is-vcentered">
          <div class="column">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2FfrontYard.jpg?alt=media&token=d59c64c8-e333-435b-a312-7412ed45c453"
              alt="Duplex"
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
            <o-button type="" @click="OpenIntrigueGames" size="is-medium" v-scroll-animation
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
export default class RealEstate extends Vue {
}
</script>

<style scoped></style>
