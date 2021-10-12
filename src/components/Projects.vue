<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="heading has-text-centered">
          <h1 class="title">My Team Projects</h1>
        </div>
        <section class="section">
          <div class="container">
            <div class="tile is-ancestor">
              <div class="tile is-vertical">
                <div class="tile">
                  <Project
                    title="Fifth third Bank"
                    subtitle="testing"
                    img="ROB.png"
                    imgAlt="test"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                  <Project
                    title="Fifth third Bank"
                    subtitle="testing"
                    img="ROB.png"
                    imgAlt="test"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                </div>
                <div class="tile">
                  <Project
                    title="Fifth third Bank"
                    subtitle="testing"
                    img="ROB.png"
                    imgAlt="test"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                  <Project
                    title="Fifth third Bank"
                    subtitle="testing"
                    img="ROB.png"
                    imgAlt="test"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Project from "@/components/Project.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Project },
})
export default class Projects extends Vue {}
</script>

<!--<style lang="scss">-->
<!--.tile-->
<!--</style>-->
