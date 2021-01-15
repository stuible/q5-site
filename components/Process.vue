<template>
  <ol id="process">
    <li>Research</li>
    <li>Prototype</li>
    <li>Build</li>
    <li>Iterate</li>
  </ol>
</template>

<script>
export default {};
</script>

<style lang="scss">
@counter-style process {
  system: fixed;
  symbols: "(1) =>" "(2) =>" "(3) =>" "(4) =>" "(5) =>" "(6) =>" "(7) =>"
    "(8) =>" "(9) =>" "(10) =>";
  suffix: " ";
}

#process {
  list-style: process;
  list-style-position: inside;
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1em;
  font-weight: bold;

  @include breakpoint(phablet) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @include breakpoint(tablet) {
    font-size: 1.5em;
  }
}
</style>