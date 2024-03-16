<template>
  <div id="app">
    <Navbar />
    <main>
      <Banner />
      <AboutMe />
      <Passions />
      <Projects />
      <RealEstate />
      <IntrigueGames />
      <Library />
      <Connect />
    </main>
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Connect from "@/components/Connect.vue";
import Passions from "@/components/Passions.vue";
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Library from "@/components/Library.vue";
import IntrigueGames from "@/components/IntrigueGames.vue";
import Projects from "@/components/Projects.vue";
import RealEstate from "@/components/RealEstate.vue";

import { logEvent } from "firebase/analytics";
import { onMounted } from "vue";
import analytics from "@/firebase";


onMounted(() => {
  logEvent(analytics, "page_view");
});
</script>

<style lang="scss"></style>
