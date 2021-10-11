<template>
  <div id="app">
    <Navbar />
    <main>
      <Banner />
      <Passions />
      <Projects />
      <TheNow />
      <Connect />
    </main>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Connect from "./components/Connect";
import Passions from "./components/Passions";
import Navbar from "./components/Navbar";
import TheNow from "./components/TheNow";
import Projects from "./components/Projects";

export default {
  name: "app",
  components: {
    Banner,
    Connect,
    Passions,
    Navbar,
    TheNow,
    Projects
  }
};
</script>

<style lang="scss"></style>
