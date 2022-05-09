<template>
  <section class="hero is-success">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>Real Estate</h1>
        <h2 class="subtitle has-text-centered" v-scroll-animation>Coming Soon...</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
export default class RealEstate extends Vue {}
</script>

<style scoped></style>
