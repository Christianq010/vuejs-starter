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
                            {{ fields.timestamp }}
                        </div>
                    </div>
                </div>
                <!-- /end of Main Article Details -->

                <!-- Main Article Image Wrapper -->
                <div class="main-article-img-wrapper">
                    <img class="main-article-img" v-bind:src="fields.article_image_one_url" />
                    <!-- Main Article Img caption box-->
                    <div class="main-article-img-cp-box">
                        <div class="main-article-img-cp">
                            {{ $prismic.richTextAsPlain(fields.article_image_one_caption) }}
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
                        <p class="main-article-p">
                            {{ $prismic.richTextAsPlain(fields.article_content) }}
                        </p>
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
                                        {{ $prismic.richTextAsPlain(fields.quote) }}
                                    </div>
                                </div>
                                <!-- /end of Quote content -->
                                <!-- Quote Author -->
                                <div class="main-article-quote-author-box">
                                    <div class="main-article-quote-author">
                                        {{ $prismic.richTextAsPlain(fields.quote_author) }}
                                    </div>
                                </div>
                                <!-- /end of Quote Author -->
                            </div>
                        </div>
                        <!-- /end of Main Article Quote -->

                        <p class="main-article-p">
                            {{ $prismic.richTextAsPlain(fields.article_content_two) }}
                        </p>

                    </div>
                    <!-- /end of Main Article Content -->

                </div>
                <!-- /end of Main Article Content Box-->

                <!-- Main Article Author Box -->
                <div class="main-article-author-box">
                    <!-- Author Picture Box -->
                    <div class="ma-author-picture-box">
                        <img class="ma-author-picture" width="38" height="30" v-bind:src="fields.author_thumbnail_url"/>
                    </div>
                    <!-- /end of Author Picture Box -->
                    <!-- Author Details -->
                    <div class="ma-author-details">
                        <!-- Author Title -->
                        <div class="ma-author-title">
                            <div class="ma-author-title-text">
                                {{ $prismic.richTextAsPlain(fields.author) }}
                            </div>
                            <!-- Author Social Icons -->
                            <a class="ma-author-social-icn" v-bind:href="fields.author_social.url" target="_blank">
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
                                {{ $prismic.richTextAsPlain(fields.author_credentials) }}
                            </div>
                        </div>
                        <!-- /end of Author Description -->
                    </div>
                    <!-- /end of Author Details -->

                </div>
                <!-- /end of Main Article Author Box -->

            </div>
            <!-- /end of Main Article Box -->

        </div>
        <!--/end of Main Article -->

    </section>
    <!-- /end of Section 2 (Main Article) -->
</template>


<script>
export default {
  props: ["fields"],
};
</script>

<style lang="scss" scoped>
@import "./../../scss/main";

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .sec-2-center {
    grid-row: 6 / 16;
    grid-column: 1 / -1;
  }
  .main-article {
  }
  .main-article-box {
    padding: 1em;
  }
  .main-article-category-box {
    margin: 1em 0;
  }
  .main-article-category-link {
  }
  .main-article-category-text {
    font-family: $font-bold;
    font-size: 1.0625rem;
    font-style: italic;
  }
  .main-article-headline {
  }
  .main-article-link {
  }
  .main-article-text {
    font-family: $font-bold;
    font-size: 2.25rem;
    line-height: 2rem;
    letter-spacing: 0.2px;
  }
  /* HP Zone Center Details */
  .main-article-details {
  }
  .main-article-des {
    margin: 0.5em 0;
  }
  .main-article-des-link {
  }
  .main-article-des-text {
    color: #313131;
    font-family: $font-light;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  .main-article-author {
    margin: 0.8em 0;
  }
  .main-article-author-link {
  }
  .main-article-author-text {
    color: #444444;
    font-size: 0.875rem;
    line-height: 0.9375rem;
    font-weight: bold;
  }
  .main-article-timestamp-box {
  }
  .main-article-timestamp {
    color: $time-text;
    font-size: 0.8125rem;
    line-height: 1.375rem;
  }
  .main-article-img-wrapper {
  }
  .main-article-img {
    max-width: 100%;
  }
  .main-article-img-cp-box {
    border-bottom: 1px dotted $article-border-b;
  }
  .main-article-img-cp {
    font-size: 0.75rem;
    margin-top: 7px;
    padding-bottom: 8px;
    line-height: 16px;
    color: $img-caption;
  }
  .main-article-content-box {
  }
  .main-article-content {
    font-size: 1.125rem;
    line-height: 1.75rem;
    border-bottom: 1px dotted $article-border-b;
  }
  .main-article-p {
  }
  .main-article-quote-box {
    padding: 1em 5em;
  }
  .main-article-quote-box svg {
    fill: $primary-color;
  }
  /* Quote box */
  .main-article-quote {
  }
  .main-article-quote-icn {
  }
  .main-article-quote-content {
  }
  .main-article-quote-text {
    font-size: 1.875rem;
    font-family: $font-bold;
    font-weight: bold;
    line-height: 1em;
  }
  .main-article-quote-author-box {
  }
  .main-article-quote-author {
    font-size: 0.75rem;
  }
  /* Author box */
  .main-article-author-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1em 0;
  }
  .ma-author-picture-box {
    margin: 0 1em 0 0;
  }
  .ma-author-picture {
    max-width: 100%;
    height: auto;
    border-radius: 100%;
    border: 1px solid $article-border-b;
    line-height: 0;
  }
  .ma-author-details {
  }
  .ma-author-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .ma-author-title-text {
    color: #444444;
    font-size: 0.875rem;
    line-height: 0.9375rem;
    font-weight: bold;
  }
  .ma-author-social-icn {
    display: flex;
    margin: 0em 0.8em;
  }
  .ma-author-des {
  }
  .ma-author-des-text {
    color: #757575;
    font-size: 0.8125rem;
    line-height: 1.375rem;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .sec-2-center {
    grid-row: 2 / 15;
    grid-column: 3 / 13;
    /* height: 850px; */
  }
  /* Main Article */
  .main-article {
  }
  .main-article-box {
    padding: 1em;
  }
  .main-article-category-box {
    margin: 1em 0;
  }
  .main-article-category-link {
  }
  .main-article-category-text {
    font-family: $font-bold;
    font-size: 1.0625rem;
    font-style: italic;
  }
  .main-article-headline {
  }
  .main-article-link {
  }
  .main-article-text {
    font-family: $font-bold;
    font-size: 3.25rem;
    line-height: 3.25rem;
    letter-spacing: 0.5px;
  }
  /* HP Zone Center Details */
  .main-article-details {
  }
  .main-article-des {
    margin: 0.5em 0;
  }
  .main-article-des-link {
  }
  .main-article-des-text {
    color: #313131;
    font-family: $font-light;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  .main-article-author {
    margin: 0.8em 0;
  }
  .main-article-author-link {
  }
  .main-article-author-text {
    color: #444444;
    font-size: 0.875rem;
    line-height: 0.9375rem;
    font-weight: bold;
  }
  .main-article-timestamp-box {
  }
  .main-article-timestamp {
    color: $time-text;
    font-size: 0.8125rem;
    line-height: 1.375rem;
  }
  .main-article-img-wrapper {
  }
  .main-article-img {
    max-width: 100%;
  }
  .main-article-img-cp-box {
    border-bottom: 1px dotted $article-border-b;
  }
  .main-article-img-cp {
    font-size: 0.75rem;
    margin-top: 7px;
    padding-bottom: 8px;
    line-height: 16px;
    color: $img-caption;
  }
  .main-article-content-box {
  }
  .main-article-content {
    font-size: 1.125rem;
    line-height: 1.75rem;
    border-bottom: 1px dotted $article-border-b;
  }
  .main-article-p {
  }
  .main-article-quote-box {
    padding: 1em 5em;
  }
  .main-article-quote-box svg {
    fill: $primary-color;
  }
  /* Quote box */
  .main-article-quote {
  }
  .main-article-quote-icn {
  }
  .main-article-quote-content {
  }
  .main-article-quote-text {
    font-size: 1.875rem;
    font-family: $font-bold;
    font-weight: bold;
    line-height: 1em;
  }
  .main-article-quote-author-box {
  }
  .main-article-quote-author {
    font-size: 0.75rem;
  }
  /* Author box */
  .main-article-author-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1em 0;
  }
  .ma-author-picture-box {
    margin: 0 1em 0 0;
  }
  .ma-author-picture {
    max-width: 100%;
    height: auto;
    border-radius: 100%;
    border: 1px solid $article-border-b;
    line-height: 0;
  }
  .ma-author-details {
  }
  .ma-author-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .ma-author-title-text {
    color: #444444;
    font-size: 0.875rem;
    line-height: 0.9375rem;
    font-weight: bold;
  }
  .ma-author-social-icn {
    display: flex;
    margin: 0em 0.8em;
  }
  .ma-author-des {
  }
  .ma-author-des-text {
    color: #757575;
    font-size: 0.8125rem;
    line-height: 1.375rem;
  }
}
</style>
