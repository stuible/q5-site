<template>
  <main class="container">
    <h1>Blog</h1>
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <nuxt-link :to="`/blog/${entry.slug}`">{{ entry.title }}</nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      entries: await $content("blog").without(['body']).fetch(),
    };
  },
};
</script>

<style>
</style>