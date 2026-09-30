<template>
  <header id="top-nav" :class="{ solid: type === 'solid', home: type !== 'solid' }">
    <nav class="container">
      <NuxtLink id="nav-logo-link" to="/" aria-label="Q5 home"><Logo id="nav-logo" /></NuxtLink>
      <button-link id="cta" :href="`${email}`">Let's Make Something</button-link>
    </nav>
  </header>
</template>

<script setup>
import Logo from "~/assets/logo/logo.svg";

defineProps({ type: { type: String, default: "" } });

// Add email link with JS after component mounts to avoid people scraping the site
const email = ref("");
onMounted(() => {
  email.value = "mailto:contact" + "@q-5.ca";
});
</script>

<style lang="scss" scoped>
#top-nav {
  // Below the desktop layout: the same sticky white nav on every page
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;

  nav {
    height: $nav-height-mobile;
    align-items: center;
  }

  @include breakpoint(thone) {
    padding: 50px 0 50px 0;
    background-color: transparent;

    &.solid {
      background-color: white;
    }

    nav {
      height: auto;
      align-items: normal;
    }
  }
}

nav {
  display: flex;
  justify-content: space-between;
}
#nav-logo {
  width: 25px;
}
</style>

<style lang="scss">
// Home page on phones: the nav overlays the hero, whose pinned Q5 mark shrinks
// into the logo spot (see MetaLogoHero). The CTA sits under the mark's top stroke
// and is uncovered, right to left, as the stroke retreats. Not scoped so the
// keyframe name stays unhashed for MetaLogoHero's JS fallback.
@media (max-width: 449px) and (prefers-reduced-motion: no-preference) {
  #top-nav.home {
    margin-bottom: -$nav-height-mobile;

    #nav-logo-link {
      visibility: hidden;
    }

    #cta {
      animation: hero-cta-reveal linear both;
      animation-timeline: scroll(root block);
      animation-range: 0 var(--reveal-end, 300px);
    }
  }

  @supports not (animation-timeline: scroll()) {
    #top-nav.home #cta {
      animation-duration: 1s;
      animation-play-state: paused;
    }
  }
}

@keyframes hero-cta-reveal {
  from {
    clip-path: inset(0 0 0 100%);
  }

  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
