<template>
  <section class="hero real-estate">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>Real Estate</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <p class="content" v-scroll-animation>
              Looking beyond code, I ventured into real estate ownership to expand my skillset and build multiple income streams. This is my first property!
            </p>
            <o-button
                type=""
                @click="openProperty"
                size="is-medium"
                variant="info"
                v-scroll-animation
            >View Property
            </o-button>
          </div>
          <div class="column">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/propertyModelBorder.png?alt=media&token=c2189ab2-ef2d-4395-ba53-8f374cd4643a"
                alt="Property Model"
                class="image"
                v-scroll-animation
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const propertyLink = "https://www.zillow.com/homedetails/1930-Independence-Rd-B-Independence-KY-41051/2062678239_zpid/";

const openProperty = () => {
  window.open(propertyLink, "_blank");
};

</script>

<style scoped></style>
