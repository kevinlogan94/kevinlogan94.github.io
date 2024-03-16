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
              I'm a type 3 on the enneagram, best known for my work building software for
              Transformers, Littlest Pet Shop, My Little Pony, Fifth Third Bank,
              and NaviStone.
            </p>
            <p class="content" v-scroll-animation>
              I'm a guy constantly working to become 1% better every day. Ever
              since I was very young, I have always had a burning passion for
              everything that I do. I am truly obsessed with progress and slowly
              becoming the best version of myself.
            </p>
            <p class="content" v-scroll-animation>
              Thanks for visiting me on my corner of the internet. This site is
              where you can find some the things that have guided me to where I
              am now and what I'm currently up to. I hope that they can help you
              on your journey as well.
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
