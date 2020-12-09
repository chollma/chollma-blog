<template>
  <div class="post-list">
    <p class="date" v-html="post.date" />
    <g-link :to="post.path" class="read"
      ><h2 class="title" v-html="post.title"
    /></g-link>
    <p class="description" v-html="post.description" />
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.post-list {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
}
.read {
  grid-column: 2;
}
</style>
