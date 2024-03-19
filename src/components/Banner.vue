<template>
  <section class="hero banner is-fullheight bg-image">
    <div class="hero-body">
      <div class="columns banner-content mt-6">
        <div class="column mt-6 has-background-primary has-text-white padding-3 opacity-background" v-scroll-animation>
          <h1 class="title">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/signature-white.png?alt=media&token=3658d071-d3af-4e2c-b74e-6b0a252810c1"
                alt="Signature"
                class="image"
            />
          </h1>
          <h2
              class="subtitle has-text-weight-bold has-text-centered has-text-white"
          >
            Solving problems from Code to Real Estate
          </h2>
          <p class="content" v-scroll-animation>
            Software Engineer by trade, entrepreneur at heart - I'm Kevin Logan!
            My journey started in 2016 building user interfaces for big brands like
            Hasbro.  Always up for a challenge, I transitioned to full-stack development
            and even led a team of 4 in the startup world. In 2021, I founded Intrigue Games,
            bringing my first mobile game to life!  Beyond code, I'm passionate about social
            media and believe diverse experiences like real estate ownership (acquired my first
            property in 2022!) fuel creativity and problem-solving - essential skills for
            building innovative solutions.
          </p>
            <o-button
                type=""
                @click="scrollToSection('passions')"
                size="is-medium"
                v-scroll-animation
            >Learn More</o-button>
        </div>
        <div class="column is-one-quarter"></div>
        <div class="column is-one-quarter"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToSection = (className: string) => {
  const element = document.getElementsByClassName(className)[0];
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
.banner-content {
  width: 100%;
}

@media screen and (min-width: 769px), print {
  .bg-image {
    background-image: url("https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/BackCover.jpeg?alt=media&token=f32f7a31-740b-44a7-aa07-fb03b62c2cda");
    background-size: 100% 100%;
  }
}

@media screen and (max-width: 769px), print {
  .bg-image {
    background-image: url("https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/colorado.png?alt=media&token=6acd0f9d-f2d1-4504-9dac-e16dc97b618d");
    background-size: auto 100%;
  }
  .column.is-one-quarter .column.is-one-fifth {
    display: none;
  }
  .hero-body {
    display: flex;
    align-items: end;
    justify-content: end;
    flex-direction: column;
  }
}
.padding-3 {
  padding: 3%;
}
.opacity-background {
  opacity: .8;
}
</style>
