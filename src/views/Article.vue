<template>
    <div id="app">
        <navbar />
        <social-share-col />
        <main-article v-bind:fields="fields"></main-article>
        <!-- <p> {{ $prismic.richTextAsPlain(fields.description) }}  </p> -->
    </div>
</template>

<script>
import Navbar from "./../components/NavBar/Navbar";

import SocialShareCol from "./../components/Articles/SocialShareCol";
import MainArticle from "./../components/Articles/MainArticle";

export default {
  name: "mainarticle",
  data() {
    return {
      documentId: "",
      fields: {
        uid: null,
        banner_image: null,
        banner_img_url: null,
        title: null,
        description: null,
        category: null,
        author: null,
        author_credentials: null,
        author_social: null,
        author_thumbnail: null,
        author_thumbnail_url: null,
        timestamp: null,
        article_image_one: null,
        article_image_one_url: null,
        article_image_one_caption: null,
        article_content: null,
        quote: null,
        quote_author: null,
        article_content_two: null
      }
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "article"))
        .then(response => {
          if (document) {
            // document contains the document content
            const document = response.results[0];
            this.fields.uid = document.uid;
            this.fields.title = document.data.title;
            this.fields.banner_img_url = document.data.banner_image.url;
            this.fields.description = document.data.description;
            this.fields.category = document.data.category;
            this.fields.author = document.data.author;
            this.fields.author_credentials = document.data.author_credentials;
            this.fields.author_social = document.data.author_social;
            this.fields.author_thumbnail = document.data.author_thumbnail;
            this.fields.author_thumbnail_url = document.data.author_thumbnail.url;
            this.fields.timestamp = document.data.timestamp;
            this.fields.article_image_one = document.data.article_image_one;
            this.fields.article_image_one_url = document.data.article_image_one.url;
            this.fields.article_image_one_caption = document.data.article_image_one_caption;
            this.fields.article_content = document.data.article_content;
            this.fields.quote = document.data.quote;
            this.fields.quote_author = document.data.quote_author;
            this.fields.article_content_two = document.data.article_content_two;
            // var today = new Date();
            // console.log(today);
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
