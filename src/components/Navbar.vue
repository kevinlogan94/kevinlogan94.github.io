<template>
  <nav
      class="navbar is-primary is-spaced"
      aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://twitter.com/codingkevin_">
        <o-icon variant="white" icon="twitter" title="Twitter Icon"></o-icon
        ></a>
      <a
          class="navbar-item"
          href="https://www.linkedin.com/in/kevin-logan-73277594/"
      >
        <o-icon variant="white" icon="linkedin" title="LinkedIn Icon"></o-icon
        ></a>
      <a class="navbar-item" href="https://www.instagram.com/coding.kevin_/"
      ><o-icon
          variant="white"
          icon="instagram"
          title="Instagram Icon"
      ></o-icon
      ></a>
      <a class="navbar-item" href="https://github.com/kevinlogan94"
      ><o-icon variant="white" icon="github" title="Github Icon"></o-icon
      ></a>
      <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': menuActive }">
      <div class="navbar-end">
        <a
            class="navbar-item has-text-white"
            @click="scrollToSection('passions')"
        >Passions</a
        >
        <a
            class="navbar-item has-text-white"
            @click="scrollToSection('software')"
        >Software</a
        >
        <a
            class="navbar-item has-text-white"
            @click="scrollToSection('real-estate')"
        >Real Estate</a
        >
        <a class="navbar-item has-text-white" @click="scrollToSection('games')"
        >Games</a
        >
        <a class="navbar-item has-text-white" @click="scrollToSection('library')"
        >Library</a
        >
        <a class="navbar-item has-text-white" @click="scrollToSection('connect')"
        >Connect</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuActive = ref(false);

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

const scrollToSection = (className: string) => {
  const element = document.getElementsByClassName(className)[0];
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
