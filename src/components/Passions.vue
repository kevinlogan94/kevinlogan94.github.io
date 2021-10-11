<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Passions</h1>
        <div class="columns">
          <div v-for="(passion, index) in passions" :key="index" class="column has-text-centered">
            <div class="container content">
              <b-icon
                :icon="passion.icon"
                size="is-large"
                type="is-success"
              ></b-icon>
              <p>{{ passion.title }}</p>
            </div>
            <p class="content">
              {{ passion.description }}
            </p>
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
export default class Passions extends Vue {
  passions: Array<any> = [
    {
      icon: "account",
      title: "Applications",
      description:
        "I build fast and efficient applications using complex JavaScript frameworks with NodeJS.",
    },
    {
      icon: "account",
      title: "Automation",
      description:
        "I bring sites to life with a simple and lush user experience using css frameworks.",
    },
    {
      icon: "account",
      title: "UX",
      description:
        "I strive everyday to be a 'lazy' developer and have the menial day to day tasks performed for you.",
    },
  ];
}
</script>
