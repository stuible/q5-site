<template>
  <footer>
    <div class="container">
      <ul>
        <li>© Q5 2020</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Email</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  margin-top: 100px;
  > div {
  }

  ul {
    border-top: 5px solid black;
    list-style: none;
    display: flex;
    padding: 50px 0;
    font-weight: bold;
    flex-direction: column;

    @include breakpoint(thone) {
      flex-direction: row;
    }
  }

  li {
    flex-grow: 1;
  }
}
</style>