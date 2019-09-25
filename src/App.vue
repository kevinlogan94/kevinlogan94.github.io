<template>
  <div id="app">
    <Navbar />
    <main>
      <Banner />
      <MyWork />
      <Projects />
      <ContactMe />
    </main>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default {
  name: "app",
  components: {
    Banner,
    ContactMe,
    MyWork,
    Navbar,
    Projects
  }
};
</script>
