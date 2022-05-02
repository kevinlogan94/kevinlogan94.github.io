<template>
  <section class="hero is-primary connect">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-mobile">
          <div class="column is-half has-text-centered">
            <h1 class="title">Want to Connect?</h1>

            <div class="block">
              <a href="https://twitter.com/KevinLogan12">
                <o-icon
                  variant="white"
                  icon="twitter"
                  size="medium"
                  title="Twitter Icon"
                ></o-icon>
              </a>
              <a href="https://www.linkedin.com/in/kevin-logan-73277594/">
                <o-icon
                  variant="white"
                  icon="linkedin"
                  size="medium"
                  title="LinkedIn Icon"
                ></o-icon>
              </a>
              <a href="https://www.instagram.com/kevinlogan7/">
                <o-icon
                  variant="white"
                  icon="instagram"
                  size="medium"
                  title="Instagram Icon"
                ></o-icon>
              </a>
              <a href="https://github.com/kevinlogan94">
                <o-icon
                  variant="white"
                  icon="github"
                  size="medium"
                  title="Github Icon"
                ></o-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
export default class Connect extends Vue {}
</script>

<style lang="scss" scoped>
.icon {
  margin: 10px;
}
</style>
