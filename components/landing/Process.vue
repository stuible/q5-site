<template>
  <ol id="process">
    <li v-for="step in steps" :key="step.name" class="step">
      <component :is="step.name" class="icon" />
      <h3>{{ step.name }}</h3>
      <p>{{ step.description }}</p>
    </li>
  </ol>
</template>

<script>
import Research from "~/assets/images/research.svg?inline";
import Design from "~/assets/images/design.svg?inline";
import Build from "~/assets/images/build.svg?inline";
import Iterate from "~/assets/images/iterate.svg?inline";
export default {
  components: {
    Research,
    Design,
    Build,
    Iterate,
  },
  data() {
    return {
      steps: [
        {
          name: "Research",
          description:
            "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        },
        {
          name: "Design",
          description:
            "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        },
        {
          name: "Build",
          description:
            "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        },
        {
          name: "Iterate",
          description:
            "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#process {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0px 1em;
  font-size: 1em;
  font-weight: bold;
  padding: 0;

  @include breakpoint(phablet) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @include breakpoint(tablet) {
    font-size: 1.5em;
  }

  .step {
    // display: grid;
    // grid-template-columns: auto 1fr;
    // grid-template-rows: auto auto;
    // align-items: start;
    // gap: 0px 0px;
    // grid-template-areas:
    //   "logo name"
    //   "logo description";

    h3 {
      // grid-area: name;
      margin: 0;
    }

    p {
      // grid-area: description;
      font-size: 1rem;
      font-weight: normal;
    }

    .icon {
      width: 3em;
      // grid-area: logo;
      height: auto;
    }
  }
}
</style>