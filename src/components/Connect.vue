<template>
  <section class="hero is-primary connect">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-mobile">
          <div class="column is-half has-text-centered">
            <h1 class="title" v-scroll-animation>Want to Connect?</h1>
            <a v-for="link in socialLinks" :key="link.href" :href=link.href>
              <o-icon
                  variant="white"
                  :icon="link.icon"
                  size="medium"
                  :title="`Link to ${link.href}`"
              ></o-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const socialLinks = [
  { href: 'https://twitter.com/KevinLogan12', icon: 'twitter' },
  { href: 'https://www.linkedin.com/in/kevin-logan-73277594/', icon: 'linkedin' },
  { href: 'https://www.instagram.com/coding.kevin_/', icon: 'instagram' },
  { href: 'https://github.com/kevinlogan94', icon: 'github' },
]
</script>

<style lang="scss" scoped>
.icon {
  margin: 10px;
}
</style>