<template>
    <div id="app">
        <navbar />
        <random v-bind:fields="fields"></random>
    </div>
</template>

<script>
import Navbar from "./../components/NavBar/Navbar";
import Random from "./../components/Random";

export default {
  name: "article",
    data () {
    return {
      documentId: '',
      fields: {
        uid: null,
        title: null,
        description: null,
        ctaLink: null,
        ctaText: null,
        url: null,
        banner_img: null,
        article_content: null
      }
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getSingle('main_banner')
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.uid = document.uid
            this.fields.title = document.data.title
            this.fields.description = document.data.description
            this.fields.ctaLink = document.data.cta_link
            this.fields.ctaText = document.data.cta_text
            this.fields.banner_img = document.data.banner_img
            this.fields.url =  document.data.banner_img.url
            this.fields.article_content =  document.data.article_content
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  },
  components: {
    Navbar,
    Random
  }
}
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
