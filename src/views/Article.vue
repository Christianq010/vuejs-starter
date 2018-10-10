<template>
    <div id="app">
        <navbar />
        <social-share-col />
        <main-article v-bind:fields="fields"></main-article>
        <!-- <p> {{ $prismic.richTextAsPlain(fields.title) }}  </p> -->
    </div>
</template>

<script>
import Navbar from "./../components/NavBar/Navbar";

import SocialShareCol from "./../components/Articles/SocialShareCol";
import MainArticle from "./../components/Articles/MainArticle";

export default {
  // name: "article",
  data() {
    return {
      documentId: "",
      fields: {
        uid: null,
        banner_img: null,
        banner_img_url: null,
        title: null,
        description: null,
        category: null,
        author: null,
        author_credentials: null,
        author_social: null,
        timestamp: null
      }
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getSingle("main_banner").then(document => {
        if (document) {
          this.documentId = document.id;
          this.fields.uid = document.uid;
          this.fields.banner_img = document.data.banner_img;
          this.fields.banner_img_url = document.data.banner_img.url;
          this.fields.title = document.data.title;
          this.fields.description = document.data.description;
          this.fields.category = document.data.category;
          this.fields.author = document.data.author;
          this.fields.author_credentials = document.data.author_credentials;
          this.fields.author_social = document.data.author_social;
          this.fields.timestamp = document.data.timestamp;
        } else {
          this.$router.push({ name: "not-found" });
        }
      });
    }
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  },
  components: {
    Navbar,
    SocialShareCol,
    MainArticle
  }
};
</script>

<style scoped>
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  /* Our  Main Container */
  #app {
    height: auto;
    display: grid;
  }
}
/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  #app {
    height: auto;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 25%;
    grid-auto-flow: dense;
  }
}
</style>
