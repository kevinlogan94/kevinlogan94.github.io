<template>
  <b-navbar type="is-primary" :spaced="true" :fixed-top="true">
    <template #brand>
      <b-navbar-item href="https://twitter.com/KevinLogan12">
        <b-icon type="is-white" icon="twitter" title="Twitter Icon"></b-icon
      ></b-navbar-item>
      <b-navbar-item href="https://www.facebook.com/kevin.logan1">
        <b-icon type="is-white" icon="facebook" title="Facebook Icon"></b-icon
      ></b-navbar-item>
      <b-navbar-item href="https://www.linkedin.com/in/kevin-logan-73277594/">
        <b-icon type="is-white" icon="linkedin" title="LinkedIn Icon"></b-icon
      ></b-navbar-item>
      <b-navbar-item href="https://www.instagram.com/kevinlogan7/"
        ><b-icon
          type="is-white"
          icon="instagram"
          title="Instagram Icon"
        ></b-icon
      ></b-navbar-item>
      <b-navbar-item href="https://github.com/kevinlogan94"
        ><b-icon type="is-white" icon="github" title="Github Icon"></b-icon
      ></b-navbar-item>
    </template>
    <template #start> </template>
    <template #end>
      <b-navbar-item class="has-text-white" @click="scrollIntoView('aboutMe')"
        >About Me</b-navbar-item
      >
      <b-navbar-item class="has-text-white" @click="scrollIntoView('passions')"
        >Passions</b-navbar-item
      >
      <b-navbar-item class="has-text-white" @click="scrollIntoView('software')"
        >Software</b-navbar-item
      >
      <b-navbar-item
        class="has-text-white"
        @click="scrollIntoView('meditation')"
        >Meditation</b-navbar-item
      >
      <b-navbar-item class="has-text-white" @click="scrollIntoView('games')"
        >Games</b-navbar-item
      >
      <b-navbar-item class="has-text-white" @click="scrollIntoView('library')"
        >Library</b-navbar-item
      >
      <b-navbar-item class="has-text-white" @click="scrollIntoView('connect')"
        >Connect</b-navbar-item
      >
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class NavBar extends Vue {
  scrollIntoView(classNameOfSection: string) {
    const element = document.getElementsByClassName(classNameOfSection)[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}
</script>
