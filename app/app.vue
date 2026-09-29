<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} | Q5` : 'Q5 - Web Solutions'),
})
</script>
