<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ContactMe />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ContactMe from "./components/ContactMe";

export default {
  name: "app",
  components: {
    HelloWorld,
    ContactMe
  }
};
</script>
