<template>
  <footer>
    <div class="container">
      <ul>
        <li>© Q5 2020</li>
        <li v-for="(social, index) in socials" v-bind:key="index">
          <a :href="social.link">{{ social.name }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/Q5canada/face"
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/Q5canada/"
        },
        {
          name: "Email",
          link: ""
        }
      ]
    };
  },
  mounted(){
    // Add email link with JS after component mounts to avoid people scraping the site
    this.socials.find(item => item.name == 'Email').link = 'mailto:contact' + '@q-5.ca'
  }
};
</script>

<style lang="scss">
footer {
  margin-top: 100px;
  > div {
  }

  ul {
    // border-top: 5px solid black;
    list-style: none;
    display: flex;
    padding: 50px 0;
    // font-size: 2em;
    font-weight: bold;
    flex-direction: column;
    justify-content: space-between;

    @include breakpoint(thone) {
      flex-direction: row;
    }
  }

  li {
    // flex-grow: 1;
  }
}
</style>