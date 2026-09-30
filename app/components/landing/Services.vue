<template>
  <ul id="services">
    <li>
      Web
      <br >Development
    </li>
    <li>
      Design
      <br >Strategy
    </li>
    <li>
      <span>
        Enterprise
        <br >Solutions
      </span>
    </li>
  </ul>
</template>

<style lang="scss">
#services {
  display: flex;
  letter-spacing: -0.05em;
  font-weight: bold;
  justify-content: space-between;

  font-size: shrink-below($logo-text-shrink-below, $mobile-font-size * 0.75);
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