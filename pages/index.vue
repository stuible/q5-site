<template>
  <main class="container">
    <meta-logo-top v-fade-out />
    <meta-logo-spacer>
      <h1 id="tagline" v-fade-out>Q5 develops digital solutions for growing businesses.</h1>
    </meta-logo-spacer>
    <meta-logo-middle v-fade-out />
    <meta-logo-spacer>
      <div id="services-container" v-fade-out>
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
      </div>
    </meta-logo-spacer>
    <meta-logo-bottom v-fade-out />
    <spacer />
    <h2 v-fade-out>Us</h2>
    <div id="about">
      <p
        v-fade-out
      >Q5 is a Vancouver based web design and developemnt consulatancy. We are a group of internet nerds that create useful stuff on the internet.</p>
      <p
        v-fade-out
      >We want to work with you to bring concrete results to your business through custom designed solutions.</p>
      <p v-fade-out>If you have a digital business question, we have the answer.</p>
    </div>
    <spacer />
    <h2>Projects</h2>
    <ul id="projects">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
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
h2 {
  font-size: 3em;
}

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

  @include breakpoint(thone) {
    margin-top: 0px !important;
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

#about {
  font-size: 1em;

  @include breakpoint(phone) {
    font-size: 1em;
  }
  @include breakpoint(thone) {
    font-size: 1.25em;
  }
  @include breakpoint(phablet) {
    font-size: 1.5em;
  }
  @include breakpoint(tablet) {
    font-size: 2em;
  }
}

#projects {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em 2em;

  @include breakpoint(phone) {
    grid-template-columns: 1fr 1fr;
  }

  @include breakpoint(phablet) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include breakpoint(tablet) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  li {
    height: 50px;
    background-color: black;
  }
}
</style>
