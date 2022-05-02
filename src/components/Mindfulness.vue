<template>
  <section class="hero meditation">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">Meditation</h1>
        <h2 class="subtitle has-text-centered">
          The best platforms that I use for calm and mental programming.
        </h2>
        <o-carousel
          :items-to-show="5"
          :items-to-list="1"
          :arrow-hover="false"
          :arrow="false"
          :repeat="true"
          :indicator="false"
        >
          <o-carousel-item v-for="(item, i) in items" :key="i">
            <figure
              class="image"
              @click="openMindfulnessPlatform(item.location)"
            >
              <img :src="item.image" :alt="item.title" :title="item.title" />
            </figure>
          </o-carousel-item>
        </o-carousel>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
export default class Mindfulness extends Vue {
  items = [
    {
      title: "Calm",
      location: "https://calm.com",
      image:
        "https://enrichmentcentre.ca/wp-content/uploads/2021/08/calm_logo.png",
    },
    {
      title: "Balance",
      location: "https://balanceapp.com",
      image:
        "https://mindoverlatte.com/wp-content/uploads/2020/05/A-Balance.png",
    },
    {
      title: "Live the Life You Love",
      location: "https://www.youtube.com/c/Ilivethelifeilove",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLRuB_u8abOk3l8x74BmJ6WQbha-c81_kiTxk_2XAw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Jason Stephenson",
      location: "https://www.youtube.com/c/JasonStephensonSleepMeditationMusic",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQDcNwpiqi0OEZb7ZZOw8jJLTUpPt1JaSoWHmLn9w=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Master Sri Akarshana",
      location: "https://www.youtube.com/c/MasterSriAkarshana",
      image: "https://angartwork.akamaized.net/?id=144848534&size=640",
    },
  ];

  openMindfulnessPlatform(location: string) {
    window.open(location, "_blank");
  }
}
</script>

<style lang="scss">
.meditation figure {
  cursor: pointer;
}
</style>
