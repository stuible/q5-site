<template>
  <header>
    <div class="container">
      <logo id="nav-logo"/>
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

<style>
header {
    padding: 50px 0;
}
#nav-logo {
    width: 25px;
}
</style>
