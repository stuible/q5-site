<template>
  <header id="top-nav">
    <nav class="container">
      <nuxt-link to="/"><logo id="nav-logo" /></nuxt-link>
      <a id="cta" :href="email">Let's Make Something</a>
    </nav>
  </header>
</template>

<script>
import Logo from "~/assets/logo/logo.svg?inline";
export default {
  components: {
    Logo
  },
  data() {
    return {
      email: ''
    };
  },
  mounted(){
    // Add email link with JS after component mounts to avoid people scraping the site
    this.email = 'mailto:contact' + '@q-5.ca'
  }
};
</script>

<style lang="scss">
header {
  padding: 50px 0 50px 0;

  @include breakpoint(thone) {
    padding: 50px 0 200px 0;
    // background: linear-gradient(
    //   0deg,
    //   rgba(255, 255, 255, 0) 0%,
    //   rgba(255, 255, 255, 0.80) 70%,
    //   rgba(255, 255, 255, 0.95) 100%
    // );
    position: sticky;
    top: 0;
  }
}
nav {
  display: flex;
  justify-content: space-between;
  /* flex-direction: row; */
}
#cta {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0em 0.85em;
  padding-top: 0.1em;
  border: black 2px solid;

  &:hover {
    background-color: black;
    color: white;
  }
  /* color: white; */
}
#nav-logo {
  width: 25px;
}
</style>
