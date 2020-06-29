<template>
  <div  class="meta-logo-section">
    <div class="slot-container">
      <slot></slot>
    </div>
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

<style scoped lang="scss">
.slot-container {
  position: relative;
  > * {
    width: 70%;
    position: absolute;
    margin-top: 45%;
    top: 0;
  }
}
</style>