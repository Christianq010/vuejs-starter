<template>
    <!-- Main Section -->
    <!-- Main Content Wrapper with image-->
        <div class="main-content-wrapper" 
            v-bind:style="{ 'background-image': 'url(' + fields.banner_img_url + ')' }">
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
  data() {
    return {
      documentId: '',
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
      },
      slices: {
        text: null,
        quote: null,
        image: null,
        caption: null
      }
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getSingle('main_article').then(document => {
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

          this.slices.text = document.data.body.text;
          this.slices.quote = document.data.body.quote;
          this.slices.image = document.data.body.image;
          this.slices.caption = document.data.body.caption;
        } else {
          this.$router.push({ name: 'not-found' });
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
  }
}
</script>
