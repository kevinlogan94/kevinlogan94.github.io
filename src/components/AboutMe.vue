<template>
  <section class="hero is-primary aboutMe">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>
          Hey, I'm Kevin
        </h1>
        <div class="columns is-vcentered">
          <div class="column">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/stud.jpeg?alt=media&token=049bec4e-70f1-4479-871b-cb29fddb96fd"
              alt="Profile Picture"
              class="image"
              v-scroll-animation
            />
          </div>
          <div class="column">
            <p class="content" v-scroll-animation>
              Hi, I'm Kevin Logan! I'm a passionate software engineer with a
              knack for building creative and engaging products. My journey
              began in 2016 with a focus on front-end development, crafting user
              interfaces for some well-known companies like Hasbro and Fifth
              Third Bank.
            </p>
            <p class="content" v-scroll-animation>
              Always up for a challenge, I jumped into the startup world in
              2020. This experience propelled my growth as I transitioned from
              full-stack developer to leading a team of 4 as a software
              engineering manager.
            </p>
            <p class="content" v-scroll-animation>
              Looking to broaden my horizons, I embarked on entrepreneurial
              adventures as well. In 2021, I founded Intrigue Games, where I
              developed my very first mobile game - a true passion project
              brought to life on the app store!
            </p>
            <p class="content" v-scroll-animation>
              Beyond the world of code, I'm an active learner constantly
              exploring the ever-evolving landscape of social media content
              creation. I believe diverse experience fosters creativity and
              problem-solving, which are key ingredients in building innovative
              software solutions. This mindset also extends to my personal
              endeavors.
            </p>
            <p class="content" v-scroll-animation>
              In 2022, I took the leap into real estate ownership, successfully
              acquiring my first property and stepping into the role of being a
              landlord. Managing this investment has provided me with valuable
              skills in project management and financial planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style lang="scss">
.image {
  margin: auto;
  max-height: 500px;
}
</style>
