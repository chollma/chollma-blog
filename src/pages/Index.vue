<template>
  <Layout>
    <main class="home">
      <div class="home__column">
        <div class="home__top">
          <div class="home__subhead">
            <g-image class="home__image" src="~/assets/img/cooper.jpeg" />
          </div>
          <div class="home__head">
            <h1 class="home__heading home__heading--primary">
              Cooper Hollmaier
            </h1>
          </div>
        </div>
        <div class="home__body">
          <div class="home__byline">
            <p>
              Hi, I'm <span class="home__byline--bold">Cooper Hollmaier</span>.
              I have a passion for developing digital products that are fast,
              sustainable, and accessible for all.
            </p>
          </div>
          <h2 class="home__heading home__heading--secondary">
            Current projects
          </h2>
          <p>
            I support technical search engine optimization (SEO) at
            <g-link to="https://www.rei.com"
              >Recreational Equipment, Inc.</g-link
            >
            When I'm not working, you'll find me writing
            <g-link to="/articles/">articles</g-link>, giving
            <g-link to="/talks/">talks</g-link>, tinkering with
            <g-link to="/code/">code</g-link>, and getting outside.
          </p>
          <p></p>
          <h2 class="home__heading home__heading--secondary">Articles</h2>
          <p>
            I often write down my thoughts about remote work, accessibility,
            SEO, and software engineering. My most recent article was:
            <g-link to="/article/moving-towards-accessible-first/"
              >Moving Towards Accessible-First</g-link
            >
          </p>
          <p></p>
          <h2 class="home__heading home__heading--secondary">Talks</h2>
          <p>
            I've spoken at a number of events in the past about technical SEO,
            content marketing, and digital marketing. You can find my latest
            decks on
            <g-link to="https://speakerdeck.com/chollma">SpeakerDeck</g-link>
          </p>
          <p>
            To hire me for your event, check out my
            <g-link to="/talks/">speaker rider</g-link>.
          </p>
        </div>
      </div>
      
    </main>
  </Layout>
</template>

<script>
export default {
 metaInfo: {
    title: "Home",
    titleTemplate: null,

    meta: [
      {
        name: "description",
        content:
          "Digital marketing consultant, speaker, educator, and advocate for inclusivity. I help design SEO-friendly products and features that are accessible for all.",
      },
    ],
  },
  
  }
  
</script>

<style lang="scss">
@import "~/assets/scss/mixins";

.home {
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

  &__top {
    text-align: center;
  }

  &__subhead {
    display: inline-block;
  }

  &__image {
    grid-column: 2;
    max-width: 50%;
    justify-self: center;
    border-radius: 50%;
    padding: 2rem 0 2rem 0;
  }

  &__head {
    font-family: "Vollkorn", serif;
    font-weight: 900;
    margin-bottom: 0;
    text-align: center;
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

  &__byline {
    color: rgb(90, 89, 89);
    display: inline-block;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: "Lato", san-serif;
    font-weight: 400;
    font-size: 1.125rem;

    &--bold {
      color: black;
      font-weight: 600;
    }
  }

  &__body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 5rem;
  }
}
</style>
