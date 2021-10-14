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
import Banner from "@/components/Banner";
import Connect from "@/components/Connect";
import Passions from "@/components/Passions";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Library from "@/components/Library";
import IntrigueGames from "@/components/IntrigueGames";
import Mindfulness from "@/components/Mindfulness";
import Projects from "@/components/Projects";

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
