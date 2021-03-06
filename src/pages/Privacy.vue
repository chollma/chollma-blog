<template>
  <Layout>
    <main class="page">
      <div class="page__column">
        <div class="page__body">
          <h1 class="page__heading page__heading--primary">
            Privacy Statement
          </h1>
          <p>
            I take privacy very seriously and believe you have the right to a
            secure and transparent experience. I've provided some notes on
            privacy below.
          </p>
          <p>
            If you have any questions or concerns, please don't hesitate to
            <a href="mailto:cooperjhollmaier@gmail.com">send me an email</a>.
          </p>
          <h2 class="page__heading page__heading--secondary">
            Why are you asking for my email address?
          </h2>
          <p>
            As I publish new articles, code examples, and life updates, I'll
            send out emails periodically with
            <a href="https://app.convertkit.com/#">ConvertKit</a>.
          </p>
          <p>
            I will not, under any circumstances, share your email or personal
            information with anyone. Your contact information will only be used
            to respond to an email you've sent me or send an email update via
            ConvertKit.
          </p>
          <p>
            You can opt out of your subscription at any time using the
            unsubscribe links in every email.
          </p>
          <h2 class="page__heading page__heading--secondary">Final thoughts</h2>
          <p>
            The content on this website is pretty straight forward, with a focus
            on written content. I may decide to use some 3rd-party resources and
            will include any relevant privacy policies for these services here.
          </p>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Privacy",
    meta: [
      {
        name: "description",
        content:
          "We never share, sell, or distribute your information to anyone. It's for internal use only.",
      },
    ],
  },
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
