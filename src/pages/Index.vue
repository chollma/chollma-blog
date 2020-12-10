<template>
  <Layout>
    <main class="home">
      <div class="home__column">
        <div class="home__top">
          <div class="home__subhead">
            <g-image src="~/assets/img/cooper.jpeg" />
          </div>
          <div class="home__head">
            <h1 class="home--head--h1">Cooper Hollmaier</h1>
          </div>
        </div>
        <div class="home__body">
          <div class="home__byline">
            <p>
              Hi, I'm Cooper Hollmaier. I'm a life-long learner with a passion
              for developing digital products that are fast, sustainable, and
              accessible for all.
            </p>
          </div>
          <h2>Current projects</h2>
          <p>
            I'm currently supporting technical search engine optimization (SEO)
            at
            <g-link to="https://www.rei.com"
              >Recreational Equipment, Inc.</g-link
            >
          </p>
          <p>
            When I'm not at work, you'll find me writing articles, giving talks,
            tinkering with code, and getting outside.
          </p>
          <h2>Articles</h2>
          <p>
            You can find my articles on remote work, accessibility, SEO, and
            software engineering in the <g-link to="/articles">Articles</g-link>
            section.
          </p>
          <p>
            My most recent article was:
            <g-link to="/article/moving-towards-accessible-first/"
              >Moving Towards Accessible-First</g-link
            >
          </p>
          <h2>Talks</h2>
          <p>
            I've spoken at a number of events in the past about technical SEO,
            content marketing, and digital marketing. You can find my latest
            decks on
            <g-link to="https://speakerdeck.com/chollma">SpeakerDeck</g-link>
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
    title: "Cooper Hollmaier",
  },
};
</script>

<style>
.home {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
  font-family: "Lato", san-serif;
  font-weight: 400;
  font-size: 14px;
}
.home__column {
  grid-column: 2;
}
.home__top {
  text-align: center;
}

.home__subhead {
  display: inline-block;
}
.home__head {
  font-family: "Vollkorn", serif;
  font-weight: 900;
  margin-bottom: 0;
  text-align: center;
}
.home--head--h1 {
  font-weight: 900;
  margin-top: 0.85rem;
  margin-bottom: 0.85rem;
}
.home__byline {
  color: gray;
  display: inline-block;
  padding-right: 0.25rem;
  font-family: "Lato", san-serif;
  font-weight: 400;
  font-size: 14px;
}
.home--byline-bold {
  color: black;
  font-weight: 600;
  display: inline-block;
}

.home__body {
  font-family: "Vollkorn", sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.home__hero {
  padding-top: 18px;
}

img {
  grid-column: 2;
  max-width: 50%;
  justify-self: center;
  border-radius: 50%;
  margin-top: 2em;
  margin-bottom: -0.5em;
  padding: 0.5em;
}
</style>
