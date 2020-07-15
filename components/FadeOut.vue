<template>
  <div :style="{opacity: opacity}">
    <slot></slot>
  </div>
</template>

<script>
// UNUSED PROOF OF ONCEPT FADE OUT WRAPPER
export default {
  props: [],
  data() {
    return {
      opacity: 1,
      topOffest: 150
    };
  },
  mounted() {
    window.addEventListener("scroll", this.calculateOpacity, { passive: true });
    window.addEventListener("resize", this.calculateOpacity);
  },
  destroyed() {
    window.removeEventListener("scroll", this.calculateOpacity);
    window.removeEventListener("resize", this.calculateOpacity);
  },
  methods: {
    calculateOpacity() {
      let distanceFromTop =
        this.$el.getBoundingClientRect().top - this.topOffest;
      let newOpacity = distanceFromTop / 100;

      if (newOpacity > 1) this.opacity = 1;
      else if (newOpacity < 0) this.opacity = 0;
      else this.opacity = newOpacity;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  transition: opacity 100ms linear;

  @media (max-width: map-get($breakpoints, thone)) {
    opacity: 1 !important;
  }

  //   opacity: 1 !important;
}
</style>