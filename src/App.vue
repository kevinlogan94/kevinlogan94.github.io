<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Navbar />
    <main>
      <Banner />
      <MyWork />
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

export default {
  name: "app",
  components: {
    Banner,
    ContactMe,
    MyWork,
    Navbar,
    TheNow
  }
};
</script>
