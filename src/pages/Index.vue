<template>
  <Layout>
    <main class="home">
      <section class="home__body">
        <section class="home__intro">
          <img class="home__hero__img" src="https://via.placeholder.com/150" />
          <h1>Cooper Hollmaier</h1>
          <p>
            Hi, I'm <strong>Cooper Hollmaier</strong>. I'm a life-long learner
            with a passion for developing digital products that are fast,
            sustainable, and accessible for all.
          </p>
        </section>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo: {
    title: "A simple blog",
  },
};
</script>

<style>
p {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
}
.home {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
}

img {
  justify-self: center;
  max-width: 30%;
  border-radius: 50%;
  margin-top: 2em;
  margin-bottom: -0.5em;
  padding: 0.5em;
}
.home__body {
  grid-column: 2;
}

.home__intro {
  text-align: center;
}
.home__subhead {
  font-weight: 900;
  color: black;
  font-family: "Vollkorn", serif;
  text-transform: uppercase;
  font-size: 18px;
}
.home__slot1 {
}
.home__slot2 {
}
</style>
