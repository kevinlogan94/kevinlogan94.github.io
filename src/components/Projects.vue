<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="heading has-text-centered">
          <h1 class="title">My Team Projects</h1>
        </div>
        <section class="section">
          <div class="container">
            <Project
              title="Fifth third Bank"
              img="ROB.png"
              imgAlt="test"
              description="testing"
            />
            <div class="is-divider" data-content="or"></div>
            <Project
              title="Fifth third Bank"
              img="ROB.png"
              imgAlt="test"
              description="testing"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import Project from "@/components/Project.vue";

export default {
  name: "Projects",
  components: {
    Project
  }
};
</script>
