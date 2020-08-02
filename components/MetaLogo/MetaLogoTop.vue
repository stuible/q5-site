<template>
  <div class="meta-logo-section">
    <!-- Video Top Logo -->
    <video
      autoplay
      playsinline
      muted
      loop
      preload
      poster=""
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

</style>