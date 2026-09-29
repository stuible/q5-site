<template>
  <div class="logo-top-cta">
    <div class="inner">
      <img
        src="~/assets/logo/logo-white.svg?url"
        alt=""
        class="cta-logo"
        :class="{ show: showLogo }"
      >
      <a :href="`mailto:${email}`">{{ email }}</a>
    </div>
  </div>
</template>

<script setup>
defineProps({ email: { type: String, default: "" } });

const showLogo = ref(false);

function onScroll() {
  showLogo.value = window.scrollY > 300;
}

onMounted(() => document.addEventListener("scroll", onScroll, { passive: true }));
onBeforeUnmount(() => document.removeEventListener("scroll", onScroll));
</script>

<style scoped lang="scss">
.logo-top-cta {
  width: 100%;
  padding-top: calc(138 / 726 * 100%);
  position: relative;
  background-color: black;
  max-width: bp(phone) - ($container-mobile-padding * 2);

  .inner {
    position: absolute;
    display: flex;
    top: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;

    a {
      color: white;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.cta-logo {
  justify-self: center;
  position: absolute;
  padding: 0 1em;
  opacity: 0;
  height: 70%;
  transition: opacity 200ms linear;

  &.show {
    opacity: 1;
  }
}
</style>