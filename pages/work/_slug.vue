<template>
  <main class="container">
    <h1>{{ work.title }}</h1>
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
h1 {
  font-size: 2.5em;

  @include breakpoint(tablet) {
    font-size: 3em;
  }
}
</style>