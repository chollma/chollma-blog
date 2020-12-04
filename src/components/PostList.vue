<template>
  <div class="post-list">
    <!--<hr class="line" />-->
    <!--<p class="date" v-html="post.date" />-->
    <g-link :to="post.path" class="read"><h2 class="title" v-html="post.title"/></g-link>
    <!--<b> {{post.timeToRead}} min read </b>  &nbsp-->
    <p class="description" v-html="post.description" />
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>