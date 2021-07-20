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
  > li:not(:last-of-type) {
    margin-bottom: 2rem;
  }
}

.info {
  display: grid;
  grid-template-columns: 1fr auto;
}

.title {
  margin: 0;
}

.type {

}

.tags {

}
</style>