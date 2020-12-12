<template>
  <Layout>
    <main class="archive">
      <header class="archive__header">
        <h1>Articles</h1>
      </header>
      <section class="archive__list">
        <PostList
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
    </main>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: "A simple blog",
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }

  }
}
</page-query>

<style lang="scss">
.archive{
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
  padding-bottom: 3rem;

  &__header {
    grid-column: 2;
    font-weight: 600;
    color:black;
    display: inline-block;
    font-size: 14px;
  }

  &__list {
    grid-column: 2;
    
  }
}
</style>