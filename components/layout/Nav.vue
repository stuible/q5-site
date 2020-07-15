<template>
  <header id="top-nav">
    <nav class="container">
      <logo id="nav-logo" />
      <a id="cta" href>Let's Make Something</a>
    </nav>
  </header>
</template>

<script>
import Logo from "~/assets/logo/logo.svg?inline";
export default {
  components: {
    Logo
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
  /* justify-self: flex-end; */
  padding: 0.85em;
  border: black 2px solid;
  // background-color: white;

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
