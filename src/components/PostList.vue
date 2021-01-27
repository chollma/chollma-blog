<template>
  <article class="card">
    <p class="card__date" v-html="post.date" />
    <h2 class="card__title" v-html="post.title" />
    <p class="card__description" v-html="post.description" />
    <g-link :to="post.path" class="card__link">Read Full Post</g-link>
  </article>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.card {
  padding: 0.625rem 1.25rem;
  margin: 1.25rem 0;
  border-left: 1px solid #eee;
  &__title {
    font-size: 20px;
    font-weight: 700;
    font-family: Vollkorn, serif;
    color: var(--clr-dark);
    border-bottom: 2px solid black;
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
    color: black;
    font-family: "Lato", sans-serif;
    font-size: 0.875rem;
    border: 1px solid black;
    padding: 0.175rem 0.5rem;
    margin: 0;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      background-color: #405e58;
      color: white;
    }
  }
}
</style>
