<template>
  <ol class="works">
    <li v-for="(item, key) in items" :key="key">
      <nuxt-link :to="`work/${item.slug}`">
        <div v-fade-out>
          <nuxt-picture :src="`/work/${item.slug}/${item.hero}`" />
        </div>
        <div class="info" v-fade-out>
          <div>
            <h3 class="title">{{ item.title }}</h3>
            <p class="type">{{ item.type }}</p>
          </div>
          <ul class="tags">
            <li v-for="(tag, tagKey) in item.tags" :key="tagKey">
              {{ tag }}
            </li>
          </ul>
        </div>
      </nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: ["items"],
};
</script>

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
  display: grid;
  grid-template-columns: 3fr 3fr;
  margin-top: 1em;
}

.title {
  margin: 0;
}

.type {
}

.tags {
}

.tags {
  display: flex;
  max-width: 20em;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-end;
  text-align: right;
  li {
    &:not(:first-of-type) {
        list-style-type: disc;
      list-style-position: inside;
      margin-left: 0.75em;
    }
  }
}
</style>