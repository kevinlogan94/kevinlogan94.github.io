<template>
  <section class="hero library">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">My Library</h1>
        <h2 class="subtitle has-text-centered">
          The Personal-Development books that have molded who I am today.
        </h2>
        <o-carousel
          :data="items"
          :items-to-show="3"
          :items-to-list="1"
          :arrow-hover="false"
          :repeat="true"
        >
          <o-carousel-item v-for="(item, i) in items" :key="i">
            <img :src="item.image" alt="t" />
          </o-carousel-item>
        </o-carousel>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
export default class Library extends Vue {
  items = [
    {
      title: "The Power of your Subconscious Mind",
      image: "https://m.media-amazon.com/images/I/51X3H9IMgmL.jpg",
    },
    {
      title: "Peak Performance",
      image: "https://m.media-amazon.com/images/I/41ssxrhLwCL.jpg",
    },
    {
      title: "How to Win Friends & Influence People",
      image: "https://m.media-amazon.com/images/I/51PWIy1rHUL.jpg",
    },
    {
      title: "Range",
      image: "https://m.media-amazon.com/images/I/41OjnXiiB1L.jpg",
    },
    {
      title: "Mastering Yourself",
      image: "https://m.media-amazon.com/images/I/51bjykpGDfL.jpg",
    },
    {
      title: "The Way of the Superior Man",
      image: "https://m.media-amazon.com/images/I/61pqlNBnmQL.jpg",
    },
    {
      title: "Man's Search for Meaning",
      image: "https://m.media-amazon.com/images/I/51L04pj+1JL.jpg",
    },
    {
      title: "The Art of Seduction",
      image: "https://m.media-amazon.com/images/I/41+FfYVLnEL.jpg",
    },
    {
      title: "Letting Go: The Pathway of Surrender",
      image: "https://m.media-amazon.com/images/I/41BoLINwhQL.jpg",
    },
    {
      title: "Start Where You Are",
      image: "https://m.media-amazon.com/images/I/51WVBVDl4cL.jpg",
    },
  ];

  mounted() {
    setInterval(this.triggerCarouselTransition, 7500);
  }

  triggerCarouselTransition() {
    const rightIcons = document.getElementsByClassName("has-icons-right");
    const chevron = rightIcons[rightIcons.length - 1];
    const clickEvent = new Event("click");
    chevron.dispatchEvent(clickEvent);
  }
}
</script>

<style scoped></style>
