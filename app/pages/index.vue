<template>
  <main class="container home">
    <meta-logo-hero until="#us">
      <meta-logo-top :email="email" class="landing-logo-top" />
      <meta-logo-spacer>
        <h1 id="tagline" v-fade-out>
          Q5 develops digital solutions for growing businesses.
        </h1>
      </meta-logo-spacer>
      <meta-logo-middle v-fade-out />
      <meta-logo-spacer>
        <div id="services-container" v-fade-out>
          <services />
        </div>
      </meta-logo-spacer>
      <meta-logo-bottom v-fade-out />
    </meta-logo-hero>
    <spacer />
    <h2 id="us" v-fade-out>Us</h2>
    <div id="about">
      <p v-fade-out>
        Q5 is a Vancouver-based web design and development consultancy. We are a
        group of developers and designers that create useful stuff for the
        internet and beyond.
      </p>
      <p v-fade-out>
        We want to work with you to bring concrete results to your business
        through web solutions.
      </p>
    </div>
    <spacer />
    <h2 v-fade-out>Work</h2>
    <Work :items="work" />
    <spacer />
    <h2 v-fade-out>Who</h2>
    <ul id="who">
      <li>
        <person
          v-fade-out
          name="Josh Stuible"
          bio="Developer && Designer"
          url="https://stuible.com"
          :icon="jsLogo"
        />
      </li>
      <li>
        <person
          v-fade-out
          name="Sandy Bagga"
          bio="Experience Designer"
          url="https://sandybagga.com/"
          :icon="sbLogo"
        />
      </li>
    </ul>
    <spacer />
    <h2 v-fade-out>Process</h2>
    <process />
  </main>
</template>

<script setup>
import jsLogo from "~/assets/images/jslogo.svg?url";
import sbLogo from "~/assets/images/sblogo.svg?url";

const { data: work } = await useFeaturedWork();

// Add email link with JS after component mounts to avoid people scraping the site
const email = ref("");
onMounted(() => {
  email.value = "contact" + "@" + "q-5.ca";
});
</script>

<style lang="scss">
h2 {
  font-size: 2em;

  @include breakpoint(phone) {
    font-size: 3em;
  }
}

.landing-logo-top {
  padding-top: 0px;

  @include breakpoint(thone) {
    padding-top: 150px;
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

// Home page only (this block isn't scoped): the hero sits one gutter below the top
main.home {
  margin-top: $container-mobile-padding !important;

  @include breakpoint(phone) {
    margin-top: $container-padding !important;
  }

  @include breakpoint(thone) {
    margin-top: 0px !important;
  }

  // Avoid lone words on last lines and even out paragraph line lengths
  :is(h1, h2, h3, p) {
    text-wrap: pretty;
  }
}

#services-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

#about {
  font-size: 1em;
  max-width: 31em;

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

#who {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em 1em;

  li:not(:last-child) {
    margin-bottom: 2em;
  }

  @include breakpoint(phablet) {
    grid-template-columns: 1fr 1fr;

    li:not(:last-child) {
      margin-bottom: 0;
    }
  }
}
</style>
