<template>
  <main class="container">
    <meta-logo-top />
    <meta-logo-spacer>
      <h1 id="tagline">Q5 develops digital solutions for growing businesses.</h1>
    </meta-logo-spacer>
    <meta-logo-middle />
    <meta-logo-spacer>
      <div id="services-container">
        <ul id="services">
          <li>
            Web <br /> Development
          </li>
          <li>
            Design <br /> Strategy
          </li>
          <li>
            Enterprise <br /> Solutions
          </li>
        </ul>
      </div>
    </meta-logo-spacer>
    <meta-logo-bottom />
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
#top-nav {
  display: none;
  @include breakpoint(phone) {
    display: block;
  }
}

#tagline {
  font-size: 1em;
  @include breakpoint(phone) {
    font-size: 1.5em;
  }
  @include breakpoint(thone) {
    font-size: 2em;
  }
  @include breakpoint(phablet) {
    font-size: 3em;
  }
  @include breakpoint(tablet) {
    font-size: 4em;
  }
}

main {
  margin-top: 10% !important;
}

#services-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

#services {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  font-family: "Neue Haas Unica W1G";
  font-weight: bold;

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
    flex-grow: 1;
    // margin-right: 1em;
  }
}
</style>
