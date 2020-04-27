<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-mobile">
          <div class="column is-half has-text-centered">
            <h1 class="title">
              Hey, I'm Kevin!
            </h1>
            <p class="content">hello</p>
            <div class="section">
              <div class="columns is-centered is-gapless">
                <span class="column icon is-large has-text-white">
                  <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
                </span>
                <span class="column icon is-large has-text-white">
                  <font-awesome-icon :icon="['fab', 'github']" size="3x" />
                </span>
                <span class="column icon is-large has-text-white">
                  <font-awesome-icon icon="envelope" size="3x" />
                </span>
                <span class="column icon is-large has-text-white">
                  <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
                </span>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <figure class="image is-360x360 has-image-centered">
              <img
                class="is-rounded"
                src="../assets/profile.jpg"
                alt="Profile Picture"
              />
            </figure>
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
.image.is-360x360 {
  height: 360px;
  width: 360px;
}
</style>
