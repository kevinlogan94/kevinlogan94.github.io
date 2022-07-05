<template>
  <section class="hero is-success">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>Real Estate</h1>
        <h2 class="subtitle has-text-centered" v-scroll-animation>
          Coming soon!
        </h2>
        <!--        <h2 class="subtitle has-text-centered" v-scroll-animation>-->
        <!--          Want me as your landlord? Make sure you apply when the next spot-->
        <!--          opens!-->
        <!--        </h2>-->
        <!--        <o-carousel-->
        <!--          :data="items"-->
        <!--          :items-to-show="3"-->
        <!--          :items-to-list="1"-->
        <!--          :arrow-hover="false"-->
        <!--          :repeat="true"-->
        <!--        >-->
        <!--          <o-carousel-item-->
        <!--            v-for="(item, i) in items"-->
        <!--            :key="i"-->
        <!--            v-scroll-animation-->
        <!--          >-->
        <!--            <img :src="item.image" alt="t" />-->
        <!--          </o-carousel-item>-->
        <!--        </o-carousel>-->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
export default class RealEstate extends Vue {
  items = [
    {
      title: "Duplex",
      image:
        "https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2FfrontYard.jpg?alt=media&token=d59c64c8-e333-435b-a312-7412ed45c453",
    },
    {
      title: "Appliances",
      image:
        "https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2Fappliances.jpg?alt=media&token=adb71726-d619-4c77-9c48-4aebeddead25",
    },
    {
      title: "Master Bedroom",
      image:
        "https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2FmasterBedroom.jpg?alt=media&token=3e8228b2-d42f-4f7d-8273-c9a4bc4eca52",
    },
    {
      title: "Backyard",
      image:
        "https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2FbackYard.jpg?alt=media&token=62efd82b-28d2-4375-9df5-a382c7232785",
    },
    {
      title: "Living Room",
      image:
        "https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2FlivingRoom.jpg?alt=media&token=f8e75ef8-15f0-4c20-b9ba-c9c3628e4af6",
    },
    {
      title: "Shower",
      image:
        "https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2Fshower.jpg?alt=media&token=051ecd67-3e55-40ed-8987-c948712b1ed4",
    },
    {
      title: "Bedroom Closet 3",
      image:
        "https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2Fbedroom3Closet.jpg?alt=media&token=24a0b8d6-3f28-441e-8a5a-0c152050dc2d",
    },
    {
      title: "View",
      image:
        "https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/duplex%2Fview.jpg?alt=media&token=dffe3c3f-652e-4461-a859-158c63aa8dff",
    },
  ];
}
</script>

<style scoped></style>
