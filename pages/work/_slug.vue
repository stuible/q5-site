<template>
  <main class="container">
    <nuxt-picture :src="`/work/${work.slug}/${work.hero}`" class="hero" />
    <p class="when">{{ work.when }}</p>
    <h1>{{ work.title }}</h1>
    <p class="type">{{ work.type }}</p>
    <br />
    <nuxt-content :document="work" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    return {
      work: await $content("work", params.slug).fetch(),
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 2em;
  display: block;
}

h1 {
  font-size: 2.5em;
  margin: 0.25em 0;

  @include breakpoint(tablet) {
    font-size: 3em;
  }
}

.type {
  text-transform: uppercase;
}
</style>