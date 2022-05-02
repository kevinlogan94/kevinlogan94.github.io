<template>
  <section class="hero is-primary aboutMe">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Hey, I'm Kevin</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/stud.jpeg?alt=media&token=049bec4e-70f1-4479-871b-cb29fddb96fd"
              alt="Profile Picture"
              class="image"
            />
          </div>
          <div class="column">
            <p class="content">
              I'm best most known for my work buildings Web Applications for
              Transformers, Littlest Pet Shop, My Little Pony, Fifth Third Bank,
              and NaviStone.
            </p>
            <p class="content">
              I'm the kind of guy that wakes up everyday and constantly asks
              himself, what is one thing I can do today to become better. Ever
              since I was very young I have always had a burning passion for
              everything that I do. I am truly obsessed with progress and slowly
              becoming the best version of myself.
            </p>
            <p class="content">
              Thanks for visiting me on my corner of the internet. This site is
              where you can find some the things that have guided me to where I
              am now and what I'm currently up to. I hope that they can help you
              on your journey as well.
            </p>
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
export default class AboutMe extends Vue {}
</script>

<style lang="scss">
.image {
  margin: auto;
  max-height: 500px;
}
</style>
