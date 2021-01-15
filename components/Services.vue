<template>
  <ul id="services">
    <li>
      Web
      <br />Development
    </li>
    <li>
      Design
      <br />Strategy
    </li>
    <li>
      <span>
        Enterprise
        <br />Solutions
      </span>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
#services {
  display: flex;
  justify-content: center;
  letter-spacing: -0.05em;
  font-weight: bold;
  justify-content: space-between;

  font-size: 0.75em;
  @include breakpoint(phone) {
    font-size: 1em;
  }
  @include breakpoint(thone) {
    font-size: 1.5em;
  }
  @include breakpoint(phablet) {
    font-size: 2em;
  }
  @include breakpoint(tablet) {
    font-size: 2.5em;
  }

  li {
    // &:first-child {

    // }

    &:last-child,
    &:first-child {
      width: 50%;
    }

    &:last-child {
      justify-content: flex-end;
      display: flex;
    }
  }
}
</style>