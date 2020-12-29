<template>
  <Layout>
    <main class="archive">
        <h1 class="archive__heading">Latest Posts</h1>
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
    title: "Articles",
    meta: [
      {
        name: "description",
        content:
          "Read blog posts, how-to guides, and experiences from me.",
      },
    ],
  },
    
}

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
        date (format: "MMMM DD, YYYY")
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
    minmax(auto, 80ch)
    minmax(1.2rem, 1fr);
  padding-bottom: 3rem;

  &__header {
    grid-column: 2;
    font-weight: 600;
    color:black;
    display: inline-block;
    font-size: 14px;
  }

  &__heading {
    grid-column: 2;
    font-weight: 400;
    border-bottom: 1px solid #eee;
    font-family: "Lato", sans-serif;
  }

  &__list {
    grid-column: 2;
    
  }
}
</style>