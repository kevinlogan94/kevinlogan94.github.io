<template>
  <section class="hero meditation">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Meditation</h1>
        <h2 class="subtitle has-text-centered">
          These are the meditation platforms I use.
        </h2>
        <b-carousel-list
          :data="items"
          items-to-show="5"
          items-to-list="1"
          :arrow-hover="false"
          :arrow="false"
          :repeat="true"
        ></b-carousel-list>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Mindfulness extends Vue {
  items = [
    {
      title: "Calm",
      image:
        "https://cdn.freelogovectors.net/wp-content/uploads/2020/11/calm_logo.png",
    },
    {
      title: "Balance",
      image:
        "https://mindoverlatte.com/wp-content/uploads/2020/05/A-Balance.png",
    },
    {
      title: "Live the Life You Love",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLRuB_u8abOk3l8x74BmJ6WQbha-c81_kiTxk_2XAw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Jason Stephenson",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQDcNwpiqi0OEZb7ZZOw8jJLTUpPt1JaSoWHmLn9w=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Master Sri Akarshana",
      image: "https://angartwork.akamaized.net/?id=144848534&size=640",
    },
  ];
}
</script>

<style lang="scss">
</style>
