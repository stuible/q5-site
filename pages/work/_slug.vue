<template>
  <main class="container">
    <social-head
      :title="`Q5 - ${work.title}`"
      :description="work.seo"
      :image="`/work/${work.slug}/${work.hero}`"
    />
    <article>
      <nuxt-picture :src="`/work/${work.slug}/${work.hero}`" class="hero" />
      <header>
        <div class="titles">
          <p class="when">{{ work.when }}</p>
          <h1>{{ work.title }}</h1>
          <p class="type">{{ work.type }}</p>
        </div>
        <div class="project-link">
          <button-link
            id="check-it-out"
            :href="work.link"
            target="_blank"
            v-if="work.link"
            ><globe-icon />Check It Out<globe-icon
          /></button-link>
        </div>
      </header>
      <nuxt-content :document="work" class="nuxt-content-styles" />
    </article>
  </main>
</template>

<script>
import GlobeIcon from "~/assets/images/globe.svg?inline";
export default {
  components: {
    GlobeIcon,
  },
  async asyncData({ $content, params }) {
    return {
      work: await $content("work", params.slug).fetch(),
    };
  },
};
</script>

<style lang="scss">
.nuxt-content-styles {
  h2 {
    margin-top: 2em;
  }

  p {
    line-height: 1.5;
  }

  a {
    border-bottom: 1px solid black;
    padding-bottom: 0.5em;
  }

  blockquote {
    // background: #f9f9f9;
    // border-left: 10px solid #ccc;
    margin: 0;
    padding: 0.5em 10px;
    // quotes: "\201C""\201D""\2018""\2019";

    &:before {
      color: #ccc;
      content: open-quote;
      // font-size: 5em;
      // position: absolute;
      // line-height: 0.1em;
      margin-right: 0.25em;
      // vertical-align: -0.3em;
      // height: 1em;
      // display: inline-block;
    }
    p {
      display: inline;
    }
  }
}
</style>

<style lang="scss" scoped>
.hero {
  margin-bottom: 2em;
  display: block;
}

h1 {
  font-size: 2.5em;
  margin: 0.25em 0;

  @include breakpoint(tablet) {
    font-size: 3em;
  }
}

.when {
  margin-top: 0;
}

header {
  // display: flex;

  @include breakpoint(phone) {
    display: flex;
  }

  .titles {
    flex-grow: 1;
    margin-right: 2em;
  }

  .project-link {
  }
}

#check-it-out {
  white-space: nowrap;
  &:hover {
    svg {
      * {
        stroke: white;
      }
    }
  }

  svg {
    padding-bottom: 0.2em;
    &:last-of-type {
      margin-left: 0.5em;
    }

    &:first-of-type {
      margin-right: 0.5em;
    }
  }
}

.type {
  text-transform: uppercase;
}
</style>