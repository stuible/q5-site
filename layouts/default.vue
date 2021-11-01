<template>
  <div>
    <Nav :type="path === '/' ? '' : 'solid'" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data: ({ $router }) => ({
    path: $router.currentRoute.path,
  }),
  mounted() {
    this.$router.afterEach((to, from) => {
      this.path = this.$router.currentRoute.path;
    });
  },
};
</script>

<style>
</style>


