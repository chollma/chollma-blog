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
            If you are looking for a contributor, please take note of my speaker rider below. You can reach out about hiring me on <a href="https://twitter.com/CooperHollmaier">Twitter</a>
            or <a href="mailto:cooperjhollmaier@gmail.com">send me an email</a>.
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
          <p>I'm honored that you'd like to include me in your event. I believe in creating opportunities that are inclusive and accessible to all.</p><p>Before considering me as a contributor, please note the following guidelines below. These are a work-in-progress intended to promote the inclusion of diverse perspectives other than mine as a cisgender white male.</p>
          <h3 class="page__heading page__heading--secondary">Hosting</h3>
          <ul>
            <li class="page__list__item">I ask that travel to and from the event is provided.</li>
            <li class="page__list__item">I ask that lodging be provided for the full length of the event.</li>
            <li class="page__list__item">I ask for a ticket to the event. I want to engage with other attendees and see other talks!</li>
            <li class="page__list__item">I ask for a speaker fee because I value my time (and hope you do too). Preparing for talks and events takes time away from my other obligations.</li>
          </ul>
          <h3 class="page__heading page__heading--secondary">Logistics</h3>
          <ul>
            <li class="page__list__item">A publically accessible <strong>Code of Conduct</strong> is required. This document must declare your dedication to creating a safe space, clearly state which behaviors are expected and which are not tolerated, and provide a place for folks to report problems and seek assistance.</li>
            <li class="page__list__item">I won't be part of a white-majority, all-men lineup. I want to ensure underrepresented voices are included in the conversation.</li>
            <li class="page__list__item">Feel free to record me, but let me know ahead of time and know that I can only represent my personal views and not those of any company.</li>
          </ul>
          <h3 class="page__heading page__heading--secondary">Final Thoughts</h3>
            <p>I really appreciate you taking the time to read through these points. I list these out because I want to speak at events that are inclusive, accessible, and represent the diverse perspectives around us. If you have any questions or disagree with any of the information above, please reach out and provide that feedback.</p>
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
