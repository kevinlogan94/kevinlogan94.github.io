<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Banner />
    <MyWork />
    <ContactMe />
  </div>
</template>

<script>
import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import MyWork from "./components/MyWork";

export default {
  name: "app",
  components: {
    Banner,
    ContactMe,
    MyWork
  }
};
</script>
