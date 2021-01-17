<template>
  <main class="container">
    <h1>{{ entry.title }}</h1>
    <nuxt-content :document="entry.body" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    return {
      entry: await $content("blog", params.slug).fetch()
    };
  },
};
</script>

<style>
</style>