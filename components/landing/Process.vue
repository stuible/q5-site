<template>
  <ol id="process">
    <li v-for="step in steps" :key="step.name" class="step">
      <component :is="step.name" class="icon" v-fade-out />
      <h3 v-fade-out>{{ step.name }}</h3>
      <p v-fade-out>{{ step.description }}</p>
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
            "We work with you to diagnose and address obstacles to your success on the web",
        },
        {
          name: "Design",
          description:
            "Our design method integrates form & function to deliver a consistent and engaging experience",
        },
        {
          name: "Build",
          description:
            "We develop state-of-the-art solutions that are fast, maintainable, and beautiful",
        },
        {
          name: "Iterate",
          description:
            "We gain insights at every turn and work to strengthen the project to ensure growth and sustainability",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#process {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em 1em;
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
      max-width: 22em;
    }

    .icon {
      width: 4rem;
      padding-bottom: 1em;
      // grid-area: logo;
      height: auto;
    }
  }
}
</style>