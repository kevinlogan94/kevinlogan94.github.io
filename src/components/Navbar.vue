<template>
  <nav
    class="navbar is-primary is-fixed-top is-spaced"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://twitter.com/KevinLogan12">
        <o-icon variant="white" icon="twitter" title="Twitter Icon"></o-icon
      ></a>
      <a
        class="navbar-item"
        href="https://www.linkedin.com/in/kevin-logan-73277594/"
      >
        <o-icon variant="white" icon="linkedin" title="LinkedIn Icon"></o-icon
      ></a>
      <a class="navbar-item" href="https://www.instagram.com/kevinlogan7/"
        ><o-icon
          variant="white"
          icon="instagram"
          title="Instagram Icon"
        ></o-icon
      ></a>
      <a class="navbar-item" href="https://github.com/kevinlogan94"
        ><o-icon variant="white" icon="github" title="Github Icon"></o-icon
      ></a>
    </div>
    <div class="navbar-end">
      <a class="navbar-item has-text-white" @click="scrollIntoView('aboutMe')"
        >About Me</a
      >
      <a class="navbar-item has-text-white" @click="scrollIntoView('passions')"
        >Passions</a
      >
      <a class="navbar-item has-text-white" @click="scrollIntoView('software')"
        >Software</a
      >
      <a
        class="navbar-item has-text-white"
        @click="scrollIntoView('meditation')"
        >Meditation</a
      >
      <a class="navbar-item has-text-white" @click="scrollIntoView('games')"
        >Games</a
      >
      <a class="navbar-item has-text-white" @click="scrollIntoView('library')"
        >Library</a
      >
      <a class="navbar-item has-text-white" @click="scrollIntoView('connect')"
        >Connect</a
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class NavBar extends Vue {
  scrollIntoView(classNameOfSection: string) {
    const element = document.getElementsByClassName(classNameOfSection)[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>
