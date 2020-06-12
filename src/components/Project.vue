<template>
  <div class="tile is-parent">
    <article class="tile is-child box has-text-centered">
      <div class="columns">
        <div class="column has-text-centered">
          <h4 class="title is-4 has-text-black">{{ title }}</h4>
          <h5 class="subtitle has-text-black">{{ subtitle }}</h5>
          <p class="content">{{ description }}</p>
        </div>
        <div class="column">
          <figure class="image is-3by2">
            <img :src="getImgUrl(img)" :alt="imgAlt" />
          </figure>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    img: String,
    imgAlt: String,
    title: String,
    subtitle: String,
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
