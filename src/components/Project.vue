<template>
  <div class="tile is-parent">
    <article class="tile is-child box has-text-centered" v-scroll-animation>
      <div class="columns">
        <div class="column has-text-centered">
          <h4 class="title is-4 has-text-black">{{ title }}</h4>
          <h5 class="subtitle has-text-black">{{ subtitle }}</h5>
          <p class="content">{{ description }}</p>
        </div>
        <div class="column">
          <figure class="image is-3by2">
            <img :src="img" :alt="imgAlt" />
          </figure>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from "vue-property-decorator";

@Options({})
export default class Project extends Vue {
  @Prop() img!: string;
  @Prop() imgAlt!: string;
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() description!: string;
}
</script>

<style lang="scss" scoped>
.software .before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}
.software .enter {
  opacity: 1;
  transform: scale(1) rotateZ(0);
}
</style>