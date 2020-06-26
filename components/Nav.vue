<template>
  <header id="top-nav">
    <div class="container nav">
      <logo id="nav-logo"/>
      <a id="cta" href="">Let's Make Something</a>
    </div>
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
    padding: 50px 0;
}
.nav {
    display: flex;
    justify-content: space-between;
    /* flex-direction: row; */
    
}
#cta {
    /* justify-self: flex-end; */
    padding: 0.85em;
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
