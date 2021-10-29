<template>
  <ol class="works">
    <li v-for="(item, key) in items" :key="key">
      <nuxt-link :to="`work/${item.slug}`">
        <div class="info" v-fade-out>
          <h3 class="title">{{ item.title }}</h3>
          <p class="type">{{ item.type }}</p>

          <!-- <ul class="tags">
            <li v-for="(tag, tagKey) in item.tags" :key="tagKey">
              {{ tag }}
            </li>
          </ul> -->
        </div>
        <div v-fade-out>
          <nuxt-picture :src="`/work/${item.slug}/${item.featured.image}`" />
        </div>

        <p class="summary" v-fade-out>{{ item.summary }}</p>
      </nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style lang="scss">
/* global styles */
.works {
  a {
    img {
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

.info {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  // grid-template-columns: 1fr;
  margin-bottom: 1em;

  // @include breakpoint(phone) {
  //   grid-template-columns: 3fr 3fr;
  // }
}

.title {
  margin: 0;
  margin-right: 0.5em;
}

.type {
  margin: 0;
  text-transform: uppercase;
  font-size: 0.85em;
  display: none;

  @include breakpoint(phone) {
    display: block;
  }

  @include breakpoint(phablet) {
    display: none;
  }

  @include breakpoint(tablet) {
    display: block;
  }
}

.summary {
  // font-size: 0.75em;
  // font-weight: bold;
  // color: $colourDark;
}

// .tags {
// }

// .tags {
//   display: flex;

//   flex-wrap: wrap;
//   align-content: flex-start;

//   font-size: 0.75em;

//   @include breakpoint(phone) {
//     font-size: 0.9em;
//     max-width: 20em;
//     text-align: right;
//     justify-content: flex-end;
//   }

//   li {
//     &:not(:first-of-type) {
//       list-style-type: disc;
//       list-style-position: inside;
//       margin-left: 0.75em;
//     }
//   }
// }
</style>