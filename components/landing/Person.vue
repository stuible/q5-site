<template>
  <div class="person">
    <div class="person-left">
      <img
        :src="require('@/assets/' + $props.icon)"
        :alt="`${$props.name}'s Logo`"
        class="person-icon"
      />
    </div>
    <div>
      <h3 class="name">{{ $props.name }}</h3>
      <div class="bio">{{ $props.bio }}</div>
      <a :href="$props.url" target="_blank" class="url">Selected Works</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "bio", "url", "icon"],
};
</script>

<style lang="scss">
.person {
  display: grid;
  grid-template-columns: 4rem auto;
  column-gap: 1em;
  margin-bottom: 0.25em;

  @include breakpoint(phablet) {
    grid-template-columns: 5rem auto;
    column-gap: 2em;
  }

  .person-left {
    place-self: start center;
  }

  .person-icon {
    max-height: 4rem;
    margin: 0 auto;
    width: 100%;
  }

  .name {
    margin: 0;
    margin-bottom: 1rem;
  }

  .bio {
    margin-bottom: 1rem;
    font-size: 0.75em;
  }

  .url {
    font-size: 0.75em;
    padding-bottom: 0.2em;
    border-bottom: solid black 0.175em;
  }
}
</style>