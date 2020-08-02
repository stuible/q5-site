<template>
  <div class="meta-logo-section">
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
// video { width: 100%; }
// svg { 
//   width: 100%;
//   position:absolute;
//   top: 0;
//   left: 0; // needed for FF, Safari, Edge
//   height: 100%;
// }
// svg text {
//   font-family: Biko, sans-serif;
//   font-weight: 700;
//   text-transform: uppercase;
//   font-size: 38px;
// }
// svg rect {
//   fill: white;
// }
// svg > rect {
//     mask: url(#top-logo-mask);
// }
</style>