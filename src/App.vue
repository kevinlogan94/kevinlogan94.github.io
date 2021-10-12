<template>
  <div id="app">
    <Navbar />
    <main>
      <Banner />
      <AboutMe />
      <Passions />
<!--      <Projects />-->
      <IntrigueGames />
      <Library />
      <Connect />
    </main>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Connect from "./components/Connect";
import Passions from "./components/Passions";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Library from "@/components/Library";
import IntrigueGames from "@/components/IntrigueGames";

export default {
  name: "app",
  components: {
    IntrigueGames,
    Library,
    Banner,
    Connect,
    Passions,
    Navbar,
    AboutMe,
    Projects,
  }
};
</script>

<style lang="scss"></style>
