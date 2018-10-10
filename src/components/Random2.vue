<template>
    
    <!-- Section 2 (Main Article) -->
    <section class="sec-2-center">

        <!-- Main Article -->
        <div class="main-article">

            <!-- Main Article Box-->
            <div class="main-article-box">

                <!-- Main Article Category -->
                <div class="main-article-category-box">
                    <a class="main-article-category-link">
                        <div class="main-article-category-text">
                            {{ $prismic.richTextAsPlain(fields.category) }}
                        </div>
                    </a>
                </div>
                <!-- /end of Main Article Category -->

                <!-- Main Article Headline -->
                <div class="main-article-headline">
                    <a class="main-article-link">
                        <div class="main-article-text">
                            {{ $prismic.richTextAsPlain(fields.title) }}
                        </div>
                    </a>
                </div>
                <!-- /end of Main Article Headline -->

                <!-- Main Article Details -->
                <div class="main-article-details">
                    <!-- Main Article Details des-->
                    <div class="main-article-des">
                        <div class="main-article-des-link">
                            <div class="main-article-des-text">
                                {{ $prismic.richTextAsPlain(fields.description) }}
                            </div>
                        </div>
                    </div>
                    <!-- Main Article Details author-->
                    <div class="main-article-author">
                        <a class="main-article-author-link">
                            <div class="main-article-author-text">
                                By {{ $prismic.richTextAsPlain(fields.author) }}
                            </div>
                        </a>
                    </div>
                    <!-- Article Details Timestamp -->
                    <div class="main-article-timestamp-box">
                        <div class="main-article-timestamp">
                            {{ $prismic.richTextAsPlain(fields.timestamp) }}
                        </div>
                    </div>
                </div>
                <!-- /end of Main Article Details -->

                <!-- Main Article Image Wrapper -->
                <div class="main-article-img-wrapper">
                    <img class="main-article-img" v-bind:src="article[0].img" />
                    <!-- Main Article Img caption box-->
                    <div class="main-article-img-cp-box">
                        <div class="main-article-img-cp">
                            {{ $prismic.richTextAsPlain(slices.caption) }}
                        </div>
                    </div>
                    <!-- /end of Main Article Img caption -->
                </div>
                <!-- /end of Main Article Image Wrapper -->

                <!-- Main Article Content Box -->
                <div class="main-article-content-box">

                    <!-- Main Article Content -->
                    <div class="main-article-content">
                        
                        <!-- Main Article P tag -->
                        <!-- <p class="main-article-p">
                            {{article[0].content.p1}}
                        </p> -->
                        <!-- /end of Main Article P tag -->

                        <!-- Main Article Quote -->
                        <div class="main-article-quote-box">
                            <div class="main-article-quote">
                                <!-- Quote Icon -->
                                <div class="main-article-quote-icn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
                                    </svg>
                                </div>
                                <!-- /end of Quote Icon -->
                                <!-- Quote content -->
                                <div class="main-article-quote-content">
                                    <div class="main-article-quote-text">
                                        <!-- {{article[0].quote}} -->
                                    </div>
                                </div>
                                <!-- /end of Quote content -->
                                <!-- Quote Author -->
                                <div class="main-article-quote-author-box">
                                    <div class="main-article-quote-author">
                                        <!-- {{article[0].quoteAuthor}} -->
                                    </div>
                                </div>
                                <!-- /end of Quote Author -->
                            </div>
                        </div>
                        <!-- /end of Main Article Quote -->

                        <p class="main-article-p">
                            <!-- {{article[0].content.p5}} -->
                        </p>

                    </div>
                    <!-- /end of Main Article Content -->

                </div>
                <!-- /end of Main Article Content -->

                <!-- Main Article Author Box -->
                <div class="main-article-author-box">
                    <!-- Author Picture Box -->
                    <div class="ma-author-picture-box">
                        <img class="ma-author-picture" width="38" height="30" src="https://img.huffingtonpost.com/asset/55a538cb1b0000c6022802c2.png?ops=100_100"/>
                    </div>
                    <!-- /end of Author Picture Box -->
                    <!-- Author Details -->
                    <div class="ma-author-details">
                        <!-- Author Title -->
                        <div class="ma-author-title">
                            <div class="ma-author-title-text">
                                <!-- {{article[0].author}} -->
                            </div>
                            <!-- Author Social Icons -->
                            <a class="ma-author-social-icn" href="">
                                <!-- Twitter Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#55acef" width="18" height="18" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                                </svg>
                            </a>
                            <!-- /end of Author Social Icons -->
                        </div>
                        <!-- /end of Author Title -->
                        <!-- Author Description -->
                        <div class="ma-author-des">
                            <div class="ma-author-des-text">
                                <!-- {{article[0].authorCredentials}} -->
                            </div>
                        </div>
                        <!-- /end of Author Description -->
                    </div>
                    <!-- /end of Author Details -->

                </div>
                <!-- /end of Main Article Author Box -->

            </div>
            <!-- /end of Main Article Box-->

        </div>
        <!--/end of Main Article -->

    </section>
    <!-- /end of Section 2 (Main Article) -->
</template>

<script>
export default {
  props: ["fields", "slices"],
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
      this.$prismic.client.getSingle("article").then(document => {
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
  }
};
</script>
