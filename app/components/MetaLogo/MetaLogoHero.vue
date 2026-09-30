<template>
  <!--
    On phones the home hero is the whole Q5 mark: top stroke, tagline, middle,
    services, bottom. It's pinned while the page scrolls normally beneath it and
    shrinks into the nav's logo spot, docking just as `until` reaches the nav. Its
    words fade out on the way, and the nav's CTA is uncovered as the top stroke
    retreats from it. Larger screens render the pieces in normal flow.
  -->
  <div class="hero-mark-space">
    <div ref="mark" class="hero-mark">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // Selector of the element the mark finishes docking by (when it reaches the nav)
  until: { type: String, required: true },
});

const VARS = ["--shrink-end", "--reveal-end", "--mark-scale-end", "--mark-shift-x", "--mark-shift-y"];
// Words finish fading halfway through the shrink
const WORDS_END = 0.5;

const mark = ref(null);
const root = () => document.documentElement;
let media, frame = 0, ends = null;

// Measures where the mark has to end up, and over how much scroll, and hands
// those to the CSS animations as custom properties
function measure() {
  if (!media.matches) return clearVars();
  const style = root().style;

  const el = mark.value;
  const nav = document.getElementById("top-nav");
  const logo = document.getElementById("nav-logo").getBoundingClientRect();
  const cta = document.getElementById("cta").getBoundingClientRect();
  const target = document.querySelector(props.until);

  // Untransformed geometry of the pinned mark (a transform doesn't affect these)
  const { top, left } = getComputedStyle(el);
  const markTop = parseFloat(top), markLeft = parseFloat(left), width = el.offsetWidth;

  const scaleEnd = logo.width / width;
  const shrinkEnd = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight;
  // The top stroke's right edge moves linearly from the mark's right edge to the
  // logo's; the CTA is fully uncovered once that edge passes the CTA's left side
  const revealAt = (1 - (cta.left - markLeft) / width) / (1 - scaleEnd);
  const revealEnd = Math.min(Math.max(revealAt, 0), 1) * shrinkEnd;

  style.setProperty("--shrink-end", `${shrinkEnd}px`);
  style.setProperty("--reveal-end", `${revealEnd}px`);
  style.setProperty("--mark-scale-end", scaleEnd);
  style.setProperty("--mark-shift-x", `${logo.left - markLeft}px`);
  style.setProperty("--mark-shift-y", `${logo.top - markTop}px`);

  ends = { "hero-mark-shrink": shrinkEnd, "hero-words-fade": shrinkEnd * WORDS_END, "hero-cta-reveal": revealEnd };
  if (useFallback) scrub();
}

function clearVars() {
  ends = null;
  for (const name of VARS) root().style.removeProperty(name);
}

// Browsers without scroll-driven animations: the CSS animations are paused and
// this scrubs them to match the scroll position, once per frame
const useFallback = import.meta.client && !CSS.supports("animation-timeline: scroll()");

function scrub() {
  frame = 0;
  if (!ends) return;
  for (const animation of document.getAnimations()) {
    const end = ends[animation.animationName];
    if (end === undefined) continue;
    animation.currentTime = Math.min(Math.max(window.scrollY / end, 0), 1) * 1000;
  }
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(scrub);
}

onMounted(() => {
  media = window.matchMedia("(max-width: 449px) and (prefers-reduced-motion: no-preference)");
  measure();
  media.addEventListener("change", measure);
  window.addEventListener("resize", measure, { passive: true });
  // Web fonts can shift where `until` sits
  document.fonts?.ready.then(measure);
  if (useFallback) window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  media?.removeEventListener("change", measure);
  window.removeEventListener("resize", measure);
  window.removeEventListener("scroll", onScroll);
  cancelAnimationFrame(frame);
  clearVars();
});
</script>

<style lang="scss">
// Not scoped: the selectors reach into slotted components, and the keyframe names
// must stay unhashed for the JS fallback to find them
@media (max-width: 449px) and (prefers-reduced-motion: no-preference) {
  // Holds the mark's place in the page so content starts below it. Its height is
  // the pieces' combined aspect ratios: top stroke, gap, middle, gap, bottom.
  .hero-mark-space {
    height: 0;
    padding-bottom: calc((138 / 726 + 2 * 224 / 620 + 397 / 1240 + 1028 / 1239) * 100%);
  }

  .hero-mark {
    position: fixed;
    top: $container-mobile-padding;
    left: $container-mobile-padding;
    right: $container-mobile-padding;
    z-index: 3;
    transform-origin: 0 0;
    // Lets taps through to the nav once docked; the email link opts back in
    pointer-events: none;
    animation: hero-mark-shrink linear both;
    animation-timeline: scroll(root block);
    animation-range: 0 var(--shrink-end, 600px);

    .cta-link {
      pointer-events: auto;
    }

    .cta-link,
    .logo-spacer {
      animation: hero-words-fade linear both;
      animation-timeline: scroll(root block);
      animation-range: 0 calc(var(--shrink-end, 600px) * 0.5);
    }
  }

  @supports not (animation-timeline: scroll()) {
    .hero-mark,
    .hero-mark .cta-link,
    .hero-mark .logo-spacer {
      animation-duration: 1s;
      animation-play-state: paused;
    }
  }
}

@keyframes hero-mark-shrink {
  to {
    transform: translate(var(--mark-shift-x, 0), var(--mark-shift-y, 0)) scale(var(--mark-scale-end, 0.08));
  }
}

@keyframes hero-words-fade {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
