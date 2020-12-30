<template>
  <Layout>
    <article class="article">
      <div class="article__column">
        <div class="article__top">
          <div class="article__subhead">
            subhead
          </div>
          <h1 class="article__heading article__heading--primary">
            {{ $page.post.title }}
          </h1>
          <div class="article__byline">
            By
            <span class="article--byline-bold">Cooper Hollmaier</span>
            <span class="article__topchim">
              |
            </span>
            <span class="article__dateline">
              {{ $page.post.date }} &#8226; {{ $page.post.timeToRead }} min read
            </span>
          </div>
          <div class="article__hero"></div>
          <div class="article__social"></div>
        </div>
        <div class="article__body">
          <p v-html="$page.post.content" />
        </div>
        <div class="article__next"></div>
        <div class="article__comments"></div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "MMMM DD, YYYY")
    timeToRead
  }
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.excerpt
        },
        {
          property: "og:title",
          content: this.$page.post.title
        },
        {
          name: "twitter:card",
          content: this.$page.post.image ? "summary_large_image" : "summary",
        },
        {
          name: "twitter:creator",
          content: "@cooperhollmaier"
        },
        {
          property: "og:description",
          content: this.$page.post.excerpt
        },
        {
          property: "og:image",
          content: this.$page.post.image || ""
        }
      ]
    };
  }
}
</script>
<style lang="scss">
.article {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
  font-family: "Lato", san-serif;
  font-weight: 400;
  font-size: 14px;

  &__column {
    grid-column: 2;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  &__subhead {
    font-weight: 600;
    color: black;
    border-bottom: 3px solid black;
    display: inline-block;
    text-transform: uppercase;
    font-size: 14px;
  }

  &__head {
    font-family: "Vollkorn", serif;
    font-weight: 900;
    margin-bottom: 0;
  }

  &__byline {
    color: gray;
    display: inline-block;
    padding-right: 0.25rem;
  }
  &--byline-bold {
    color: black;
    font-weight: 600;
    display: inline-block;
  }

  &__dateline {
    color: gray;
    display: inline-block;
    padding-left: 0.25rem;
  }

  &__body {
    font-family: "Vollkorn", sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  &__hero {
    padding-top: 18px;
  }

  &__heading {
    &--primary {
      font-family: "Vollkorn", serif;
      font-weight: 900;
      margin-top: 0.85rem;
      margin-bottom: 0.85rem;
    }
  }
}
</style>
