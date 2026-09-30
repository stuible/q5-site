<template>
  <div>
    <Nav :type="homeNav ? '' : 'solid'" />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
// Set in app.vue, in step with the page transition
const homeNav = useState('home-nav')
</script>
