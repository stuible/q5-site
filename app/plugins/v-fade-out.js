// Keep in sync with $fade-end in assets/scss/fade-out-directive.scss
const FADE_END = 110

// Global `v-fade-out` directive: fades elements out as they scroll up behind the navbar.
// Where the browser supports scroll-driven animations the fade is pure CSS (see
// fade-out-directive.scss). Otherwise one shared scroll listener updates every
// element once per frame, reading all positions before writing any opacity.
export default defineNuxtPlugin((nuxtApp) => {
  const elements = new Set()
  let useFallback = null
  let frame = 0

  function update() {
    frame = 0
    const distance = fadeDistance(window.innerHeight)
    const tops = [...elements].map(el => [el, el.getBoundingClientRect().top])
    for (const [el, top] of tops) {
      const opacity = String(clamp((top - FADE_END) / distance, 0, 1))
      if (el.style.opacity !== opacity) el.style.opacity = opacity
    }
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  nuxtApp.vueApp.directive('fade-out', {
    mounted(el) {
      el.classList.add('fade-out-directive')

      useFallback ??= !CSS.supports('animation-timeline: view()')
      if (!useFallback) return

      if (elements.size === 0) {
        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule, { passive: true })
      }
      elements.add(el)
      schedule()
    },
    unmounted(el) {
      if (!elements.delete(el) || elements.size > 0) return
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    },
    getSSRProps() {
      return {}
    },
  })
})

// Matches $fade-distance: 100px, shrinking to 10px on 350–400px tall windows
function fadeDistance(viewportHeight) {
  return clamp((viewportHeight - 350) * 1.8 + 10, 10, 100)
}

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max)
}
