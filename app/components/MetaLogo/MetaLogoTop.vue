<template>
  <div class="meta-logo-section">
    <!-- Video Top Logo -->
    <video
      v-fade-out
      autoplay
      playsinline
      muted
      loop
      preload="auto"
      poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAXCAQAAACFDSjoAAAAMElEQVR42u3PAQ0AAAgDoL9/aM3hhAY0k2eqrKysrKysrKysrKysrKysrKysrHzWAvNOFwEAXr4iAAAAAElFTkSuQmCC"
    >
      <source src="~/assets/videos/logo-top-video.mp4" type="video/mp4" >
    </video>
    <MetaLogoTopCTA class="top-logo" :email="email" />
  </div>
</template>

<script setup>
defineProps({ email: { type: String, default: "" } });
</script>

<style scoped lang="scss">
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