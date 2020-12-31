<template>
  <Layout>
    <main class="page">
      <div class="page__column">
        <div class="page__body">
          <h1 class="page__heading page__heading--primary">
            Code
          </h1>
          <p>
            Coming Soon!
          </p>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo: {
    title: "Code",
    meta: [
      {
        name: "description",
        content:
          "Hire me to contribute to your next conference, webinar, or podcast!",
      },
    ],
  },
  mounted() {},
};
</script>

<style lang="scss">
.page {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 80ch)
    minmax(1.2rem, 1fr);
  font-family: "Lato", san-serif;
  font-weight: 400;
  font-size: 14px;

  &__column {
    grid-column: 2;
  }

  &__heading {
    &--primary {
      font-family: Vollkorn;
      font-weight: 700;
      margin-top: 0.85rem;
      margin-bottom: 0.85rem;
    }
    &--secondary {
      font-size: 1.5rem;
      font-weight: 600;
      font-family: "Vollkorn";
    }
  }

  &__body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 5rem;
  }

  &__list__item {
    display: list-item;
  }
}
</style>
