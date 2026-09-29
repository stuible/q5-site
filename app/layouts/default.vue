<template>
  <div>
    <Nav :type="route.path === '/' ? '' : 'solid'" />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute()
</script>
