<template>
  <!-- The top stroke of the Q5 mark, carrying the email link on phones -->
  <div class="logo-top-cta">
    <a :href="`mailto:${email}`" class="cta-link">
      <span class="cta-label">{{ email }}</span>
      <svg class="cta-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" /></svg>
    </a>
  </div>
</template>

<script setup>
defineProps({ email: { type: String, default: "" } });
</script>

<style scoped lang="scss">
.logo-top-cta {
  width: 100%;
  max-width: bp(phone) - ($container-mobile-padding * 2);
  aspect-ratio: 726 / 138;
  // Lets the label size itself from the bar's width (cqw)
  container-type: size;
  background-color: black;
}

.cta-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  height: 100%;
  color: white;
  // Full size from 375px-wide phones up; below that it scales with the bar's width
  // (4.9cqw is 0.85rem on the 295px-wide bar of a 375px phone)
  font-size: min(0.85rem, 4.9cqw);
  letter-spacing: 0.01em;
}

// Underline and arrow make it read as a link, not a label
.cta-label {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.3em;
}

.cta-arrow {
  width: 1em;
  height: 1em;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
}
</style>
