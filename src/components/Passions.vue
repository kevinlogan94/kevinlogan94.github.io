<template>
  <section id="passions" class="hero passions">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Passions</h1>
        <h2 class="subtitle has-text-centered">What I do at a glance.</h2>
        <div class="columns">
          <b-carousel-list
            :data="passions"
            items-to-show="2"
            items-to-list="1"
            :repeat="true"
          >
            <template #item="passion">
              <div class="has-text-centered column">
                <div class="container content">
                  <b-icon
                    :icon="passion.icon"
                    size="is-large"
                    type="is-primary"
                  ></b-icon>
                  <p>{{ passion.title }}</p>
                </div>
                <p class="content">
                  {{ passion.description }}
                </p>
              </div>
            </template>
          </b-carousel-list>
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
      icon: "web",
      title: "Web Development",
      description:
        "My first love, I have a burning passion for web development. I have built several Web Applications used by millions of users across the country.",
    },
    {
      icon: "google-controller",
      title: "Video Game Design",
      description:
        "To fulfill a promise I made when I was five years old, You can find me building video games to offer a break from reality while also providing a story with lessons people can use to better their own lives.",
    },
    {
      icon: "flower",
      title: "Mindfulness",
      description:
        "After surviving a traumatic event in my early twenties, I use mindfulness every day to constantly be in a state of calm and control over the present moment.",
    },
    {
      icon: "wrench",
      title: "Api Engineering",
      description:
        "To bring my Web Applications to life, I design and build APIs to provide a constant connection to the data in the cloud.",
    },
    {
      icon: "book-open-variant",
      title: "Personal Development",
      description:
        "I genuinely love to learn. With this, I am constantly reading and studying from the greatest minds of our time in my relentless self-reliance pursuit.",
    },
    {
      icon: "currency-usd",
      title: "Finance",
      description:
        "After making it through the 2020 quarantine, I developed a passion for financial independence. To do this, you can find me constantly looking for new avenues for investing.",
    },
    {
      icon: "auto-fix",
      title: "Art",
      description:
        "I use pixel art to draw regions, creatures, and animations to bring video games to life and offer an immersive experience.",
    },
  ];

  triggerCarouselTransition() {

  }
}
</script>
