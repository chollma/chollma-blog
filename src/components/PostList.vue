<template>
  <article class="card">
    <g-link :to="post.path" class="card__link" 
      ><h2 class="card__title" v-html="post.title"
    /></g-link>
    <p class="card__description" v-html="post.description" />
    <p class="card__date" v-html="post.date" />
  </article>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.card {
  
  &__title {
    font-size: 20px;
    font-weight: 900;
    font-family: Vollkorn, serif;
    color: var(--clr-dark);
  }
  &__description {
    color: black;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
  }

  &__date {
    font-family: "Lato", sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: gray;
  }
  &__link {
    text-decoration: none;
  }
}
</style>
