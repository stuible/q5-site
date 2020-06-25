<template>
  <div class="logo-spacer-container">
    <div class="logo-spacer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo-spacer-container {
  padding-bottom: 224px / 620px * 100%;
  position: relative;
  overflow: hidden;
}

.logo-spacer {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>