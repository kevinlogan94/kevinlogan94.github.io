<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Navbar />
    <main>
      <Banner />
      <MyWork />
      <ContactMe />
    </main>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Banner,
    ContactMe,
    MyWork,
    Navbar
  }
};
</script>
