<template>
  <div  class="meta-logo-section">
    <div class="slot-container">
      <slot/>
    </div>
    <BottomLogo class="meta-logo-svg"/>
  </div>
</template>

<script setup>
import BottomLogo from "~/assets/logo/metaBottom.svg";
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