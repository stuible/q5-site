<template>
  <header id="top-nav" :class="{ solid: type === 'solid' }">
    <nav class="container">
      <NuxtLink id="nav-logo-link" to="/" aria-label="Q5 home"><Logo id="nav-logo" /></NuxtLink>
      <button-link id="cta" :href="`${email}`">Let's Make Something</button-link>
    </nav>
  </header>
</template>

<script setup>
import Logo from "~/assets/logo/logo.svg";

defineProps({ type: { type: String, default: "" } });

// Add email link with JS after component mounts to avoid people scraping the site
const email = ref("");
onMounted(() => {
  email.value = "mailto:contact" + "@q-5.ca";
});
</script>

<style lang="scss" scoped>
#top-nav {
  display: none;

  &.solid {
    display: block;

    #cta {
      display: none;

      @include breakpoint(phone) {
        display: flex;
      }
    }
  }

  @include breakpoint(phone) {
    display: block;
  }

  padding: 50px 0 50px 0;
  position: relative;
  z-index: 2;

  &.solid {
    background-color: white;
  }

  @include breakpoint(thone) {
    position: sticky;
    top: 0;
  }
}

nav {
  display: flex;
  justify-content: space-between;
  /* flex-direction: row; */
}
#nav-logo {
  width: 25px;
}
</style>
