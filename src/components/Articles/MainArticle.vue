<template>
    <div>
        <p> {{ $prismic.richTextAsPlain(fields.title) }} </p>
        <!-- <p> {{slices}} </p> -->
    </div>
</template>


<script>
export default {
  props: ["fields", "slices"],
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
