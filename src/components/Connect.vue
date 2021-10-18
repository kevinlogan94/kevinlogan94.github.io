<template>
  <section class="hero is-primary connect">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-mobile">
          <div class="column is-half has-text-centered">
            <h1 class="title">Want to Connect?</h1>

            <div class="block">
              <a href="https://twitter.com/KevinLogan12">
                <b-icon
                  type="is-white"
                  icon="twitter"
                  size="is-medium"
                  title="Twitter Icon"
                ></b-icon>
              </a>
              <a href="https://www.facebook.com/kevin.logan1">
                <b-icon
                  type="is-white"
                  icon="facebook"
                  size="is-medium"
                  title="Facebook Icon"
                ></b-icon>
              </a>
              <a href="https://www.linkedin.com/in/kevin-logan-73277594/">
                <b-icon
                  type="is-white"
                  icon="linkedin"
                  size="is-medium"
                  title="LinkedIn Icon"
                ></b-icon>
              </a>
              <a href="https://www.instagram.com/kevinlogan7/">
                <b-icon
                  type="is-white"
                  icon="instagram"
                  size="is-medium"
                  title="Instagram Icon"
                ></b-icon>
              </a>
              <a href="https://github.com/kevinlogan94">
                <b-icon
                  type="is-white"
                  icon="github"
                  size="is-medium"
                  title="Github Icon"
                ></b-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Connect extends Vue {}
</script>

<style lang="scss" scoped>
.icon {
  margin: 10px;
}
</style>
