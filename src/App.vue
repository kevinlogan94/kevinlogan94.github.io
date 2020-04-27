<template>
  <div id="app">
    <Navbar />
    <main>
      <Banner />
      <MyWork />
      <Projects />
      <TheNow />
      <ContactMe />
    </main>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import TheNow from "./components/TheNow";
import Projects from "./components/Projects";

export default {
  name: "app",
  components: {
    Banner,
    ContactMe,
    MyWork,
    Navbar,
    TheNow,
    Projects
  }
};
</script>

<style lang="scss"></style>
