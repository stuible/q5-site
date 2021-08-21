<template>
  <div class="logo-top-cta">
    <div class="inner">
      <img
        src="~/assets/logo/logo-white.svg?data"
        class="cta-logo"
        :class="{ show: showLogo }"
      />
      <a :href="`mailto:${email}`">{{ email }}</a>
    </div>
  </div>
</template>

<script>
// import Logo from "~/assets/logo/logo.svg?inline";
export default {
  components: {
    // Logo,
  },
  props: ["email"],
  data() {
    return {
      showLogo: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(event) {
      if (window.scrollY > 300) this.showLogo = true;
      else this.showLogo = false;
    },
  },
};
</script>

<style scoped lang="scss">
.logo-top-cta {
  width: 100%;
  padding-top: calc(138 / 726 * 100%);
  position: relative;
  background-color: black;
  max-width: map-get($breakpoints, phone) - ($container-padding * 2);

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