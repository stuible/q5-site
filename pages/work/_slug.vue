<template>
  <main class="container">
      <h1>{{work.title}}</h1>
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

<style>
</style>