<template>
  <header class="header">
    <nav class="container">
      <div class="header__links ">
        <g-link class="header__menu" to="/">Home</g-link>
        <g-link class="header__menu" to="/talks/">Talks</g-link>
        <g-link class="header__menu" to="/code/">Code</g-link>
        <g-link class="header__menu--highlight" to="/articles/">Blog</g-link>
      </div>
    </nav>
  </header>
</template>

<script></script>

<style lang="scss">
.header {
  justify-content: center;
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 70ch)
    minmax(1.2rem, 1fr);
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 40px;
  text-transform: uppercase;
  line-height: 72px;
  margin-bottom: 10px;
  justify-self: center;

  nav {
    font-weight: 500;
    grid-column: 2;
    justify-self: center;
    padding-top: 1.0625rem;
    padding-bottom: 1.0625rem;
  }

  &__menu {
    background: white;
    position: relative;
    width: calc(100% - 3rem);
    transform: translate(-50%);
    margin-top: 1.5rem;
    &--highlight {
      background: #405e58;
      color: white;
      padding: 0.3125rem;
    }
    a {
      color: black;
      padding: 0.625rem;
      display: block;
      text-align: center;
    }
  }

  &__links {
    grid-column: 2;
    font-weight: 600;
    a {
      font-size: 0.875rem;
      transition: color 200ms ease-in-out;
      position: relative;
      &:not(:last-child) {
        margin-right: 32px;
      }
      &:hover {
        color: #585656;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          display: block;
          height: 3px;
          background: #405e58;
          left: 0;
          right: 0;
          bottom: -15px;
        }
      }
    }
  }
}
</style>
