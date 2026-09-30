<template>
  <ol class="works">
    <li v-for="item in items" :key="item.id">
      <NuxtLink :to="`/work/${slug(item)}/`">
        <h3 v-fade-out class="title">{{ item.title }}</h3>
        <div v-fade-out>
          <NuxtPicture
            :src="`/work/${slug(item)}/${item.featured.image}`"
            :alt="item.title"
            sizes="sm:100vw md:50vw lg:540px"
            loading="lazy"
          />
        </div>

        <ul v-fade-out class="tags">
          <li v-for="(tag, tagKey) in item.tags" :key="tagKey">
            {{ tag }}
          </li>
        </ul>

        <p v-fade-out class="summary">{{ item.summary }}</p>
      </NuxtLink>
    </li>
  </ol>
</template>

<script setup>
defineProps({ items: { type: Array, default: () => [] } });

const slug = (item) => item.stem.split("/").pop();
</script>

<style lang="scss">
/* global styles */
.works {
  a {
    img {
      border-radius: 0.35em;
      transition: transform 100ms linear;
    }
    &:hover {
      img {
        transform: scale(1.025);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.works {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;

  @include breakpoint(phablet) {
    grid-template-columns: 1fr 1fr;
  }

  > li:not(:last-of-type) {
    margin-bottom: 2rem;
  }
}

.title {
  margin: 0;
  margin-right: 0.5em;
  margin-bottom: 1em;
  font-size: 1.4rem;

  @include breakpoint(tablet) {
    font-size: 1.5rem;
  }
}

// .type {
//   margin: 0;
//   text-transform: uppercase;
//   font-size: 0.85em;
//   display: none;

//   @include breakpoint(phone) {
//     display: block;
//   }

//   @include breakpoint(phablet) {
//     display: none;
//   }

//   @include breakpoint(tablet) {
//     display: block;
//   }
// }

.summary {
  // flex-basis: 75%;
  font-size: 1em;
  margin: 0;
  margin-top: 0.5em;
  margin-right: 6%;
  // font-weight: bold;
  // color: $colourDark;

  @include breakpoint(thone) {
    font-size: 1.25em;
  }
  @include breakpoint(tablet) {
    font-size: 1.4em;
  }
}

// .tags {
// }

.tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  // align-content: flex-start;
  font-size: 0.57em;
  padding: 0.5em 0;
  text-transform: uppercase;
  font-weight: bold;

  @include breakpoint(phone) {
    font-size: 0.7em;
    // max-width: 20em;
    // text-align: right;
    // justify-content: flex-end;
  }

  li {
    &:not(:first-of-type) {
      list-style-type: disc;
      list-style-position: inside;
      margin-left: 0.75em;
    }
  }
}
</style>