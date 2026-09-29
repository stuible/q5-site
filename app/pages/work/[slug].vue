<template>
  <main class="container">
    <article>
      <NuxtPicture
        :src="heroSrc"
        class="hero"
        :alt="work.title"
        sizes="sm:100vw md:100vw lg:1080px"
        :img-attrs="{ fetchpriority: 'high' }"
        :preload="{ fetchPriority: 'high' }"
      />
      <header>
        <div class="titles">
          <p class="when">{{ work.when }}</p>
          <h1>{{ work.title }}</h1>
          <p class="type">{{ work.type }}</p>
        </div>
        <div class="project-link">
          <button-link
            v-if="work.link"
            id="check-it-out"
            :href="work.link"
            target="_blank"
            ><GlobeIcon />Check It Out<GlobeIcon
          /></button-link>
        </div>
      </header>
      <ContentRenderer :value="work" class="nuxt-content nuxt-content-styles" />
    </article>
  </main>
</template>

<script setup>
import GlobeIcon from "~/assets/images/globe.svg";

const route = useRoute();

const { data: work } = await useAsyncData(`work-${route.params.slug}`, () =>
  queryCollection("work").path(`/work/${route.params.slug}`).first()
);

if (!work.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found", fatal: true });
}

const heroSrc = `/work/${route.params.slug}/${work.value.hero}`;

useSeoMeta({
  title: work.value.title,
  description: work.value.description,
  ogType: "article",
  ogImage: useSocialImage(heroSrc),
  ogImageAlt: work.value.title,
  twitterImageAlt: work.value.title,
});

useSchemaOrg([
  defineWebPage({ "@type": "ItemPage" }),
  defineBreadcrumb({
    itemListElement: [
      { name: "Home", item: "/" },
      { name: "Work", item: "/work/" },
      { name: work.value.title },
    ],
  }),
]);
</script>

<style lang="scss">
.nuxt-content-styles {
  h2 {
    margin-top: 2em;
  }

  p {
    line-height: 1.5;
  }

  ol {
    list-style: decimal;
    padding-left: 1em;
    // list-style-position: inside;

    li::marker {
      font-weight: bold;
    }
  }

  li:not(:last-of-type) {
    margin-bottom: 1em;
  }

  a {
    border-bottom: 1px solid black;
    padding-bottom: 0.5em;
  }

  blockquote {
    position: relative;

    margin: 1em 0;
    @include breakpoint(phone) {
      margin: 1em 2.5em;
    }

    &:before {
      content: open-quote;
      font-size: 5em;
      position: static;
      left: -0.53em;
      top: -0.05em;
      max-height: 0.5em;
      display: block;

      @include breakpoint(phone) {
        position: absolute;
      }
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