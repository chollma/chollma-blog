<template>
  <Layout>
    <main class="page">
      <div class="page__column">
        <div class="page__body">
          <h1 class="page__heading">
            Talks
          </h1>
          <p>
            I love sharing the lessons I've learned, the knowledge I've gained,
            and mentoring others looking to start a career in search engine
            optimization, digital marketing, communications, or a related field.
          </p>
          <p>
            If you are looking for a contributor, you can reach out on <a href="https://twitter.com/CooperHollmaier">Twitter</a>
            or <a href="mailto:cooperjhollmaier@gmail.com">email me</a>.
          </p>
          <h2 class="page__heading page__heading--secondary">
            Past Presentations
          </h2>
          <ul>
            <li class="page__list__item">UX &amp; SEO - UX Columbia Meet-Up</li>
            <li class="page__list__item">
              Organically Grow Your Business' Visibility - Charleston Digital
              Corridor
            </li>
            <li class="page__list__item">
              Building Topical Authority with Content Hubs - Charleston AMA
              Meetup
            </li>
            <li class="page__list__item">
              The Ins and Outs of Technical SEO Audits - Colorado Springs SEO
              Meetup
            </li>
          </ul>
          <h2 class="page__heading page__heading--secondary">Speaker Rider</h2>
          <h3>Hosting</h3>
          <h3>Logistics</h3>
          <h3>Final Thoughts</h3>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo: {
    title: "Talks",
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
      display: none;
      font-weight: 900;
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

  &__list__item{
    display: list-item;
  }
}
</style>
