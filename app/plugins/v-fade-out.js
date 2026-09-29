const topOffset = 110

// Global `v-fade-out` directive: fades elements out as they scroll towards the top of the viewport
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fade-out', {
    mounted(el) {
      let frame = 0
      el.fadeOutDirectiveEvent = () => {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => calculateOpacity(el))
      }

      el.classList.add('fade-out-directive')

      window.addEventListener('scroll', el.fadeOutDirectiveEvent, { passive: true })
      window.addEventListener('resize', el.fadeOutDirectiveEvent, { passive: true })
    },
    unmounted(el) {
      window.removeEventListener('scroll', el.fadeOutDirectiveEvent)
      window.removeEventListener('resize', el.fadeOutDirectiveEvent)
    },
    getSSRProps() {
      return {}
    },
  })
})

function calculateOpacity(el) {
  const height = window.innerHeight

  const fadeRate = mapNumber(height, 350, 400, 10, 100)

  const distanceFromTop = el.getBoundingClientRect().top - topOffset
  el.style.opacity = clamp(distanceFromTop / fadeRate, 0, 1)
}

function mapNumber(value, low1, high1, low2, high2) {
  return clamp(low2 + (high2 - low2) * (value - low1) / (high1 - low1), low2, high2)
}

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max)
}
