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
        @click="menuToggle"
        :class="{ 'is-active': menuActive }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': menuActive }">
      <div class="navbar-end">
        <a class="navbar-item has-text-white" @click="scrollIntoView('aboutMe')"
          >About Me</a
        >
        <a
          class="navbar-item has-text-white"
          @click="scrollIntoView('passions')"
          >Passions</a
        >
        <a
          class="navbar-item has-text-white"
          @click="scrollIntoView('software')"
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
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
export default class NavBar extends Vue {
  menuActive = false;

  scrollIntoView(classNameOfSection: string) {
    const element = document.getElementsByClassName(classNameOfSection)[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  menuToggle() {
    this.menuActive = !this.menuActive;
  }
}
</script>
