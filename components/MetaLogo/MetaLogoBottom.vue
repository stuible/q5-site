<template>
  <div>
    <BottomLogo />
  </div>
</template>

<script>
import BottomLogo from "~/assets/logo/metaBottom.svg?inline";
export default {
  components: {
      BottomLogo
  }
};
</script>

<style scoped>
svg {
    display: block;
    width:100%;
    height: auto;
}
</style>