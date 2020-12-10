<template>
  <Layout>
    <div class="projects">
    <header class="header">
      <h1>Projects</h1>
    </header>
    <main class="projects__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    </main>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projects'
  }
}
</script>

<style>
.projects {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
}
.projects__body {
  grid-column:2;
}
</style>