<template>
    <!-- Main Section -->
    <!-- Main Content Wrapper with image-->
        <div class="main-content-wrapper" 
            v-bind:style="{ 'background-image': 'url(' + fields.img_url + ')' }">
            <!-- Overlay -->
            <div class="main-content-overlay">
                <!-- Main Heading -->
                <div class="main-content-h1-w">
                  <router-link :to="{ name: 'article', params: { uid: fields.uid }}" v-bind:fields="fields" tag="div">
                    <div class="main-content-h1">
                        {{ $prismic.richTextAsPlain(fields.title) }}
                    </div>
                  </router-link>
                </div>
                <!-- /end of Main heading -->
            </div>
            <!-- /end of Overlay -->
        </div>
        <!-- Main Content Wrapper -->
    <!-- /end of Main Section -->
</template>

<script>
export default {
  name: "MainBanner",
    data () {
    return {
      documentId: '',
      fields: {
        uid: null,
        img_url: null,
        title: null,
        description: null,
        category: null,
        author: null,
        author_credentials: null,
        author_social: null,
        timestamp: null
      }
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getSingle('main_article')
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.uid = document.uid
            this.fields.img_url =  document.data.banner_image.url
            this.fields.title = document.data.title
            this.fields.description = document.data.description
            this.fields.category = document.data.category;
            this.fields.author = document.data.author;
            this.fields.author_credentials = document.data.author_credentials;
            this.fields.author_social = document.data.author_social;
            this.fields.timestamp = document.data.timestamp;
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
  }
}
</script>
<style lang="scss">

@import "./../scss/main";

/* Main Section */
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .main-content-wrapper {
    grid-row: 2 / 8;
    grid-column: 1 / -1;
    /* Styling */
    background-size: cover;
    background-position: 50% 50%;
    width: 100%;
  }
  .main-content-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent 100%);
  }
  /* Main Section Headline H1 */
  .main-content-h1-w {
    text-align: center;
  }
  .main-content-h1 {
    font-family: $font-bold;
    color: white;
    font-size: 3rem;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    margin-top: 4.5em;
  }
  .main-content-h1:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: $primary-color;
  }

}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* Main Section background Image*/
  .main-content-wrapper {
    grid-row: 2 / 8;
    grid-column: 1 / -1;
    /* height: 480px; */
    /* Styling */
    background-size: cover;
    background-position: 50% 50%;
    height: 480px;
  }
  .main-content-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      transparent 100%
    );
  }
  /* Main Section Headline H1 */
  .main-content-h1-w {
    width: 980px;
    margin: 0 auto;
    text-align: center;
  }
  .main-content-h1 {
    font-family: $font-bold;
    color: white;
    font-size: 5.125rem;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  .main-content-h1:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: $primary-color;
  }
}
</style>
