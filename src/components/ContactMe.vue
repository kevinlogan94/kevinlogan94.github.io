<template>
  <section class="hero is-primary ">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-mobile">
          <div class="column is-half has-text-centered">
            <h1 class="title">Want to Connect?</h1>
            <p class="content">
              I'm always interested in making new connections. Take a few
              moments and send me a message.
            </p>
            <button
              class="button is-success"
              v-bind:href="'mailto:kevinmlogan7@gmail.com'"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactMe"
};
</script>
