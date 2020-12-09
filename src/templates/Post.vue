<template>
  <Layout>
    <br />
    <div class="post">
      <div class="post__meta">
        <h1 class="post__title">{{ $page.post.title }}</h1>
        <p class="post-date">
          By Cooper Hollmaier | {{ $page.post.date }} &#8226;
          {{ $page.post.timeToRead }} min read
        </p>
      </div>
      <div class="post__content">
        <img src="https://via.placeholder.com/350x160?text=Hero" />
        
        <p v-html="$page.post.content" />
      </div>
      <div class="post__related">
        <h3>Read this next</h3>
        <img src="https://via.placeholder.com/350x150?text=Related Articles" />
      </div>
    </div>
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
.post {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
}
.post__content {
  grid-column: 2;
  font-family: "Vollkorn", serif;
  font-weight: 400;
}
.post__meta {
  grid-column: 2;
}

.post__title {
  font-family: "Vollkorn", serif;
  font-weight: 900;
  margin-bottom: .75rem;
}

.post__related {
  grid-column: 2;
}

.post-date{
  font-size: var(--fs-tiny);
  font-family: "Lato", serif;
  font-weight: 500;

}

img {
  grid-column: 1 / 4;
  width: 100%;
  max-width: 100ch;
  justify-self: center;
}
</style>
