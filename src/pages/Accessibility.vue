<template>
  <Layout>
    <main class="page">
      <div class="page__column">
        <div class="page__body">
          <h1 class="page__heading page__heading--primary">
            Accessibility Statement
          </h1>
          <p>
            I'm committed to ensuring that everyone visting CooperHollmaier.com feels welcome and included. I am continually improving the user experience for everyone, and applying the relevant accessibility standards. 
          </p>
          <h2 class="page__heading page__heading--secondary">Actions I'm taking</h2> 
          <p>I believe this website should be a positive and accessible place for anyone. Using the <a href="https://www.w3.org/TR/WCAG/">Web Content Accessibility Guidelines (WCAG) 2.1</a> as my north star, I'm making incremental improvements to this frontend experience.
          </p><p> The guidelines outline 3 levels of web accessibility (A, AA, and AAA). My goal is to achieve Level AA compliance with this website.</p>
          <h2 class="page__heading page__heading--secondary">How am I doing?</h2>
          <p>I've only just begun (as of December 2020) and am working to make improvements as time allows. If you have any issues accessing my content, please feel free to <a href="mailto:cooperjhollmaier@gmail.com">send me an email</a>.</p>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Accessibility",
    meta: [
      {
        name: "description",
        content:
          "I believe in creating accessible and inclusive experiences. Learn more about what we're doing for this mission with Cooperhollmaier.com",
      },
    ],
  },
    
}
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

  &__list__item{
    display: list-item;
  }
}
</style>