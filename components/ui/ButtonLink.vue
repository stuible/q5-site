<template>
  <a :href="href" :target="target"><slot /></a>
</template>

<script>
export default {
  props: ["href", "target"],
};
</script>

<style lang="scss" scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0em 0.85em;
  padding-top: 0.1em;
  border: black 2px solid;
  min-height: 3em;
  cursor: pointer;
  font-size: 0.8em;

  &:hover {
    background-color: black;
    color: white;
  }

  @include breakpoint(phablet) {
    font-size: 1em;
  }
}
</style>