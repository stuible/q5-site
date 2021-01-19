<template>
  <div class="meta-logo-section">
    <!-- Video Top Logo -->
    <video
      autoplay
      playsinline
      muted
      loop
      preload
      poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAXCAQAAACFDSjoAAAAMElEQVR42u3PAQ0AAAgDoL9/aM3hhAY0k2eqrKysrKysrKysrKysrKysrKysrHzWAvNOFwEAXr4iAAAAAElFTkSuQmCC"
    >
      <source :src="require('~/assets/videos/logo-top-video.mp4')" />
    </video>
    <!-- <TopLogo /> -->
  </div>
</template>

<script>
import TopLogo from "~/assets/logo/metaTop.svg?inline";
export default {
  components: {
    TopLogo,
  },
};
</script>

<style scoped lang="scss">
video {
  object-fit: inherit;
}
</style>