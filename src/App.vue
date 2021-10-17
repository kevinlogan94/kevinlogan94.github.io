<template>
  <div id="app">
    <Navbar />
    <main>
      <Banner />
      <AboutMe />
      <Passions />
      <Projects />
      <Mindfulness />
      <IntrigueGames />
      <Library />
      <Connect />
    </main>
  </div>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import Connect from "@/components/Connect.vue";
import Passions from "@/components/Passions.vue";
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Library from "@/components/Library.vue";
import IntrigueGames from "@/components/IntrigueGames.vue";
import Mindfulness from "@/components/Mindfulness.vue";
import Projects from "@/components/Projects.vue";

import Vue from "vue";
import { Component } from "vue-property-decorator";

import {logEvent} from "firebase/analytics";

@Component({
  components: {
    Projects,
    Mindfulness,
    IntrigueGames,
    Library,
    Banner,
    Connect,
    Passions,
    Navbar,
    AboutMe,
  },
})
export default class App extends Vue {
  mounted() {
    logEvent(this.$analytics, "page_view");
  }
}
</script>

<style lang="scss"></style>
