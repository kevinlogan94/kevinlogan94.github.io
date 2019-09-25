<template>
  <nav class="navbar has-shadow is-spaced ">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://github.com/kevinlogan94">
          <img src="../assets/img/logo.png" alt="vue-a11y repository" />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          v-on:click="isHamburgerMenuActive = !isHamburgerMenuActive"
          v-bind:class="{ 'is-active': isHamburgerMenuActive }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbar"
        class="navbar-menu"
        v-bind:class="{ 'is-active': isHamburgerMenuActive }"
      >
        <div
          class="navbar-start"
          v-on:click="isHamburgerMenuActive = !isHamburgerMenuActive"
        >
          <a role="button" class="navbar-item">Kevin</a>
          <a role="button" class="navbar-item">What I do</a>
          <a role="button" class="navbar-item">My Work</a>
          <a role="button" class="navbar-item">Contact Me</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
