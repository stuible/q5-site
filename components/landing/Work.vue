<template>
  <ol>
      <li v-for="(item, key) in items" :key="key">
          <img src="" alt="">
          <h3>{{item.title}}</h3>
          <p>{{item.type}}</p>
          <ul>
              <li v-for="(tag, tagKey) in item.tags" :key="tagKey">
                  {{tag}}
              </li>
          </ul>
      </li>
  </ol>
</template>

<script>
export default {
props: ["items"],
}
</script>

<style lang="scss" scoped>

</style>