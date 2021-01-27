<template>
  <Layout>
    <main class="page">
      <div class="page__column">
        <div class="page__body">
          <h1 class="page__heading--primary">The road less traveled</h1>
          <span class="page__heading--subhead">A perilous tale of a young man, his horse, and the open road in front of him.</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi ex, bibendum sed euismod in, viverra eu tortor. Phasellus vel sem rutrum, dignissim ligula vel, sagittis ipsum. Maecenas vitae ipsum quis odio iaculis mattis et eget erat. Suspendisse placerat quam sit amet ligula vestibulum condimentum. Maecenas sed mauris nec metus efficitur volutpat non vestibulum nisi. Quisque et justo accumsan, viverra tellus vitae, luctus tellus. Duis non arcu at massa varius porta. Suspendisse aliquam pulvinar aliquam. Fusce vel erat tempus eros tincidunt blandit nec a arcu. Etiam nec ornare velit. Phasellus sagittis eget lorem at eleifend. Pellentesque ultricies nulla mauris, ut tristique nisi porta a. Suspendisse potenti. Nulla facilisi. </p>
          <h2 class="page__heading--secondary">Secondary Heading</h2>
          <p>Nulla in ligula tincidunt nunc dapibus sagittis. Nunc ac porttitor enim. Maecenas vitae sem viverra nunc bibendum semper sed quis erat. Cras eu feugiat odio. Phasellus suscipit magna a maximus facilisis. Ut interdum velit tellus. Fusce et commodo felis. Nulla facilisi. Nulla semper molestie cursus. Sed congue eros elit. </p>
          <h3 class="page__heading--tertiary">Tertiary Heading</h3>
          <p>Quisque varius, orci ac pharetra scelerisque, massa justo suscipit arcu, blandit varius dolor lectus vel nulla. In id diam mi.</p>
          <h4 class="page__heading--fourth">Fourth Heading</h4>
          <p>Nullam nec ipsum scelerisque, posuere nisi quis, porttitor erat. Nulla quis neque at diam mollis tempus at non neque. Proin mollis, lacus a feugiat venenatis, est erat suscipit felis, in ornare mauris risus vitae arcu. Mauris faucibus ex in bibendum ullamcorper. In a lacinia lectus. Praesent pharetra tellus quis metus pellentesque malesuada. Mauris placerat felis non nunc efficitur, vel placerat orci feugiat. </p>
         
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
      margin-top: 2.4rem;
      margin-bottom: 0.5rem;
    }

    &--subhead {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    color: #585656;
    font-size: 16px;
    margin-top: .5rem;
    }
    &--secondary {
      color:red;
    }

    &--tertiary {
      color:green;
    }

    &--fourth {
      color:blue;
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
