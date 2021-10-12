<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Hey, I'm Kevin</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <img
              src="../assets/img/stud.jpeg"
              alt="Profile Picture"
              class="image"
            />
          </div>
          <div class="column">
            <p class="content">
              Thanks for visiting me on my corner of the internet. Please take a look around.
            </p>
            <p class="content">I'm best most known for my work buildings Web Applications for Transformers, Littlest Pet Shop, My Little Pony, Fifth Third Bank, and NaviStone.</p>
            <p class="content">I'm the kind of guy that wakes up everyday and constantly asks himself, what is one thing I can do today to become better. I am truly obsessed with progress and slowly becoming the best version of myself.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class AboutMe extends Vue {}
</script>

<style lang="scss">
.image {
  margin: auto;
  max-height: 500px;
}
</style>
