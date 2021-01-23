<template>
  <div class="meta-logo-section">
    <!-- Video Top Logo -->
    <video
      v-fade-out
      autoplay
      playsinline
      muted
      loop
      preload
      poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAXCAQAAACFDSjoAAAAMElEQVR42u3PAQ0AAAgDoL9/aM3hhAY0k2eqrKysrKysrKysrKysrKysrKysrHzWAvNOFwEAXr4iAAAAAElFTkSuQmCC"
    >
      <source :src="require('~/assets/videos/logo-top-video.mp4')" />
    </video>
    <!-- <TopLogo class="top-logo" /> -->
    <MetaLogoTopCTA class="top-logo" :email="email" />
  </div>
</template>

<script>
import TopLogo from "~/assets/logo/metaTop.svg?inline";
export default {
  components: {
    TopLogo,
  },
  props: ["email"],
};
</script>

<style scoped lang="scss">
.meta-logo-section {
  top: 50px;
  position: sticky;
  z-index: 1;
  @include breakpoint(phone) {
    position: static;
  }
}
video {
  object-fit: inherit;

  display: none;

  @include breakpoint(phone) {
    display: block;
  }
}
.top-logo {
  // display: block;

  @include breakpoint(phone) {
    display: none;
  }
}
</style>