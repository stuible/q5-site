<template>
  <main class="container">
    <h1>Work</h1>
    <Work :items="work" />
  </main>
</template>

<script setup>
const { data: work } = await useFeaturedWork();

useSeoMeta({
  title: "Our Work",
  description:
    "Case studies of branding, web design, and web development projects by Q5, a Vancouver web consultancy.",
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5em;
  margin: 0 0 0.75em;

  @include breakpoint(tablet) {
    font-size: 3em;
  }
}
</style>
