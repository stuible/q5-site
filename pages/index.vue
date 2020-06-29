<template>
  <main class="container">
    <meta-logo-top />
    <meta-logo-spacer>
      <h1 id="tagline">Q5 develops digital solutions for growing businesses.</h1>
    </meta-logo-spacer>
    <meta-logo-middle />
    <meta-logo-spacer>
      <div id="services-container">
        <ul id="services">
          <li>
            Web
            <br />Development
          </li>
          <li>
            Design
            <br />Strategy
          </li>
          <li>
            Enterprise
            <br />Solutions
          </li>
        </ul>
      </div>
    </meta-logo-spacer>
    <meta-logo-bottom/>
    <h2>About</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum, 
      perferendis dolores cupiditate repudiandae dolorem natus eum? Repudiandae, 
      nam architecto, error nostrum ut at voluptates voluptate asperiores expedita maiores assumenda.</p>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
#top-nav {
  display: none;
  @include breakpoint(phone) {
    display: block;
  }
}

#tagline {
  font-size: 1em;
  @include breakpoint(phone) {
    font-size: 1.5em;
  }
  @include breakpoint(thone) {
    font-size: 2em;
  }
  @include breakpoint(phablet) {
    font-size: 3em;
  }
  @include breakpoint(tablet) {
    font-size: 4em;
  }
}

main {
  margin-top: 50px !important;

  @include breakpoint(phone) {
    margin-top: 150px !important;
  }
}

#services-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

#services {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  letter-spacing: -0.05em;
  font-weight: bold;

  font-size: 0.75em;
  @include breakpoint(phone) {
    font-size: 1em;
  }
  @include breakpoint(thone) {
    font-size: 1.5em;
  }
  @include breakpoint(phablet) {
    font-size: 2em;
  }
  @include breakpoint(tablet) {
    font-size: 2.5em;
  }

  li {
    flex-grow: 1;
    // margin-right: 1em;
  }
}

// .client-logos {
//   list-style: none;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr 1fr 1fr;
//   gap: 20px 20px;
//   grid-template-areas: ". ." ". ." ". .";
//   li {
//     height: 100px;
//     width: 100px;
//     // background-color: black;
//     // border-radius: 50%;
//     border: 10px rgb(136, 136, 136) solid;
//   }
// }
</style>
