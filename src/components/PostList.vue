<template>
  <article class="archive__listcard">
    <g-link :to="post.path" class="read"><h2 class="archive__title" v-html="post.title"/></g-link>
    <p class="archive__description" v-html="post.description" />
    <p class="archive__date" v-html="post.date"/> 
  </article>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.archive__title{
  font-size: 24px;
  font-weight: 900;
  font-family: Vollkorn, serif;
  color:black;
 }
.archive__description{
  color:black;
  font-family: "Lato", sans-serif;
  font-size:16px;
  line-height: 18px;
  font-weight: 400;

}

.archive__date {
  font-family: "Lato", sans-serif;
  font-size:12px;
  line-height: 18px;
  font-weight: 400;
  color: gray;
}
a {
  text-decoration: none;
}


</style>
