<template>
  <section class="hero is-primary software">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Software Engineering</h1>
        <h2 class="subtitle has-text-centered">
          Enterprise and Start-Up Projects
        </h2>
        <section class="section">
          <div class="container">
            <div class="tile is-ancestor">
              <div class="tile is-vertical">
                <div class="tile">
                  <Project
                    title="Fifth Third Bank"
                    subtitle="Angular and UI Developer"
                    img="ROB.png"
                    imgAlt="test"
                    description="At Fifth Third Bank, I focused on the online banking application and building new features like Offers, Products, Lost & Stolen Card, and Check Order."
                  />
                  <Project
                    title="Hasbro"
                    subtitle="UI, PHP, and JQuery Developer"
                    img="Hasbro.png"
                    imgAlt="test"
                    description="At Hasbro, I got to build a creative and fun user experience by completing full site redesigns. My primary focus was on Transformers, My Little Pony, and Littlest Pet Shop."
                  />
                </div>
                <div class="tile">
                  <Project
                    title="TCS"
                    subtitle="UI and React Developer, UX Designer"
                    img="TCS.png"
                    imgAlt="test"
                    description="At TCS, I offered customers a smoother check-in process by designing and building their front desk application. Features included incorporating employee directory and badge sign-in."
                  />
                  <Project
                    title="NaviStone"
                    subtitle="Full Stack Engineer"
                    img="CFI.png"
                    imgAlt="test"
                    description="At NaviStone, as one of the four engineers of the company, I built several applications on the web and in the cloud. By far my biggest challenge yet."
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
