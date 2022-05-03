<template>
  <section class="hero banner is-fullheight bg-image">
    <div class="hero-body">
      <div class="columns banner-content mt-6">
        <div class="column is-one-fifth"></div>
        <div class="column mt-6">
          <h1 class="title">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/signature.png?alt=media&token=782f3594-27e3-4493-9a6f-2eed114dad0e"
              alt="Signature"
              class="image"
            />
          </h1>
          <h2 class="subtitle has-text-weight-bold">
            Software Engineer, Meditator, Landlord, Video Game Designer
          </h2>
        </div>
        <div class="column is-one-quarter"></div>
        <div class="column is-one-quarter"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
export default class Banner extends Vue {}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px), print {
  .bg-image {
    background-image: url("https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/BackCover.jpeg?alt=media&token=f32f7a31-740b-44a7-aa07-fb03b62c2cda");
    background-size: 100% 100%;
  }
  .banner-content {
    width: 100%;
  }
}

//@media only screen and (max-width: 600px) {
//  .bg-image {
//    background-image: url("../assets/img/BackCover.jpeg");
//    background-size: cover;
//  }
//}
</style>
