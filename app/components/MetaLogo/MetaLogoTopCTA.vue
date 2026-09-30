<template>
  <!--
    The top stroke of the Q5 mark, drawn as a 3D block as deep as it is tall.
    Scrolling rolls it forward 90° to show its white underside with the mini logo.
    Both faces are inside the one link, so the email CTA always works.
  -->
  <a :href="`mailto:${email}`" class="logo-top-cta">
    <span ref="cube" class="cube">
      <span class="face front">{{ email }}</span>
      <span class="face bottom" aria-hidden="true">
        <img src="~/assets/logo/logo.svg?url" alt="" class="cta-logo">
        {{ email }}
      </span>
    </span>
  </a>
</template>

<script setup>
defineProps({ email: { type: String, default: "" } });

// Scroll distance over which the block rolls over (keep in sync with $roll-distance)
const ROLL_DISTANCE = 80;

const cube = ref(null);
let frame = 0;

function onScroll() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const progress = Math.min(Math.max(window.scrollY / ROLL_DISTANCE, 0), 1);
    cube.value?.style.setProperty("--roll", progress);
  });
}

// Browsers with scroll-driven animations handle this entirely in CSS
const needsFallback = () => !CSS.supports("animation-timeline: scroll()");

onMounted(() => {
  if (!needsFallback()) return;
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped lang="scss">
$roll-distance: 80px;

// Registered so the scroll-driven animation can interpolate it
@property --roll {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

.logo-top-cta {
  display: block;
  width: 100%;
  max-width: bp(phone) - ($container-mobile-padding * 2);
  aspect-ratio: 726 / 138;
  // Lets the faces size their depth from the bar's height (cqh)
  container-type: size;
  perspective: 700px;
  color: white;
}

.cube {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  // Rotate about the block's centre, not its front face
  transform: translateZ(-50cqh) rotateX(calc(var(--roll) * 90deg));
}

.face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
}

.front {
  background-color: black;
  color: white;
  transform: translateZ(50cqh);
}

.bottom {
  box-sizing: border-box;
  background-color: white;
  color: black;
  border: 2px solid black;
  transform: rotateX(-90deg) translateZ(50cqh);
}

.cta-logo {
  position: absolute;
  left: 30cqh;
  height: 46cqh;
}

@supports (animation-timeline: scroll()) {
  .cube {
    animation: roll linear both;
    animation-timeline: scroll(root block);
    animation-range: 0 $roll-distance;
  }
}

@keyframes roll {
  from {
    --roll: 0;
  }
  to {
    --roll: 1;
  }
}

// Swap faces with a fade instead of rolling
@media (prefers-reduced-motion: reduce) {
  .cube {
    transform: none;
  }

  .front {
    transform: none;
  }

  .bottom {
    transform: none;
    opacity: var(--roll);
  }
}
</style>
