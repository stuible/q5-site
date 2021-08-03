<template>
  <header id="top-nav" :class="{ solid: type === 'solid' }">
    <nav class="container">
      <nuxt-link to="/" id="nav-logo-link"><logo id="nav-logo" /></nuxt-link>
      <button-link id="cta">Let's Make Something</button-link>
    </nav>
  </header>
</template>

<script>
import Logo from "~/assets/logo/logo.svg?inline";
export default {
  components: {
    Logo,
  },
  props: ["type"],
  data() {
    return {
      email: "",
    };
  },
  mounted() {
    // Add email link with JS after component mounts to avoid people scraping the site
    this.email = "mailto:contact" + "@q-5.ca";
  },
};
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
