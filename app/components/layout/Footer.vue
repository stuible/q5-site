<template>
  <footer>
    <div class="container">
      <ul>
        <li>© Q5 {{ currentYear }}</li>
        <li v-for="(social, index) in socials" :key="index">
          <a :href="social.link" target="_blank">{{ social.name }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const socials = ref([
  {
    name: "Instagram",
    link: "https://www.instagram.com/Q5canada/",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Q5canada/",
  },
  {
    name: "Email",
    link: "",
  },
]);
const currentYear = new Date().getFullYear();

onMounted(() => {
  // Add email link with JS after component mounts to avoid people scraping the site
  socials.value.find((item) => item.name == "Email").link =
    "mailto:contact" + "@q-5.ca";
});
</script>

<style lang="scss">
footer {
  margin-top: 100px;

  ul {
    list-style: none;
    display: flex;
    padding: 50px 0;
    font-weight: bold;
    flex-direction: column;
    justify-content: space-between;

    @include breakpoint(thone) {
      flex-direction: row;
    }
  }
}
</style>