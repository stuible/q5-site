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

  @include breakpoint(thone) {
    position: initial;
    overflow: hidden;
    padding-bottom: 0;
    padding: 100px 0;
  }
}

.logo-spacer {
  position: absolute;
  width: 100%;
  height: 100%;

  // >div {
  //   height: 100%;
  // }
//   display: inline-flex;
//   justify-content: center;
//   align-items: flex-start;

//   > * {
//       flex-basis: content;
//   }

  @include breakpoint(thone) {
    position: initial;
  }
}
</style>