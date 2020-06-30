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
            Web
            <br />Development
          </li>
          <li>
            Design
            <br />Strategy
          </li>
          <li>
            <span>Enterprise
            <br />Solutions</span>
          </li>
        </ul>
      </div>
    </meta-logo-spacer>
    <meta-logo-bottom />
    <h2>About</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum,
      perferendis dolores cupiditate repudiandae dolorem natus eum? Repudiandae,
      nam architecto, error nostrum ut at voluptates voluptate asperiores expedita maiores assumenda.
    </p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      // tagline: "Q5 develops digital solutions for growing businesses."
    };
  },
  computed: {}
};
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
  margin-top: 50px !important;

  // @include breakpoint(phone) {
  //   margin-top: 100px !important;
  // }

  @include breakpoint(thone) {
    margin-top: 150px !important;
  }
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

    &:first-child { 
      
    }

    &:last-child, &:first-child {
      width: 50%;
    }

    &:last-child {
      // align-self: flex-end;
      // flex-grow: auto;
      justify-content: flex-end;
      display: flex;
    }
  }
}
</style>
