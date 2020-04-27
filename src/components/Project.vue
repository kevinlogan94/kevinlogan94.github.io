<template>
  <div class="container">
    <div class="columns">
      <div class="column has-text-centered">
        <h5 class="title is-5">{{ title }}</h5>
        <p class="content">{{ description }}</p>
      </div>
      <div class="column">
        <figure class="image is-3by2">
          <img :src="getImgUrl(img)" :alt="imgAlt" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    img: String,
    imgAlt: String,
    title: String,
    description: String
  },
  methods: {
    getImgUrl(img) {
      const images = require.context("../assets/img", false, /\.png$/);
      return images("./" + img);
    }
  }
};
</script>
