<template>
  <Layout>
    <article class="article">
      <div class="article__column">
        <div class="article__top">
          <div class="article__subhead">
            subhead
          </div>
          <div class="article__head">
            <h1 class="article--head--h1">{{ $page.post.title }}</h1>
          </div> 
          <div class="article__byline">
            By
            <span class="article--byline-bold">Cooper Hollmaier</span>
          </div>
          <span class="article__topchim">
            |
          </span>
          <div class="article__dateline">
            {{ $page.post.date }} &#8226; {{ $page.post.timeToRead }} min read
          </div>
          <div class="article__hero">
          </div>
          <div class="article__social"></div>
        </div>
        <div class="article__body">
          <p v-html="$page.post.content" />
        </div>
        <div class="article__next">
        </div>
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
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.article {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
  font-family: "Lato", san-serif;
  font-weight: 400;
  font-size: 14px;
}
.article__column {
  grid-column: 2;
}

.article__subhead {
  font-weight: 600;
  color:black;
  border-bottom: 3px solid black;
  display: inline-block;
  text-transform:uppercase;
  font-size: 14px;
}
.article__head {
  font-family: "Vollkorn", serif;
  font-weight: 900;
  margin-bottom: 0;
}
.article--head--h1{
  font-weight: 900;
  margin-top: .85rem;
  margin-bottom: .85rem;
}
.article__byline {
  color: gray;
  display: inline-block;
  padding-right: .25rem;
}
.article--byline-bold {
  color: black;
  font-weight: 600;
  display: inline-block;
}

.article__dateline {
  color: gray;
  display: inline-block;
  padding-left: .25rem;
}

.article__body {
  font-family: "Vollkorn", sans-serif;
  font-weight: 400;
  font-size: 18px;
}

.article__hero{
  padding-top: 18px;
}

</style>
