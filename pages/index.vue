<template>
  <main class="container">
    <social-head :title="title" :description="description" />
    <meta-logo-top :email="email"/>
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
    <spacer />
    <h2 v-fade-out>Us</h2>
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
      <!-- <p v-fade-out> 🧠 🔬 📐 👨‍🎨 👩‍💻 🕸 🏁 🤗</p> -->
    </div>
    <!-- <spacer />
    <h2 v-fade-out>Projects</h2>
    <ul id="projects" >
      <li v-fade-out></li>
      <li v-fade-out></li>
      <li v-fade-out></li>
      <li v-fade-out></li>
    </ul> -->
    <spacer />
    <h2 v-fade-out>Who</h2>
    <ul id="who">
      <li>
        <person
          v-fade-out
          name="Josh Stuible"
          bio="Developer && Designer"
          url="https://stuible.com"
          icon="images/jslogo.svg"
        />
      </li>
      <li>
        <person
          v-fade-out
          name="Sandy Bagga"
          bio="Experience Designer"
          url="https://sandybagga.com/"
          icon="images/sblogo.svg"
        />
      </li>
    </ul>
    <spacer />
    <h2 v-fade-out>Process</h2>
    <process />
  </main>
</template>

<script>
export default {
  data() {
    return {
      // tagline: "Q5 develops digital solutions for growing businesses."
      title: "Q5 - Web Solutions",
      description:
        "Q5 is a Vancouver-based, Canadian web development consulatancy that creates digital solutions for growing businesses.",
      email: "",
    };
  },
  mounted() {
    // Add email link with JS after component mounts to avoid people scraping the site
    this.email = "contact" + "@" + "q-5.ca";
  },
  computed: {},
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

#projects {
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

#who {
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.5em;
  gap: 1em 1em;

  li:not(:last-child) {
    margin-bottom: 2em;
  }

  @include breakpoint(tablet) {
    grid-template-columns: 1fr 1fr;

    li:not(:last-child) {
      margin-bottom: 0;
    }
  }
}
</style>
