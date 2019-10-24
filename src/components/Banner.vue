<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-mobile">
          <div class="column is-half has-text-centered">
            <figure class="image is-128x128 has-image-centered">
              <img src="../assets/profile.jpg" alt="Profile Picture" />
            </figure>
            <h1 class="title">
              Hey, I'm Kevin!
            </h1>
            <div class="section">
              <span class="icon is-large has-text-white">
                <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
              </span>
              <span class="icon is-large has-text-white">
                <font-awesome-icon :icon="['fab', 'github']" size="3x" />
              </span>
              <span class="icon is-large has-text-white">
                <font-awesome-icon icon="envelope" size="3x" />
              </span>
              <span class="icon is-large has-text-white">
                <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
