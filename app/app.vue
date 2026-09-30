<template>
  <NuxtLayout>
    <NuxtPage :transition="pageTransition" />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} | Q5` : 'Q5 - Web Solutions'),
})

const route = useRoute()

// Whether the nav is in its home-page mode (read by the default layout)
const homeNav = useState('home-nav', () => route.path === '/')

// Fades the old page out, then the new one in. The nav switches modes in between,
// once the old page is gone and Nuxt has restored the scroll position (a frame
// later), so it never changes under a page that's still visible.
const pageTransition = {
  name: 'page',
  mode: 'out-in',
  onBeforeEnter() {
    // Switching modes changes the nav's height in the page flow; stop the browser's
    // scroll anchoring from "correcting" the restored scroll position for that
    const html = document.documentElement
    html.style.overflowAnchor = 'none'
    requestAnimationFrame(() => requestAnimationFrame(() => {
      homeNav.value = route.path === '/'
      requestAnimationFrame(() => html.style.removeProperty('overflow-anchor'))
    }))
  },
}
</script>
